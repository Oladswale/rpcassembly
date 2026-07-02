import { coreValues } from '@/types/about'

const colors = ['#7C3AED', '#DB2777', '#059669', '#DC2626', '#2563EB', '#D4AF37', '#0891B2']

const acronym = 'GLERSHH'.split('')

const CoreValuesSection = () => {
    return (
        <section className='py-16 lg:py-24 bg-[#0f0a1e] relative overflow-hidden'>

            <div className='absolute top-0 right-0 w-80 h-80 bg-royal-purple/15 rounded-full blur-3xl pointer-events-none' />
            <div className='absolute bottom-0 left-0 w-80 h-80 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none' />

            <div className='relative max-w-7xl mx-auto px-6 lg:px-8'>

                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-black font-serif text-white mb-3'>
                        Our Core <span className='text-accent-gold italic'>Values</span>
                    </h2>
                    <div className='w-12 h-1 rounded-full bg-accent-gold mx-auto mb-4' />
                    <p className='text-white/50 max-w-xl mx-auto'>The principles that guide our church life and ministry.</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                    {coreValues.map((value, index) => {
                        const color = colors[index % colors.length]
                        return (
                            <div
                                key={value.title}
                                className='group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden transition-all duration-500 hover:border-white/25 hover:bg-white/8 hover:-translate-y-1 hover:shadow-2xl'
                            >
                                <div
                                    className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'
                                    style={{ background: `radial-gradient(circle at 50% 0%, ${color}25, transparent 70%)` }}
                                />
                                <div
                                    className='absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full'
                                    style={{ backgroundColor: color }}
                                />

                                <div className='relative z-10 flex items-start gap-4'>
                                    <span
                                        className='text-3xl font-black leading-none shrink-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300'
                                        style={{ color }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <h4 className='text-base font-bold text-white mb-1'>{value.title}</h4>
                                        <p className='text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300'>
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* GLERSHH Acronym */}
                <div className='mt-14 text-center'>
                    <p className='text-white/30 text-xs uppercase tracking-widest mb-4'>Our values in brief</p>
                    <div className='flex items-center justify-center gap-3 md:gap-5 flex-wrap'>
                        {acronym.map((letter, index) => (
                            <div key={index} className='flex flex-col items-center gap-1'>
                                <span
                                    className='text-3xl md:text-5xl font-black'
                                    style={{ color: colors[index % colors.length] }}
                                >
                                    {letter}
                                </span>
                                <span className='text-[10px] md:text-xs text-white/40 uppercase tracking-widest'>
                                    {coreValues[index]?.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CoreValuesSection
