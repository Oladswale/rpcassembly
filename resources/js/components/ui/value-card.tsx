import { CoreValueType } from '@/types/data'

const ValueCard: React.FC<CoreValueType> = ({ title, description }) => {
    return (
        <div className="group rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 md:p-7 text-center hover:-translate-y-1">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-royal-purple/10 text-royal-purple flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-purple group-hover:text-white transition-all duration-300">
                <span className="text-2xl md:text-3xl font-black">{title[0]}</span>
            </div>
            <h4 className="text-lg md:text-xl font-bold text-deep-navy mb-2">{title}</h4>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">{description}</p>
        </div>
    )
}

export default ValueCard
