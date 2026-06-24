import YouTubeVideo from './youtube-video'
import { SermonType } from '@/types/data'
import { Calendar, User } from 'lucide-react'

type SermonCardProps = SermonType

const SermonCard: React.FC<SermonCardProps> = ({ videoUrl, title, speaker, date, description }) => {
    return (
        <article className="rounded-xl overflow-hidden bg-white shadow border border-gray-100 flex flex-col">
            <YouTubeVideo videoUrl={videoUrl} title={title} />

            <div className="p-4 md:p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-lg md:text-xl font-bold text-deep-navy line-clamp-2">
                    {title}
                </h3>

                <div className="flex flex-col gap-2 text-sm">
                    <span className="flex items-center gap-2 font-medium text-deep-navy">
                        <User size={15} className="text-royal-purple shrink-0" />
                        {speaker}
                    </span>
                    <span className="flex items-center gap-2 font-medium text-gray-700">
                        <Calendar size={15} className="text-royal-purple shrink-0" />
                        {date}
                    </span>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2 mt-1 leading-relaxed">
                    {description}
                </p>
            </div>
        </article>
    )
}

export default SermonCard
