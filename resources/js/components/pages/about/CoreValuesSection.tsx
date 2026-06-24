import { SectionHeader } from '@/components/ui/section-header'
import HorizontalLine from '@/components/ui/horizontal-line'
import ValueCard from '@/components/ui/value-card'
import { coreValues } from '@/types/about'


const CoreValuesSection = () => {
    return (
        <section className='bg-gray-100'>
            <div className='max-w-7xl mx-auto'>
                <SectionHeader className='text-center'>
                    Our Core <span className='text-royal-purple'>Values</span>
                </SectionHeader>
                <HorizontalLine className='mx-auto mt-2 mb-3' />
                <p className='text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10'>
                    The principles that guide our church life and ministry.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'>
                    {coreValues.map((value) => (
                        <ValueCard key={value.title} {...value} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CoreValuesSection
