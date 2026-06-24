import { Play, Loader2 } from 'lucide-react'
import { useState } from 'react'

function getYouTubeId(url: string): string | null {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/)
    return match ? match[1] : null
}

type YouTubeVideoProps = {
    videoUrl: string
    title?: string
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoUrl, title }) => {
    const [playing, setPlaying] = useState(false)
    const [loading, setLoading] = useState(false)
    const videoId = getYouTubeId(videoUrl)

    const handlePlay = () => {
        setLoading(true)
        setPlaying(true)
    }

    const handleIframeLoad = () => {
        setLoading(false)
    }

    if (!videoId) {
        return (
            <div className="w-full aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
                Invalid video URL
            </div>
        )
    }

    return (
        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden group">
            {!playing && (
                <>
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt={title || 'Video thumbnail'}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                    <button
                        onClick={handlePlay}
                        className="absolute inset-0 flex items-center justify-center"
                        aria-label="Play video"
                    >
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-royal-purple/90 hover:bg-royal-purple rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95">
                            <Play size={32} className="text-white ml-1" fill="white" />
                        </div>
                    </button>
                </>
            )}

            {playing && (
                <>
                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
                            <Loader2 size={40} className="text-royal-purple animate-spin" />
                        </div>
                    )}
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                        title={title || 'YouTube video'}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={handleIframeLoad}
                        className="absolute inset-0 w-full h-full"
                    />
                </>
            )}
        </div>
    )
}

export default YouTubeVideo
