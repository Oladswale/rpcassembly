import CustomImage from './custom-image'

type MinisterCardProps = {
    name: string,
    role: string,
    image: string,
    highlight?: boolean,
}

const MinisterCard: React.FC<MinisterCardProps> = ({ name, role, image, highlight }) => {
    return (
        <div className={`group rounded-xl bg-white border transition-all duration-300 text-center
            ${highlight
                ? 'border-royal-purple/30 shadow-lg md:col-span-2 lg:col-span-2 xl:col-span-3 '
                : 'border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1'}
        `}>
            <div className="relative overflow-hidden rounded-t-xl">
                <CustomImage
                    src={image}
                    alt={name}
                    className={`w-full object-cover object-top ${highlight ? 'h-56 md:h-64' : 'h-48 md:h-52'}`}
                    wrapperClassName="w-full"
                    loading="lazy"
                />
                {highlight && (
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-royal-purple/80 to-transparent h-20" />
                )}
            </div>
            <div className="p-4 md:p-5">
                <h4 className={`font-bold ${highlight ? 'text-xl md:text-2xl text-royal-purple' : 'text-lg md:text-xl text-deep-navy'}`}>
                    {name}
                </h4>
                <p className={`text-sm md:text-base mt-1 font-medium ${highlight ? 'text-deep-purple' : 'text-gray-500'}`}>
                    {role}
                </p>
            </div>
        </div>
    )
}

export default MinisterCard
