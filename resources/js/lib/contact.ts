import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import { Facebook, TikTok, WhatsApp, YouTube } from '@/assets/svgs/social-icons'

const churchPhone = (import.meta.env.VITE_CHURCH_PHONE || '').replace(/\s+/g, '')
const message = encodeURIComponent('Hello. I visited your website and would like to learn more about the church. Thank you and God bless')

export const socialLinks = [
    { icon: Facebook, href: import.meta.env.VITE_CHURCH_FACEBOOK || '#' },
    { icon: TikTok, href: import.meta.env.VITE_CHURCH_TIKTOK || '#' },
    { icon: YouTube, href: import.meta.env.VITE_CHURCH_YOUTUBE || '#' },
    { icon: WhatsApp, href: `https://wa.me/${churchPhone}?text=${message}` },
]

export const churchAddress = import.meta.env.VITE_CHURCH_ADDRESS || 'Church Address'
export const churchWebsite = import.meta.env.VITE_CHURCH_WEBSITE || 'https://yourchurch.com'
export const churchEmail = import.meta.env.VITE_CHURCH_EMAIL || 'info@yourchurch.com'

export const contactInfo = [
    {
        icon: MapPin,
        action: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(churchAddress)}`,
        value: churchAddress,
        label: 'Visit us',
    },
    {
        icon: Phone,
        action: `tel:${churchPhone}`,
        value: churchPhone ? churchPhone.replace(/(\d{3})(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4') : churchPhone,
        label: 'Call us',
    },
    {
        icon: Mail,
        action: `mailto:${churchEmail}`,
        value: churchEmail,
        label: 'Email us',
    },
    {
        icon: Globe,
        action: churchWebsite,
        value: churchWebsite,
        label: 'Visit website',
    },
]
