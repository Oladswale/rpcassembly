import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'

const CtaSection = () => {
    return (
        <section className='bg-gradient-to-r from-royal-purple to-deep-purple'>
            <div className='max-w-4xl mx-auto text-center'>
                <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight'>
                    Ready to <span className='text-accent-gold'>Worship</span> With Us?
                </h2>
                <p className='text-base sm:text-lg text-purple-200/90 mt-4 max-w-2xl mx-auto leading-relaxed'>
                    Join us this Sunday and experience the love of Christ in a family of faith.
                    Everyone is welcome at <span className='font-semibold text-white'>RPC Assembly</span>.
                </p>

                <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-8'>
                    <Button
                        asChild
                        size="lg"
                        className='bg-white text-royal-purple hover:bg-gray-100 font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto'
                    >
                        <Link href="/contact" className="flex items-center gap-2">
                            Plan Your Visit
                            <ArrowRight size={18} />
                        </Link>
                    </Button>

                    <Button
                        asChild
                        size="lg"
                        className='border-2 border-white text-white hover:bg-white/10 font-semibold transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto'
                    >
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default CtaSection
