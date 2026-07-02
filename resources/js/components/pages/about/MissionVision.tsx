import { Target, Eye } from 'lucide-react'

const cards = [
    {
        icon: Target,
        label: 'Our Mission',
        color: '#7C3AED',
        text: 'To raise redeemed people who will impact their world through the transformative power of the gospel of Jesus Christ, building a community of faith, love, and excellence.',
    },
    {
        icon: Eye,
        label: 'Our Vision',
        color: '#D4AF37',
        text: 'A generation of redeemed people living a life of purpose, transforming families, communities, and nations for the glory of God.',
    },
]

const MissionVision = () => {
    return (
        <section className='py-16 lg:py-24 bg-white'>
            <div className='max-w-7xl mx-auto px-6 lg:px-8'>
                <div className='grid md:grid-cols-2 gap-6 lg:gap-10'>
                    {cards.map(({ icon: Icon, label, color, text }) => (
                        <div
                            key={label}
                            className='group relative rounded-2xl bg-[#0f0a1e] border border-white/10 p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:border-white/25 hover:-translate-y-1 hover:shadow-2xl'
                        >
                            {/* Glow */}
                            <div
                                className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'
                                style={{ background: `radial-gradient(circle at 0% 0%, ${color}25, transparent 60%)` }}
                            />

                            {/* Bottom accent */}
                            <div
                                className='absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full'
                                style={{ backgroundColor: color }}
                            />

                            <div className='relative z-10'>
                                <div
                                    className='w-12 h-12 rounded-xl flex items-center justify-center mb-6'
                                    style={{ backgroundColor: `${color}20`, border: `1px solid ${color}40` }}
                                >
                                    <Icon size={22} style={{ color }} />
                                </div>

                                <h3 className='text-xl font-bold text-white mb-3'>{label}</h3>
                                <p className='text-white/55 leading-relaxed group-hover:text-white/75 transition-colors duration-300'>
                                    {text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MissionVision
