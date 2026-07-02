import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { serviceTimes } from '@/types/data'
import ContactForm from './ContactForm'

const churchPhone = import.meta.env.VITE_CHURCH_PHONE.replace(/\s+/g, '') || ''
const churchAddress = import.meta.env.VITE_CHURCH_ADDRESS || 'Rpc Assembly, Nigeria'
const churchEmail = import.meta.env.VITE_CHURCH_EMAIL || ''

const contactInfo = [
    {
        icon: MapPin,
        title: 'Our Address',
        value: churchAddress,
        action: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(churchAddress)}`,
    },
    {
        icon: Phone,
        title: 'Phone Number',
        value: churchPhone.replace(/(\d{3})(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4'),
        action: `tel:${churchPhone}`,
    },
    {
        icon: Mail,
        title: 'Email Address',
        value: churchEmail,
        action: `mailto:${churchEmail}`,
    },
    {
        icon: Clock,
        title: 'Service Times',
        value: '',
        isServiceTimes: true,
    },
]

export default function ContactSection() {
    return (
        <section className="py-16 ">
            <div className="container mx-auto lg:px-4">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">

                    {/* Left - Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-deep-navy">Get in Touch</h3>
                            <p className="text-gray-600 mt-2">
                                We'd love to hear from you. Reach out to us using any of the channels below.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon
                                if (item.isServiceTimes) {
                                    return (
                                        <div key={index} className="flex gap-4">
                                            <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-royal-purple/10 text-royal-purple">
                                                <Icon size={22} />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-deep-navy">{item.title}</h4>
                                                <ul className="mt-1 space-y-1">
                                                    {serviceTimes.map((st, i) => (
                                                        <li key={i} className="text-sm md:text-base text-gray-600">
                                                            <span className="font-medium">{st.title}:</span> {st.time} — {st.description}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                }
                                return (
                                    <div key={index} className="flex gap-4">
                                        <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-royal-purple/10 text-royal-purple">
                                            <Icon size={22} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-deep-navy">{item.title}</h4>
                                            <a href={item.action} target='_blank' rel='noreferrer nofollow noopener' className='text-sm md:text-base text-gray-600 mt-0.5 inline-block hover:text-royal-purple transition-colors'>{item.value}</a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <ContactForm />

                </div>
            </div>
        </section>
    )
}
