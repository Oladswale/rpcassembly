import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';
import PageHero from '@/components/ui/PageHero';
import { Button } from '@/components/ui/button';
import { Play, User, Calendar } from 'lucide-react';
import { sermons } from '@/types/data';
import { useState } from 'react';

const ytId = (url: string) => {
    const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/)
    return match ? match[1] : ''
}

export default function Sermons() {
    const [activeId, setActiveId] = useState<string | null>(null)
    const featured = sermons[0]
    const rest = sermons.slice(1)

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
                            {rest.map((sermon) => {
                                const id = ytId(sermon.videoUrl)
                                const isActive = activeId === id
                                return (
                                    <article key={sermon.id} className='group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col'>
                                        <div className='relative aspect-video bg-black cursor-pointer' onClick={() => setActiveId(id)}>
                                            {isActive ? (
                                                <iframe
                                                    className='w-full h-full'
                                                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                                                    title={sermon.title}
                                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                    allowFullScreen
                                                />
                                            ) : (
                                                <>
                                                    <img
                                                        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                                                        alt={sermon.title}
                                                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                                                    />
                                                    <div className='absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300' />
                                                    <div className='absolute inset-0 flex items-center justify-center'>
                                                        <div className='w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                                            <Play size={22} className='text-white fill-white ml-1' />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        <div className='p-4 flex flex-col gap-2 flex-1'>
                                            <h4 className='font-bold text-deep-navy text-base line-clamp-2 group-hover:text-royal-purple transition-colors duration-200'>
                                                {sermon.title}
                                            </h4>
                                            <div className='flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500'>
                                                <span className='flex items-center gap-1'><User size={12} className='text-royal-purple' />{sermon.speaker}</span>
                                                <span className='flex items-center gap-1'><Calendar size={12} className='text-royal-purple' />{sermon.date}</span>
                                            </div>
                                            <p className='text-xs text-gray-500 line-clamp-2 leading-relaxed mt-1'>{sermon.description}</p>
                                        </div>
                                    </article>
                                )
                            })}
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
