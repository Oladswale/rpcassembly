import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';
import PageHero from '@/components/ui/PageHero';
import { Button } from '@/components/ui/button';
import { Play, User, Calendar, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fetchLatestVideos } from '@/services/youtube';
import type { SermonType } from '@/types/data';
import SermonCard from '@/components/ui/sermon-card';

const ytId = (url: string) => {
    const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/)
    return match ? match[1] : ''
}

export default function Sermons() {
    const [videos, setVideos] = useState<SermonType[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let cancelled = false
        setLoading(true)
        fetchLatestVideos(7).then((data) => {
            if (!cancelled) {
                setVideos(data)
                setLoading(false)
            }
        }).catch((err: unknown) => {
            if (!cancelled) {
                setError(err instanceof Error ? err.message : 'Failed to load videos')
                setLoading(false)
            }
        })
        return () => { cancelled = true }
    }, [])

    if (loading) {
        return (
            <PublicLayout>
                <Head title="Sermons" />
                <main>
                    <PageHero
                        title='Sermons'
                        description='Watch and listen to our latest messages to strengthen your faith and grow in your spiritual journey'
                        src='/pst.jpg'
                    />
                    <section className='py-16 lg:py-24 bg-white'>
                        <div className='max-w-7xl mx-auto px-6 lg:px-8 flex justify-center'>
                            <Loader2 size={40} className='text-royal-purple animate-spin' />
                        </div>
                    </section>
                </main>
            </PublicLayout>
        )
    }

    if (error) {
        return (
            <PublicLayout>
                <Head title="Sermons" />
                <main>
                    <PageHero
                        title='Sermons'
                        description='Watch and listen to our latest messages to strengthen your faith and grow in your spiritual journey'
                        src='/pst.jpg'
                    />
                    <section className='py-16 lg:py-24 bg-white'>
                        <div className='max-w-7xl mx-auto px-6 lg:px-8 text-center'>
                            <p className='text-red-500 mb-4'>{error}</p>
                            <div className='relative group inline-block'>
                                <div className='absolute -inset-1 bg-gradient-to-r from-royal-purple to-accent-gold rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-500' />
                                <Button asChild className='relative bg-royal-purple text-white hover:bg-deep-purple font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 px-8 py-6 text-base'>
                                    <a href='https://www.youtube.com/@rpcassembly4969' target='_blank' rel='noopener noreferrer' className='flex items-center gap-2'>
                                        <Play size={16} className='fill-white' /> Visit YouTube Channel
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </section>
                </main>
            </PublicLayout>
        )
    }

    const featured = videos[0]
    const rest = videos.slice(1)

    return (
        <PublicLayout>
            <Head title="Sermons" />

            <main>
                <PageHero
                    title='Sermons'
                    description='Watch and listen to our latest messages to strengthen your faith and grow in your spiritual journey'
                    src='/pst.jpg'
                />

                <section className='py-16 lg:py-24 bg-white'>
                    <div className='max-w-7xl mx-auto px-6 lg:px-8'>

                        {/* Featured */}
                        <div className='mb-16'>
                            <div className='flex items-center gap-3 mb-5'>
                                <span className='bg-royal-purple text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full'>Latest Sermon</span>
                            </div>

                            <div className='grid lg:grid-cols-2 gap-8 items-center bg-[#0f0a1e] rounded-2xl overflow-hidden'>
                                <div className='aspect-video w-full'>
                                    <iframe
                                        className='w-full h-full'
                                        src={`https://www.youtube.com/embed/${ytId(featured.videoUrl)}`}
                                        title={featured.title}
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                        allowFullScreen
                                    />
                                </div>
                                <div className='p-6 lg:p-8 text-white'>
                                    <h2 className='text-2xl lg:text-3xl font-black font-serif mb-4 leading-tight'>{featured.title}</h2>
                                    <div className='flex flex-col gap-2 text-white/60 text-sm mb-4'>
                                        <span className='flex items-center gap-2'><User size={14} className='text-accent-gold' />{featured.speaker}</span>
                                        <span className='flex items-center gap-2'><Calendar size={14} className='text-accent-gold' />{featured.date}</span>
                                    </div>
                                    <p className='text-white/60 leading-relaxed text-sm'>{featured.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Grid */}
                        <h3 className='text-2xl font-black font-serif text-deep-navy mb-8'>Recent Sermons</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {rest.map((sermon) => (
                                <SermonCard key={sermon.id} {...sermon} />
                            ))}
                        </div>

                        {/* CTA */}
                        <div className='flex justify-center mt-14'>
                            <div className='relative group'>
                                <div className='absolute -inset-1 bg-gradient-to-r from-royal-purple to-accent-gold rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-500' />
                                <Button asChild className='relative bg-royal-purple text-white hover:bg-deep-purple font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 px-8 py-6 text-base'>
                                    <a href='https://www.youtube.com/@rpcassembly4969' target='_blank' rel='noopener noreferrer' className='uppercase flex items-center gap-2'>
                                        <Play size={16} className='fill-white' /> View All on YouTube
                                    </a>
                                </Button>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </PublicLayout>
    );
}
