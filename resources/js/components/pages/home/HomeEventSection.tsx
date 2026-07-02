import EventCard from '@/components/ui/event-card'
import HorizontalLine from '@/components/ui/horizontal-line'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import { events as staticEvents } from '@/types/data'
import { HomeEvent } from '@/pages/welcome'
import { Calendar, Clock, MapPin } from 'lucide-react'

const HomeEventSection = ({ events = [] }: { events?: HomeEvent[] }) => {
  const hasEvents = events.length > 0

  return (
    <section className='py-16 lg:py-24 bg-white'>
      <div className='max-w-7xl mx-auto'>

        <SectionHeader className='text-center mb-12'>
          Upcoming <span className='text-royal-purple font-serif italic'>Events</span>
          <HorizontalLine className='mx-auto'/>
        </SectionHeader>

        <div className='flex flex-wrap justify-center gap-8'>
          {hasEvents ? events.slice(0, 3).map((event) => (
            <div key={event.id} className='group w-full md:w-[30%] rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50 flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
              {event.flyer_url && (
                <div className='relative overflow-hidden'>
                  <img src={event.flyer_url} alt={event.title} className='w-full block transition-transform duration-500 group-hover:scale-105' />
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300' />
                </div>
              )}
              <div className='p-4 flex flex-col gap-2'>
                <h3 className='text-lg font-bold text-deep-navy'>{event.title}</h3>
                <div className='flex flex-col gap-1 text-sm text-gray-600'>
                  <span className='flex items-center gap-1'>
                    <Calendar size={14} className='text-royal-purple' /> {event.date}
                  </span>
                  <span className='flex items-center gap-1'>
                    <Clock size={14} className='text-royal-purple' /> {event.time}
                  </span>
                  <span className='flex items-center gap-1'>
                    <MapPin size={14} className='text-royal-purple' /> {event.location}
                  </span>
                </div>
              </div>
            </div>
          )) : staticEvents.slice(0, 3).map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
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
