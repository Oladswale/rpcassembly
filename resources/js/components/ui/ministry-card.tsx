import { MinistryType } from '@/types/ministries'

const MinistryCard: React.FC<MinistryType> = ({ title, description, icon: Icon, color }) => {
    return (
        <div className='group relative rounded-2xl border border-gray-100 bg-white p-6 overflow-hidden transition-all duration-500 hover:border-gray-200 hover:-translate-y-1 hover:shadow-xl cursor-default'>

            {/* Subtle colour wash on hover */}
            <div
                className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'
                style={{ background: `radial-gradient(circle at 50% 0%, ${color}10, transparent 70%)` }}
            />

            {/* Bottom accent line */}
            <div
                className='absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full'
                style={{ backgroundColor: color }}
            />

            <div className='relative z-10'>
                <div
                    className='w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110'
                    style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
                >
                    <Icon style={{ color }} className='w-6 h-6' />
                </div>

                <h3 className='text-base font-bold text-deep-navy mb-2'>{title}</h3>
                <p className='text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors duration-300'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default MinistryCard
