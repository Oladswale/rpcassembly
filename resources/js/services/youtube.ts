import { SermonType } from '@/types/data'

const CACHE_TTL = 2 * 60 * 1000

type CacheEntry = {
    data: SermonType[]
    timestamp: number
}

const cache = new Map<string, CacheEntry>()

type YouTubePlaylistItem = {
    snippet: {
        publishedAt: string
        description: string
        channelTitle: string
        resourceId: {
            kind: string
            videoId: string
        }
    }
}

type YouTubePlaylistResponse = {
    items?: YouTubePlaylistItem[]
    error?: { message: string }
}

type YouTubeVideoItem = {
    id: string
    snippet: {
        publishedAt: string
        title: string
        description: string
        channelTitle: string
    }
    liveStreamingDetails?: {
        actualStartTime?: string
        actualEndTime?: string
        scheduledStartTime?: string
    }
}

type YouTubeVideosResponse = {
    items?: YouTubeVideoItem[]
    error?: { message: string }
}

function formatDate(iso?: string): string {
    if (!iso) return ''
    const d = new Date(iso)
    return d.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })
}

export async function fetchLatestVideos(maxResults = 4): Promise<SermonType[]> {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY
    const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID

    if (!apiKey || !channelId) {
        console.warn('YouTube API key or channel ID not configured')
        return []
    }

    const cacheKey = `${channelId}_${maxResults}`
    const cached = cache.get(cacheKey)

    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
        return cached.data
    }

    const livePlaylistId = channelId.replace(/^UC/, 'UULV')

    // Step 1: fetch video IDs from the live playlist (1 quota)
    const playlistUrl = new URL('https://www.googleapis.com/youtube/v3/playlistItems')

    playlistUrl.searchParams.set('part', 'snippet')
    playlistUrl.searchParams.set('playlistId', livePlaylistId)
    playlistUrl.searchParams.set('maxResults', String(maxResults + 4))
    playlistUrl.searchParams.set('key', apiKey)

    const playlistRes = await fetch(playlistUrl.toString())

    if (!playlistRes.ok) {
        throw new Error(`YouTube playlist API responded with ${playlistRes.status}`)
    }

    const playlistData: YouTubePlaylistResponse = await playlistRes.json()

    if (playlistData.error) {
        throw new Error(playlistData.error.message)
    }

    const videoIds = (playlistData.items ?? []).map(
        (item) => item.snippet.resourceId.videoId
    )

    if (videoIds.length === 0) {
        return []
    }

    // Step 2: hydrate with liveStreamingDetails (1 quota)
    const videosUrl = new URL('https://www.googleapis.com/youtube/v3/videos')

    videosUrl.searchParams.set('part', 'snippet,liveStreamingDetails')
    videosUrl.searchParams.set('id', videoIds.join(','))
    videosUrl.searchParams.set('key', apiKey)

    const videosRes = await fetch(videosUrl.toString())

    if (!videosRes.ok) {
        throw new Error(`YouTube videos API responded with ${videosRes.status}`)
    }

    const videosData: YouTubeVideosResponse = await videosRes.json()

    if (videosData.error) {
        throw new Error(videosData.error.message)
    }

    const videos = (videosData.items ?? [])
        .filter((item) => {
            const details = item.liveStreamingDetails
            if (!details) return false

            // discard upcoming: has scheduledStartTime but no actualStartTime
            if (details.scheduledStartTime && !details.actualStartTime) return false

            return true
        })
        .sort((a, b) => {
            const aTime = a.liveStreamingDetails?.actualStartTime ?? a.snippet.publishedAt
            const bTime = b.liveStreamingDetails?.actualStartTime ?? b.snippet.publishedAt
            return bTime.localeCompare(aTime)
        })
        .slice(0, maxResults)
        .map((item) => {
            const details = item.liveStreamingDetails
            const isLive = !!(details?.actualStartTime && !details?.actualEndTime)

            return {
                id: item.id,
                videoUrl: `https://www.youtube.com/watch?v=${item.id}`,
                title: item.snippet.title,
                speaker: item.snippet.channelTitle,
                date: formatDate(details?.actualStartTime ?? item.snippet.publishedAt),
                description: item.snippet.description,
                isLive,
            }
        })

    cache.set(cacheKey, { data: videos, timestamp: Date.now() })

    return videos
}

export function clearVideoCache(): void {
    cache.clear()
}
