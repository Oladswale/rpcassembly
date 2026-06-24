import { SectionHeader } from '@/components/ui/section-header'
import HorizontalLine from '@/components/ui/horizontal-line'
import MinistryCard from '@/components/ui/ministry-card'
import { ministries } from '@/types/ministries'


const MinistriesSection = () => {
    return (
        <section className='bg-white'>
            <div className='max-w-7xl mx-auto'>
                <SectionHeader className='text-center'>
                    Our <span className='text-royal-purple'>Ministries</span>
                </SectionHeader>
                <HorizontalLine className='mx-auto mt-2 mb-3' />
                <p className='text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10'>
                    Find your place to grow, serve, and make an impact.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6'>
                    {ministries.map((ministry) => (
                        <MinistryCard key={ministry.id} {...ministry} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MinistriesSection
