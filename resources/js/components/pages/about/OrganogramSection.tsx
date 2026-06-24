import { SectionHeader } from '@/components/ui/section-header'
import HorizontalLine from '@/components/ui/horizontal-line'
import MinisterCard from '@/components/ui/minister-card'
import { ministers } from '@/types/about'


const OrganogramSection = () => {
    const pastor = ministers[0]
    const evangelists = ministers.slice(1)

    return (
        <section className='bg-white'>
            <div className='max-w-7xl mx-auto'>
                <SectionHeader className='text-center'>
                    Meet Our <span className='text-royal-purple'>Ministers</span>
                </SectionHeader>
                <HorizontalLine className='mx-auto mt-2 mb-3' />
                <p className='text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10'>
                    Dedicated servants of God leading with passion and integrity.
                </p>

                <div className="flex flex-col items-center">
                    {/* Level 1 - Lead Pastor */}
                    <div className="relative flex justify-center pb-12">
                        <div className="w-72">
                            <MinisterCard {...pastor} highlight />
                        </div>
                        <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-royal-purple/30 -translate-x-1/2" aria-hidden />
                        <div className="absolute bottom-8 left-[calc(50%-12rem)] right-[calc(50%-12rem)] h-0.5 bg-royal-purple/30 hidden xl:block" aria-hidden />
                    </div>

                    {/* Level 2 - Evangelists (including Lady Evangelist) */}
                    <div className="relative w-full">
                        <div className="absolute top-0 left-[12.5%] w-0.5 h-8 bg-royal-purple/30 hidden xl:block" aria-hidden />
                        <div className="absolute top-0 left-[37.5%] w-0.5 h-8 bg-royal-purple/30 hidden xl:block" aria-hidden />
                        <div className="absolute top-0 left-[62.5%] w-0.5 h-8 bg-royal-purple/30 hidden xl:block" aria-hidden />
                        <div className="absolute top-0 left-[87.5%] w-0.5 h-8 bg-royal-purple/30 hidden xl:block" aria-hidden />

                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5'>
                            {evangelists.map((evangelist, index) => (
                                <MinisterCard key={index} {...evangelist} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrganogramSection
