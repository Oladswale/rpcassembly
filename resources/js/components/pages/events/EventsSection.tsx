import { SectionHeader } from '@/components/ui/section-header'
import HorizontalLine from '@/components/ui/horizontal-line'
import EventCard from '@/components/ui/event-card'
import { events } from '@/types/data'

const EventsSection = () => {
    return (
        <section className='bg-white'>
            <div className='max-w-7xl mx-auto'>
                <SectionHeader className='text-center'>
                    Our <span className='text-royal-purple'>Events</span>
                </SectionHeader>
                <HorizontalLine className='mx-auto mt-2 mb-3' />
                <p className='text-center text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10 text-base md:text-xl'>
                    Join us for worship, fellowship, and growth.
                </p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6'>
                    {events.map((event) => (
                        <EventCard key={event.id} {...event} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EventsSection
