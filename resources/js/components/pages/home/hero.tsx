import WaveSvg from '@/assets/svgs/wave'
import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import Img1 from '@/assets/images/img-1.webp'
import Img2 from '@/assets/images/img-2.webp'
import Img3 from '@/assets/images/img-3.webp'
import Img4 from '@/assets/images/img-4.webp'
import { ArrowRight, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

const slides = ['/hero.jpg', '/youth.jpg', '/worship.jpg', '/pst.jpg', '/pst2.jpg', '/pst3.jpg', '/pst4.jpg']

const Hero = () => {
    const images = [Img1, Img2, Img3, Img4]
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className='relative pt-20 pb-28 md:pt-24 md:pb-32 lg:py-36 lg:pb-44 overflow-hidden'>

            {slides.map((src, index) => (
                <img
                    key={src}
                    src={src}
                    alt="Rpc hero banner"
                    className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                />
            ))}

            {/* Overlay */}
            <div className='absolute inset-0 bg-gradient-to-r from-deep-purple/95 via-royal-purple/75 to-deep-purple/20' />

            {/* Content */}
            <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
                <div className='max-w-2xl space-y-6 text-white'>

                    {/* Badge */}
                    <span className='inline-block px-4 py-1.5 border border-white/60 rounded-full text-xs font-semibold tracking-widest uppercase text-white/80'>
                        Welcome to RPC Assembly
                    </span>

                    {/* Heading */}
                    <h1 className='text-4xl leading-tight md:text-5xl lg:text-6xl font-black font-serif lg:leading-tight'>
                        Raising Redeemed People
                        <span className='block text-accent-gold italic mt-1 whitespace-nowrap'>Impacting Our World</span>
                    </h1>

                    {/* Subtext */}
                    <p className='text-base md:text-lg text-white/80 font-sans leading-relaxed md:whitespace-nowrap'>
                        A place of worship and transformation through Jesus Christ
                    </p>

                    {/* Buttons */}
                    <div className='flex flex-wrap gap-4 pt-2'>
                        <Button size="lg"
                            className="relative bg-accent-gold border border-accent-gold hover:bg-transparent hover:border-white group transition-all duration-500 shadow hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95">
                            <Link href="/events" className='uppercase text-sm font-semibold text-deep-navy flex items-center gap-x-2 group-hover:text-white font-sans'>
                                Join us this Sunday
                                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                        </Button>

                        <Button size="lg"
                            className="uppercase border border-white/70 bg-transparent shadow hover:bg-accent-gold hover:text-deep-navy hover:border-accent-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all duration-500 group">
                            <a href="#map-section" className='text-sm uppercase font-semibold flex items-center gap-x-2 font-sans'>
                                Plan your visit
                                <MapPin size={16} className="group-hover:animate-bounce" />
                            </a>
                        </Button>
                    </div>

                    {/* Slide indicators */}
                    <div className='flex items-center gap-2 pt-2'>
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === current ? 'w-6 bg-accent-gold' : 'w-1.5 bg-white/40'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Member avatars */}
                    <div className='flex items-center gap-x-3 pt-2'>
                        <div className='flex'>
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`member-${index + 1}`}
                                    className={`w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full ring-2 ring-deep-purple ${index !== 0 ? '-ml-3' : ''}`}
                                />
                            ))}
                        </div>
                        <p className='text-sm text-white/80 font-sans'>Be a part of our growing family</p>
                    </div>

                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute -bottom-3 md:-bottom-9 left-0 w-full overflow-hidden">
                <WaveSvg />
            </div>
        </section>
    )
}

export default Hero
