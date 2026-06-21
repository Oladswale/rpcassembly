import { InfoType } from '@/types/data'
import React from 'react'


const InfoCard: React.FC<InfoType> = (props) => {
    const Icon = props.icon
    return (
        <aside>
            <div className='flex items-center flex-col text-center gap-2 xs:flex-row xs:text-left'>
                {/* Icon */}
                <div style={{ backgroundColor: props.iconBgColor }} className='p-2 md:p-3 rounded-full'>
                    <Icon className='text-white w-5 h-5 md:w-7 md:h-7' />
                </div>

                <div>
                    <p className='uppercase text-sm md:text-lg font-medium text-royal-purple'>{props.title}</p>
                    <p className='uppercase text-lg md:text-2xl font-bold text-deep-navy'>{props.time}</p>
                    <p className='capitalize text-xs md:text-base font-medium text-deep-purple'>{props.description}</p>
                </div>
            </div>
        </aside>
    )
}

export default InfoCard