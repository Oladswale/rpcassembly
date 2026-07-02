import React, { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { router } from '@inertiajs/react'
import { SectionHeader } from '@/components/ui/section-header'

const AboutSection = () => {
    const [currentImage, setCurrentImage] = useState(0)
    const communityImages = ['/comm1.jpg', '/comm2.jpg', '/comm3.jpg', '/comm4.jpg']

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % communityImages.length)
        }, 4000) // Change image every 4 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <section className='py-16 lg:py-24 bg-soft-beige'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
                    {/* left */}
                    <div className='space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1'>
                        <SectionHeader className='text-2xl lg:text-3xl font-serif'>
                            About <span className='text-royal-purple'>RPC</span> Assembly
                        </SectionHeader>

                        <h2 className='text-2xl sm:text-4xl lg:text-5xl font-serif font-bold lg:leading-tight'>
                            We Are A Family <br className='hidden lg:block' /> Rooted In <span className='text-royal-purple italic'>Christ</span>
                        </h2>

                        <p className='text-lg sm:text-xl lg:text-2xl font-light leading-relaxed font-sans text-gray-700'>
                            At RPC Assembly, we are committed to raising redeemed people who live a life of purpose and
                            impact. Join us as we worship, grow, and transform lives together in faith and community.
                        </p>

                        <div className='grid grid-cols-3 gap-4 my-8'>
                            <div className='text-center'>
                                <div className='text-3xl lg:text-4xl font-serif font-bold text-royal-purple'>500+</div>
                                <div className='text-sm lg:text-base text-gray-600 font-sans'>Members</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-3xl lg:text-4xl font-serif font-bold text-royal-purple'>15+</div>
                                <div className='text-sm lg:text-base text-gray-600 font-sans'>Ministries</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-3xl lg:text-4xl font-serif font-bold text-royal-purple'>10+</div>
                                <div className='text-sm lg:text-base text-gray-600 font-sans'>Years</div>
                            </div>
                        </div>

                        <Button onClick={() => router.visit("/about")} size="lg" className="mt-4 bg-royal-purple cursor-pointer font-semibold text-white group transition-all duration-500 hover:scale-105 px-8 py-6 text-lg shadow-lg hover:shadow-xl">

                            Discover More About Us <span className='ml-2 group-hover:translate-x-2 transition-all duration-500 '><ArrowRight /></span>
                        </Button>
                    </div>

                    {/* right */}
                    <div className='order-1 lg:order-2'>
                        <div className='relative'>
                            <div className='absolute -inset-4 bg-deep-purple rounded-2xl transform rotate-3'></div>
                            <div className='relative rounded-2xl shadow-2xl w-full h-auto overflow-hidden aspect-[4/3]'>
                                {communityImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`RPC Assembly Community ${index + 1}`}
                                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                                            index === currentImage ? 'opacity-100' : 'opacity-0'
                                        }`}
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none'
                                        }}
                                    />
                                ))}
                            </div>
                            {/* Slideshow indicators */}
                            <div className='flex gap-2 justify-center mt-4'>
                                {communityImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImage(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === currentImage ? 'bg-royal-purple w-8' : 'bg-deep-purple/40'
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection