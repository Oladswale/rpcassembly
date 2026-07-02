import InfoCard from '@/components/ui/info-card'
import { serviceTimes } from '@/types/data'

const ProgramsSection = () => {
    return (
        <section className='py-16 lg:py-24 bg-warm-cream -mt-8 relative z-20'>
            <div className='max-w-7xl mx-auto'>
                <div className='bg-white text-deep-navy p-8 lg:p-12 w-full rounded-2xl shadow-xl'>
                    <div className='text-center mb-10'>
                        <h2 className='text-3xl lg:text-4xl font-serif font-bold text-royal-purple mb-3'>Service Times</h2>
                        <p className='text-lg font-sans text-gray-600'>Join us for worship and fellowship</p>
                    </div>

                    <div className='max-w-md mx-auto'>
                        {serviceTimes.map((service, index) => (
                            <InfoCard
                                key={service.title}
                                {...service}
                                isLast={index === serviceTimes.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProgramsSection
