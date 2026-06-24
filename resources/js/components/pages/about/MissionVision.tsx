import { SectionHeader } from '@/components/ui/section-header'
import HorizontalLine from '@/components/ui/horizontal-line'
import { Target, Eye } from 'lucide-react'

const MissionVision = () => {
    return (
        <section className='bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
                    <div className='bg-gray-50 rounded-xl p-6 md:p-8 lg:p-10 border border-gray-100'>
                        <div className='w-12 h-12 rounded-full bg-royal-purple/10 flex items-center justify-center mb-4'>
                            <Target size={24} className='text-royal-purple' />
                        </div>
                        <SectionHeader>
                            Our <span className='text-royal-purple'>Mission</span>
                        </SectionHeader>
                        <HorizontalLine className='mt-2 mb-4' />
                        <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
                            To raise redeemed people who will impact their world through the
                            transformative power of the gospel of Jesus Christ, building a community
                            of faith, love, and excellence.
                        </p>
                    </div>

                    <div className='bg-gray-50 rounded-xl p-6 md:p-8 lg:p-10 border border-gray-100'>
                        <div className='w-12 h-12 rounded-full bg-royal-purple/10 flex items-center justify-center mb-4'>
                            <Eye size={24} className='text-royal-purple' />
                        </div>
                        <SectionHeader>
                            Our <span className='text-royal-purple'>Vision</span>
                        </SectionHeader>
                        <HorizontalLine className='mt-2 mb-4' />
                        <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
                            A generation of redeemed people living a life of purpose,
                            transforming families, communities, and nations for the glory of God.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVision
