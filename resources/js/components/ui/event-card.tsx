import { EventsType } from '@/types/data'
import { Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CustomImage from './custom-image'

const EventCard: React.FC<EventsType> = ({ image, title, date, time, location }) => {
  const [month, day] = date.split(' ')

  return (
    <article className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
      <div className="relative overflow-hidden">
        <CustomImage
          src={image}
          alt={title}
          loading="lazy"
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white text-black rounded-lg w-14 h-14 flex flex-col items-center justify-center shadow-lg">
          <span className="text-[10px] font-bold uppercase leading-tight">{month}</span>
          <span className="text-lg font-bold leading-tight">{day.replace(',', '')}</span>
        </div>
      </div>

      <div className="p-4 md:p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-lg md:text-xl font-bold text-deep-navy line-clamp-2">
          {title}
        </h3>

        <div className="flex flex-col gap-2 text-sm md:text-base text-gray-600 font-normal">
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-royal-purple shrink-0" />
            {time}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-royal-purple shrink-0" />
            {location}
          </span>
        </div>
      </div>
    </article>
  )
}

export default EventCard
