import EventCard from '@/components/ui/event-card'
import HorizontalLine from '@/components/ui/horizontal-line'
import { SectionHeader } from '@/components/ui/section-header'
import { events } from '@/types/data'



const HomeEventSection = () => {
  return (
    <section>
      <div className='max-w-7xl mx-auto'>

        <SectionHeader className='text-center'>
          Upcoming <span className='text-royal-purple'>events</span>
          <HorizontalLine className='mx-auto'/>
        </SectionHeader>

        <div>
          {
            events.slice(0, 3).map((event, index) => (
              <EventCard key={index} {...event} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default HomeEventSection