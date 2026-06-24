import { Link } from '@inertiajs/react'
import { navLinks } from '@/types/data'
import { MapPin, Phone, Mail, Globe, MessageCircle, Image, Play } from 'lucide-react'
import CustomImage from '@/components/ui/custom-image'
import { Facebook, TikTok, WhatsApp, YouTube } from '@/assets/svgs/social-icons'


const churchPhone = import.meta.env.VITE_CHURCH_PHONE.replace(/\s+/g, '')
const message = encodeURIComponent("Hello. I visited your website and would like to learn more about the church. Thank you and God bless")

const socialLinks = [
    { icon: Facebook, href: import.meta.env.VITE_CHURCH_FACEBOOK },
    { icon: TikTok, href: import.meta.env.VITE_CHURCH_TIKTOK },
    { icon: YouTube, href: import.meta.env.VITE_CHURCH_YOUTUBE },
    { icon: WhatsApp, href: `https://wa.me/${churchPhone}?text=${message}`},
]

const churchAddress = import.meta.env.VITE_CHURCH_ADDRESS
const churchWebsite = import.meta.env.VITE_CHURCH_WEBSITE
const churchEmail = import.meta.env.VITE_CHURCH_EMAIL

const contactInfo = [
    { icon: MapPin, action: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(churchAddress)}`, value: churchAddress },
    { icon: Phone, action: `tel:${churchPhone}`, value: churchPhone.replace(/(\d{3})(\d{3})(\d{3})(\d{4})/, '$1 $2 $3 $4') },
    { icon: Mail, action: `mailto:${churchEmail}`, value:  churchEmail},
    { icon: Globe, action: churchWebsite, value:  churchWebsite},
]

const resources = [
    'Bible Study',
    'Prayer Request',
    'Daily Devotional',
    'Online Giving',
    'Testimonies',
]

const Footer = () => {
    return (
        <footer className='bg-deep-purple text-white py-5 md:pt-10'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-6 lg:gap-10 items-start'>

                    {/* col 1 */}
                    <div>
                        <Link href={"/"}>
                            <CustomImage
                                src='/rpclogo.png'
                                alt='rpc logo'
                                loading='eager'
                                className='w-40 lg:w-50'
                            />
                        </Link>

                        <p className='text-base md:text-lg font-normal'>
                            Raising redeemed people and impacting our world through the gospel of jesus christ
                        </p>

                        <div className='flex mt-3 items-center gap-3'>
                            {
                                socialLinks.map(({ icon, href }, index) => {
                                    const Icon = icon
                                    return (
                                        <a key={index} href={href} rel='nofollow noopener noreferrer' target='_blank'>
                                            <Icon width={index !== 1 ? 25 : 20} />
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/* col 2 */}
                    <div>
                        <h3 className='uppercase font-semibold text-base md:text-lg mb-3'>Quick links</h3>
                        <div className='space-y-2'>
                            {
                                navLinks.slice(0, 5).map(({ title, href }) => (
                                    <Link key={title} href={href} className='block font-normal text-base'>
                                        {title}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    {/* col 3 */}
                    <div>
                        <h3 className='uppercase font-semibold text-base md:text-lg mb-3'>Resources</h3>
                        <div className='space-y-2'>
                            {
                                resources.map((item) => (
                                    <p key={item} className='font-normal text-base'> {item}</p>
                                ))
                            }
                        </div>
                    </div>

                    {/* col 4 */}
                    <div>
                        <h3 className='uppercase font-semibold text-base md:text-lg mb-3'>Contact us</h3>
                        <div className='space-y-2.5'>
                            {
                                contactInfo.map(({ icon, value, action }, index) => {
                                    const Icon = icon
                                    return (
                                        <div key={index} className='flex  gap-x-2'>
                                            <Icon className="block shrink-0"/>
                                            <a href={action} target='_blank' rel='noreferrer nofollow noopener' className='block break-all'>{value}</a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


                {/* bottom */}
                <div className='border-t border-white/10 mt-10 pt-5 text-center text-sm '>
                    &copy; {new Date().getFullYear()} RPC Assembly. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
