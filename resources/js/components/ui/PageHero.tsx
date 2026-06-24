import { Link } from '@inertiajs/react'
import React from 'react'
import { ChevronRight } from 'lucide-react'
import HorizontalLine from './horizontal-line'
import CustomImage from './custom-image'
import WaveSvg from '@/assets/svgs/wave'


interface HeroProps {
    title: string,
    description?: string
    src?: string,
    breadCrumb?: string
}

const PageHero: React.FC<HeroProps> = ({ title, description, src, breadCrumb }) => {
    return (
        <section className='relative overflow-hidden pt-15 pb-20'>

            <div className='max-w-7xl mx-auto h-full w-full'>
                <CustomImage
                    wrapperClassName='absolute inset-0'
                    src={src || "/herobanner.jpg"}
                    alt={`Rpc ${title} Banner`}
                    className='absolute inset-0 h-full w-full object-cover object-center'
                    loading='eager'
                    overlayClassName='bg-royal-purple/30'
                />

                {/* Content */}
                <div className='relative z-10 flex items-center h-full'>
                    <div className='container mx-auto lg:px-4 space-y-3 lg:space-y-5 text-white text-center md:text-left'>

                        {/* BreadCrumb */}
                        <p className='text-white flex items-center justify-center md:justify-start text-sm md:text-lg font-medium '>
                            <Link href={"/"} className='text-accent-gold'>Home</Link>
                            <ChevronRight size={20} />
                            <span>{breadCrumb || title}</span>
                        </p>

                        <h2 className='text-2xl md:text-4xl font-bold'>
                            {title}
                            <HorizontalLine className='mt-1 md:mt-2 h-0.75 bg-linear-to-r from-royal-blue to-pink-400 mx-auto md:mx-0'/>
                        </h2>

                        <p className={`text-base md:text-xl font-medium max-w-xl ${!description && 'hidden'}`}>
                            {description}
                        </p>
                    </div>
                </div>

                {/* Bottom Wave */}
                <div className="absolute -bottom-3 md:-bottom-9 left-0 w-full overflow-hidden block">
                    <WaveSvg fill='#fff'/>
              </div>
            </div>


        </section>
    )
}

export default PageHero