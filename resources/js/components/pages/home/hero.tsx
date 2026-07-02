import WaveSvg from '@/assets/svgs/wave'
import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import Img1 from '@/assets/images/img-1.webp'
import Img2 from '@/assets/images/img-2.webp'
import Img3 from '@/assets/images/img-3.webp'
import Img4 from '@/assets/images/img-4.webp'
import { ArrowRight, MapPin } from 'lucide-react'

const Hero = () => {
    const images = [Img1, Img2, Img3, Img4]

    return (
        <section className='relative pt-16 pb-20 md:pb-24 lg:py-32 lg:pb-40 overflow-hidden min-h-[90vh] flex items-center'>

            <div className='max-w-7xl mx-auto h-full w-full relative'>
                <img
                    src="/herobanner.jpg"
                    alt="Rpc hero banner"
                    className='absolute inset-0 h-full w-full object-cover object-center'
                    loading='eager'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-r from-deep-purple/80 via-royal-purple/70 to-deep-purple/60' />

                {/* content */}
                <div className='relative z-10 flex h-full items-center'>
                    <div className='container mx-auto lg:px-8 space-y-6 lg:space-y-8 text-white text-center md:text-left'>

                        <p className='px-4 lg:px-6 py-2 border-2 border-accent-gold/60 bg-white/10 backdrop-blur-sm w-fit rounded-full text-sm lg:text-lg font-medium tracking-wider mx-auto md:mx-0 uppercase'>
                            Welcome to RPC Assembly
                        </p>

                        <h1 className='text-[2rem] leading-tight md:text-5xl md:leading-tight lg:text-7xl font-serif font-bold lg:leading-tight tracking-tight'>
                            Raising Redeemed People
                            <span className='block text-accent-gold font-serif italic'>Impacting Our World</span>
                        </h1>

                        <p className='text-lg leading-relaxed md:text-2xl lg:text-3xl font-light max-w-2xl mx-auto md:mx-0 font-sans'>
                            A place of worship, transformation, and community through Jesus Christ
                        </p>

                        <div className='grid w-fit grid-cols-1 md:grid-cols-2 gap-4 mx-auto md:mx-0 mt-8 lg:mt-10'>
                            <Button size={"lg"}
                                className="bg-accent-gold border border-accent-gold hover:bg-transparent hover:border-accent-gold group transition-all duration-500 shadow-lg hover:shadow-xl text-lg px-8 py-6">

                                <Link href={"/events"} className='uppercase text-base font-semibold text-deep-navy flex gap-x-2 group-hover:text-accent-gold items-center'>
                                    Join Us This Sunday
                                    <ArrowRight className="group-hover:translate-x-2 transition duration-500" />
                                </Link>
                            </Button>

                            <Button size="lg"
                                className="uppercase border-2 border-white/80 bg-white/10 backdrop-blur-sm shadow-lg hover:bg-accent-gold hover:text-deep-navy hover:border-accent-gold transition-all duration-500 text-lg px-8 py-6">
                                <Link href="/contact" className='text-base uppercase font-semibold flex gap-x-2 items-center'>
                                    Plan Your Visit
                                    <MapPin className="w-5 h-5" />
                                </Link>
                            </Button>
                        </div>

                        <div className='flex gap-x-3 items-center justify-center md:justify-start mt-8 lg:mt-10'>
                            {
                                images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`member-${index + 1}`}
                                        className={`w-14 h-14 lg:w-16 lg:h-16 object-cover rounded-full border-2 border-white/50 ${index !== 0 && '-ml-6'} hover:scale-110 transition-transform duration-300`}
                                    />
                                ))
                            }
                            <p className='text-base md:text-lg lg:text-xl text-left font-medium font-sans'>Join our growing family of believers</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Wave */}
                <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full overflow-hidden block">
                    <WaveSvg />
                </div>
            </div>
        </section>
    )
}

export default Hero