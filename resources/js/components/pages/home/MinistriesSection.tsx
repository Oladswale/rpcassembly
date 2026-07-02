import { SectionHeader } from '@/components/ui/section-header'
import HorizontalLine from '@/components/ui/horizontal-line'
import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import { ministries } from '@/types/ministries'
import { ArrowRight } from 'lucide-react'

const MinistriesSection = () => {
    return (
        <section className='py-16 lg:py-24 bg-[#0f0a1e] relative overflow-hidden'>

            {/* Background glow blobs */}
            <div className='absolute top-0 left-1/4 w-96 h-96 bg-royal-purple/20 rounded-full blur-3xl pointer-events-none' />
            <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none' />

            <div className='relative max-w-7xl mx-auto px-6 lg:px-8'>

                <SectionHeader className='text-center mb-12 text-white'>
                    Our <span className='text-accent-gold font-serif italic'>Ministries</span>
                    <HorizontalLine className='mx-auto border-white/20' />
                </SectionHeader>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {ministries.map((ministry) => {
                        const Icon = ministry.icon
                        return (
                            <div
                                key={ministry.id}
                                className='group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 overflow-hidden cursor-default transition-all duration-500 hover:border-white/30 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl'
                            >
                                {/* Glow on hover */}
                                <div
                                    className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl'
                                    style={{ background: `radial-gradient(circle at 50% 0%, ${ministry.color}30, transparent 70%)` }}
                                />

                                {/* Bottom accent line */}
                                <div
                                    className='absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full'
                                    style={{ backgroundColor: ministry.color }}
                                />

                                <div className='relative z-10'>
                                    {/* Icon */}
                                    <div
                                        className='w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110'
                                        style={{ backgroundColor: `${ministry.color}25`, border: `1px solid ${ministry.color}40` }}
                                    >
                                        <Icon style={{ color: ministry.color }} className='w-6 h-6' />
                                    </div>

                                    <h3 className='text-base font-bold text-white mb-2'>{ministry.title}</h3>
                                    <p className='text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300'>
                                        {ministry.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='flex justify-center mt-12'>
                    <Button
                        asChild
                        className='group bg-transparent border border-white/30 text-white hover:bg-accent-gold hover:border-accent-gold hover:text-deep-navy transition-all duration-300 hover:scale-105 active:scale-95 px-8 py-6 text-base font-semibold'
                    >
                        <Link href='/ministries' className='uppercase flex items-center gap-2'>
                            Explore All Ministries
                            <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform duration-300' />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default MinistriesSection
