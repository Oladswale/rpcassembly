import { SectionHeader } from '@/components/ui/section-header'
import HorizontalLine from '@/components/ui/horizontal-line'
import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import { Users, Heart, BookOpen, Music, Children, Coffee } from 'lucide-react'

const ministries = [
    {
        icon: Users,
        title: 'Youth Ministry',
        description: 'Empowering the next generation to grow in faith and leadership',
        color: 'bg-royal-purple'
    },
    {
        icon: Children,
        title: 'Kids Church',
        description: 'Fun and engaging biblical teaching for children of all ages',
        color: 'bg-accent-gold'
    },
    {
        icon: Heart,
        title: 'Outreach',
        description: 'Serving our community with love and compassion through Christ',
        color: 'bg-deep-purple'
    },
    {
        icon: BookOpen,
        title: 'Bible Study',
        description: 'Deep dive into Scripture for spiritual growth and understanding',
        color: 'bg-royal-blue'
    },
    {
        icon: Music,
        title: 'Worship Team',
        description: 'Leading the congregation in spirit-filled praise and worship',
        color: 'bg-accent-orange'
    },
    {
        icon: Coffee,
        title: 'Fellowship',
        description: 'Building meaningful connections and community in Christ',
        color: 'bg-royal-purple'
    }
]

const MinistriesSection = () => {
    return (
        <section className='py-16 lg:py-24 bg-white'>
            <div className='max-w-7xl mx-auto'>
                <SectionHeader className='text-center mb-12'>
                    Our <span className='text-royal-purple font-serif italic'>Ministries</span>
                    <HorizontalLine className='mx-auto' />
                </SectionHeader>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {ministries.map((ministry, index) => {
                        const Icon = ministry.icon
                        return (
                            <div 
                                key={index}
                                className='group bg-warm-cream rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
                            >
                                <div className={`${ministry.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className='w-8 h-8 text-white' />
                                </div>
                                <h3 className='text-xl font-serif font-bold text-deep-navy mb-3'>
                                    {ministry.title}
                                </h3>
                                <p className='text-gray-600 font-sans leading-relaxed'>
                                    {ministry.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

                <div className="flex justify-center mt-12">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-royal-purple to-accent-gold rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-500" />
                        <Button
                            asChild
                            className="relative bg-royal-purple text-white hover:bg-deep-purple font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 px-8 py-6 text-lg"
                        >
                            <Link href="/ministries" className="uppercase flex items-center gap-2">
                                Explore All Ministries
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MinistriesSection
