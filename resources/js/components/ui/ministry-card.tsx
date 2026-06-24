 import { MinistryType } from '@/types/data'

const MinistryCard: React.FC<MinistryType> = ({ title, description, icon: Icon, color }) => {
    return (
        <div className="group rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 md:p-7 hover:-translate-y-1">
            <div
                style={{ backgroundColor: `${color}15` }}
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
            >
                <Icon style={{ color }} className="w-7 h-7" />
            </div>

            <h3 className="text-lg md:text-xl font-bold text-deep-navy mb-2">{title}</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">{description}</p>
        </div>
    )
}

export default MinistryCard
