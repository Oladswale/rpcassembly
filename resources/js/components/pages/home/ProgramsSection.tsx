import InfoCard from '@/components/ui/info-card'
import { serviceTimes } from '@/types/data'
import React from 'react'

const ProgramsSection = () => {
    return (
        <section className='py-0! bg-gray-100 '>
            <div className='max-w-7xl mx-auto'>
                <div className='bg-white text-black p-7 w-full rounded-xl shadow'>
                    <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5 '>
                        {
                            serviceTimes.map((service) => (
                                <InfoCard key={service.title} {...service} />
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ProgramsSection