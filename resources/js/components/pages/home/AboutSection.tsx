import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { router } from '@inertiajs/react'
import { SectionHeader } from '@/components/ui/section-header'

const AboutSection = () => {

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
                            <div className='absolute -inset-4 bg-royal-purple/10 rounded-2xl transform rotate-3'></div>
                            <img 
                                src="/church-about.jpg" 
                                alt="RPC Assembly Community" 
                                className='relative rounded-2xl shadow-2xl w-full h-auto object-cover'
                                onError={(e) => {
                                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%23f5f0e8' width='600' height='400'/%3E%3Ctext fill='%236c2bd9' font-family='serif' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ECommunity Image%3C/text%3E%3C/svg%3E"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection