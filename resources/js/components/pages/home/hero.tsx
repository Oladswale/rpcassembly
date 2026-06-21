import WaveSvg from '@/assets/svgs/wave'
import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import React from 'react'
import Img1 from '@/assets/images/img-1.webp'
import Img2 from '@/assets/images/img-2.webp'
import Img3 from '@/assets/images/img-3.webp'
import Img4 from '@/assets/images/img-4.webp'
import { ArrowRight, MapPin } from 'lucide-react'

const Hero = () => {
    const images = [Img1, Img2, Img3, Img4]

    return (
        <section className='relative pt-12 pb-16  md:pb-18 lg:py-20 lg:pb-30 overflow-hidden '>

            <div className='max-w-7xl mx-auto h-full w-full'>
                <img
                    src="/herobanner.jpg"
                    alt="Rpc hero banner"
                    className='absolute inset-0 h-full w-full object-cover object-center'
                    loading='eager'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-royal-purple/40' />

                {/* content */}
                <div className='relative z-10 flex h-full items-center '>
                    <div className='container mx-auto lg:px-4 space-y-3 lg:space-y-5 text-white text-center md:text-left'>

                        <p className='px-3 lg:px-4 pt-1.5 pb-1 border-2 border-white w-fit rounded-full text-xs lg:text-base font-medium mx-auto md:mx-0'>
                            WELCOME TO RPC ASSEMBLY
                        </p>

                        <h1 className='text-[1.6rem] leading-8 md:text-4xl md:leading-12 lg:text-6xl font-black  lg:leading-16'>
                            Raising Redeemed People
                            <span className='block text-accent-gold'>Impacting Our World</span>
                        </h1>

                        <p className='text-base leading-5 md:text-xl lg:2xl font-medium'>
                            Place of worship and transformation through Jesus Christ
                        </p>

                        <div className='grid w-fit grid-cols-1 md:grid-cols-2 gap-5 mx-auto md:mx-0 mt-5 lg:mt-7'>
                            <Button size={"lg"}
                                className="bg-accent-gold border border-accent-gold hover:bg-transparent hover:border-white group transition-colors duration-500 shadow">

                                <Link href={"/events"} className='uppercase text-base font-semibold  text-deep-navy flex gap-x-1.5 group-hover:text-white'>
                                    Join us this sunday
                                    <ArrowRight className="group-hover:translate-x-2 transition duration-500" />
                                </Link>
                            </Button>

                            <Button size="lg"
                                className="uppercase border border-white shadow hover:bg-accent-gold hover:text-deep-navy hover:border-accent-gold transition-colors duration-500">
                                <Link href="/contact" className='text-base uppercase font-semibold flex gap-x-1.5'>
                                    plan your visit
                                    <MapPin />
                                </Link>
                            </Button>
                        </div>

                        <div className='flex gap-x-2 items-center justify-center md:justify-start mt-5 lg:mt-7'>
                            {
                                images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`member-${index + 1}`}
                                        className={`w-12 h-12 lg:w-14 lg:h-14 object-cover  rounded-full ${index !== 0 && '-ml-5'} `}
                                    />
                                ))
                            }
                            <p className='text-sm md:text-lg text-left font-medium'>Be a part of our growing family</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Wave */}
                <div className="absolute -bottom-3 md:-bottom-9 left-0 w-full overflow-hidden block">
                    <WaveSvg />
                </div>
            </div>
        </section>
    )
}

export default Hero