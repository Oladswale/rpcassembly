import { InfoType } from '@/types/data'

const InfoCard: React.FC<InfoType & { isLast?: boolean }> = (props) => {
    const Icon = props.icon
    return (
        <div className='flex items-start gap-4'>
            {/* Time */}
            <div className='w-20 shrink-0 text-right pt-1'>
                <span className='text-sm font-bold text-royal-purple'>{props.time}</span>
            </div>

            {/* Timeline spine */}
            <div className='flex flex-col items-center shrink-0'>
                <div style={{ backgroundColor: props.iconBgColor }} className='w-3 h-3 rounded-full mt-1.5 z-10' />
                {!props.isLast && <div className='w-px flex-1 bg-gradient-to-b from-gray-300 to-transparent mt-1' style={{ minHeight: '3rem' }} />}
            </div>

            {/* Content */}
            <div className='flex items-start gap-3 pb-8'>
                <div style={{ backgroundColor: props.iconBgColor }} className='p-2 rounded-full shrink-0'>
                    <Icon className='text-white w-5 h-5' />
                </div>
                <div>
                    <p className='font-bold text-deep-navy text-base'>{props.title}</p>
                    <p className='text-sm text-gray-500'>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
