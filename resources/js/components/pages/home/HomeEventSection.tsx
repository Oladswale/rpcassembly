import EventCard from '@/components/ui/event-card'
import HorizontalLine from '@/components/ui/horizontal-line'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import { events } from '@/types/data'



const HomeEventSection = () => {
  return (
    <section>
      <div className='max-w-7xl mx-auto'>

        <SectionHeader className='text-center'>
          Upcoming <span className='text-royal-purple'>events</span>
          <HorizontalLine className='mx-auto'/>
        </SectionHeader>

        <div className='grid grid-cols-1 md:grid-cols-3 mt-4 gap-5'>
          {
            events.slice(0, 3).map((event) => (
              <EventCard key={event.id} {...event} />
            ))
          }
        </div>

        <div className="flex justify-center mt-10">
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-md blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-[pulse_2s_infinite]" />
            <Button
              asChild
              className="relative bg-royal-purple text-white hover:bg-deep-purple font-semibold shadow-sm transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Link href="/events" className="uppercase flex items-center gap-2 px-5">
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