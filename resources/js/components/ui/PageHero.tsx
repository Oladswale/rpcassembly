import { Link } from '@inertiajs/react'
import React from 'react'
import { ChevronRight } from 'lucide-react'
import WaveSvg from '@/assets/svgs/wave'
import { cn } from '@/utils'

interface HeroProps {
    title: string
    description?: string
    src?: string
    breadCrumb?: string
    className?: string
}

const PageHero: React.FC<HeroProps> = ({ title, description, src, breadCrumb, className }) => {
    return (
        <section className={cn('relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40', className)}>

            <img
                src={src || '/herobanner.jpg'}
                alt={`RPC ${title} Banner`}
                className='absolute inset-0 h-full w-full object-cover object-center'
                loading='eager'
            />

            {/* Layered overlay for depth */}
            <div className='absolute inset-0 bg-gradient-to-b from-deep-purple/80 via-deep-purple/60 to-deep-purple/90' />
            <div className='absolute inset-0 bg-gradient-to-r from-deep-purple/60 to-transparent' />

            {/* Content */}
            <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center text-white'>

                {/* Breadcrumb */}
                <div className='flex items-center gap-1 text-sm text-white/60 mb-6'>
                    <Link href='/' className='hover:text-accent-gold transition-colors duration-200'>Home</Link>
                    <ChevronRight size={14} className='text-white/40' />
                    <span className='text-white/90'>{breadCrumb || title}</span>
                </div>

                {/* Title */}
                <h1 className='text-4xl md:text-6xl font-black font-serif leading-tight mb-4'>
                    {title}
                </h1>

                {/* Gold accent line */}
                <div className='w-16 h-1 rounded-full bg-accent-gold mb-6' />

                {description && (
                    <p className='text-base md:text-xl text-white/75 max-w-2xl leading-relaxed font-sans'>
                        {description}
                    </p>
                )}
            </div>

            {/* Bottom Wave */}
            <div className='absolute -bottom-3 md:-bottom-9 left-0 w-full overflow-hidden'>
                <WaveSvg fill='#fff' />
            </div>
        </section>
    )
}

export default PageHero
