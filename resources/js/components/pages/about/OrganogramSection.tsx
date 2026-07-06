import { ministers } from '@/types/about'

const OrganogramSection = () => {
    const pastor = ministers[0]
    const evangelists = ministers.slice(1)

    return (
        <section className='py-16 lg:py-24 bg-white relative overflow-hidden'>

            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-royal-purple/5 rounded-full blur-3xl pointer-events-none' />

            <div className='relative max-w-5xl mx-auto px-6 lg:px-8'>

                <div className='text-center mb-14'>
                    <h2 className='text-3xl md:text-4xl font-black font-serif text-deep-navy mb-3'>
                        Meet Our <span className='text-royal-purple italic'>Ministers</span>
                    </h2>
                    <div className='w-12 h-1 rounded-full bg-royal-purple mx-auto mb-4' />
                    <p className='text-gray-500 max-w-xl mx-auto'>Dedicated servants of God leading with passion and integrity.</p>
                </div>

                {/* Level 1 — Pastor */}
                <div className='flex justify-center mb-0'>
                    <MinisterNode name={pastor.name} role={pastor.role} image={pastor.image} size='lg' />
                </div>

                {/* Connector down */}
                <div className='flex justify-center'>
                    <div className='w-px h-10 bg-royal-purple/30' />
                </div>
                <div className='relative flex justify-center'>
                    <div className='absolute top-0 left-[12.5%] right-[12.5%] h-px bg-royal-purple/30' />
                </div>

                {/* Level 2 — Evangelists */}
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 mt-0 pt-0'>
                    {evangelists.map((e, i) => (
                        <div key={i} className='flex flex-col items-center'>
                            <div className='w-px h-10 bg-royal-purple/30' />
                            <MinisterNode name={e.name} role={e.role} image={e.image} size='md' />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

type NodeSize = 'lg' | 'md' | 'sm'

const sizeMap: Record<NodeSize, { img: string; name: string; role: string; ring: string }> = {
    lg: { img: 'w-32 h-32 md:w-40 md:h-40', name: 'text-xl md:text-2xl', role: 'text-sm md:text-base', ring: 'ring-4 ring-royal-purple/40' },
    md: { img: 'w-24 h-24 md:w-32 md:h-32', name: 'text-lg md:text-xl', role: 'text-sm', ring: 'ring-4 ring-accent-gold/40' },
    sm: { img: 'w-20 h-20 md:w-24 md:h-24', name: 'text-base md:text-lg', role: 'text-xs md:text-sm', ring: 'ring-2 ring-royal-purple/20' },
}

const MinisterNode = ({ name, role, image, size }: { name: string; role: string; image: string; size: NodeSize }) => {
    const s = sizeMap[size]
    return (
        <div className='flex flex-col items-center text-center group'>
            <div className={`relative rounded-full overflow-hidden ${s.img} ${s.ring} transition-all duration-300 group-hover:ring-royal-purple/70 group-hover:scale-105 shadow-lg`}>
                <img src={image} alt={name} className='w-full h-full object-cover object-top' loading='lazy' />
                <div className='absolute inset-0 bg-gradient-to-t from-deep-purple/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </div>
            <h4 className={`font-bold text-deep-navy mt-3 ${s.name}`}>{name}</h4>
            <span className={`text-royal-purple font-medium ${s.role}`}>{role}</span>
        </div>
    )
}

export default OrganogramSection
