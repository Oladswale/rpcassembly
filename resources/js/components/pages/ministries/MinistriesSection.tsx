import MinistryCard from '@/components/ui/ministry-card'
import { ministries } from '@/types/ministries'

const MinistriesSection = () => {
    return (
        <section className='py-16 lg:py-24 bg-gradient-to-b from-white via-purple-50/50 to-white relative overflow-hidden'>

            <div className='absolute top-0 left-1/4 w-96 h-96 bg-royal-purple/5 rounded-full blur-3xl pointer-events-none' />
            <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none' />

            <div className='relative max-w-7xl mx-auto px-6 lg:px-8'>

                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-black font-serif text-deep-navy mb-3'>
                        Our <span className='text-royal-purple italic'>Ministries</span>
                    </h2>
                    <div className='w-12 h-1 rounded-full bg-royal-purple mx-auto mb-4' />
                    <p className='text-gray-500 max-w-2xl mx-auto'>
                        Find your place to grow, serve, and make an impact for God's kingdom.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                    {ministries.map((ministry) => (
                        <MinistryCard key={ministry.id} {...ministry} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MinistriesSection
