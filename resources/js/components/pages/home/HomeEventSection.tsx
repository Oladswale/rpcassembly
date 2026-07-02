import EventCard from '@/components/ui/event-card'
import HorizontalLine from '@/components/ui/horizontal-line'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import { events } from '@/types/data'



const HomeEventSection = () => {
  return (
    <section className='py-16 lg:py-24 bg-white'>
      <div className='max-w-7xl mx-auto'>

        <SectionHeader className='text-center mb-12'>
          Upcoming <span className='text-royal-purple font-serif italic'>Events</span>
          <HorizontalLine className='mx-auto'/>
        </SectionHeader>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {
            events.slice(0, 3).map((event) => (
              <EventCard key={event.id} {...event} />
            ))
          }
        </div>

        <div className="flex justify-center mt-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-royal-purple to-accent-gold rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-500" />
            <Button
              asChild
              className="relative bg-royal-purple text-white hover:bg-deep-purple font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 px-8 py-6 text-lg"
            >
              <Link href="/events" className="uppercase flex items-center gap-2">
                View All Events
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeEventSection