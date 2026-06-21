import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { router } from '@inertiajs/react'
import { SectionHeader } from '@/components/ui/section-header'

const AboutSection = () => {

    return (
        <section className='bg-gray-100'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid lg:grid-cols-2'>
                    {/* left */}
                    <div className='space-y-1.5 sm:space-y-3 lg:space-y-4 text-center lg:text-left'>
                        <SectionHeader className='lg:text-xl '>
                            ABOUT <span className='text-royal-purple'>RPC</span> ASSEMBLY
                        </SectionHeader>

                        <h2 className='text-[1.32rem] sm:text-4xl lg:text-[2.7rem] font-bold lg:leading-11'>
                            We Are A Family <br className='hidden lg:block' /> Rooted In <span className='text-royal-purple'>Christ</span>
                        </h2>

                        <p className='text-base sm:text-xl font-medium '>At RPC Assembly, we are commited to raising redeemed people who live a life of pupose and
                            impact. Join us as we worship, grow, and transform lives together.
                        </p>

                        <Button onClick={() => router.visit("/about")} size="lg" className="mt-2 bg-royal-purple cursor-pointer font-semibold text-white group transition-all duration-500 hover:scale-105">

                            DISCOVER MORE ABOUT US <span className='ml-2 group-hover:translate-x-2 transition-all duration-500 '><ArrowRight /></span>
                        </Button>
                    </div>

                    {/* right */}
                    <div></div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection