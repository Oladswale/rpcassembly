import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';
import PageHero from '@/components/ui/PageHero';
import { churchAddress, churchEmail, contactInfo, socialLinks } from '@/lib/contact';
import { ArrowRight, Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
    const mapUrl = 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d126615.18048945606!2d3.8223811986006195!3d7.384751597040501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x10398f0dc05dda61%3A0x3a16e49f8e8d5be0!2sAroma%2C%208VGF%2BHXC%2C%20Expressway1%2C%20Ibadan%20110115%2C%20Oyo!3m2!1d7.3264042!2d3.8748826999999997!4m5!1s0x1039f2e9796a99d5%3A0x1929d226e56e2335!2sthe%20polytechnic%20ibadan%2C%20CVWJ%2B983%2C%20Olori%20Hall%20Road%2C%20Ibadan%20200116%2C%20Oyo!3m2!1d7.445871299999999!2d3.8807866!5e0!3m2!1sen!2sng!4v1782991991000!5m2!1sen!2sng';

    return (
        <PublicLayout>
            <Head title="Contact Us" />

            <main>
                <PageHero
                    title="Contact Us"
                    description="We would love to hear from you. Send us a message, stop by for a visit, or connect with us on social media."
                    src="/worship.jpg"
                />

                <section className="bg-white py-16 text-[#1b1b18] md:py-20">
                    <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 shadow-sm sm:p-8">
                            <h2 className="text-2xl font-semibold text-deep-navy">Send us a message</h2>
                            <p className="mt-3 text-base leading-7 text-gray-600">
                                Have a question, prayer request, or want to know more about our church? Fill out the form and we will get back to you.
                            </p>

                            <form className="mt-8 space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        <span className="mb-2 block">Full name</span>
                                        <input className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none ring-0 transition focus:border-royal-purple" placeholder="Your name" />
                                    </label>
                                    <label className="block text-sm font-medium text-gray-700">
                                        <span className="mb-2 block">Email address</span>
                                        <input type="email" className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none ring-0 transition focus:border-royal-purple" placeholder="you@example.com" />
                                    </label>
                                </div>

                                <label className="block text-sm font-medium text-gray-700">
                                    <span className="mb-2 block">Subject</span>
                                    <input className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none ring-0 transition focus:border-royal-purple" placeholder="How can we help?" />
                                </label>

                                <label className="block text-sm font-medium text-gray-700">
                                    <span className="mb-2 block">Message</span>
                                    <textarea rows={5} className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 outline-none ring-0 transition focus:border-royal-purple" placeholder="Share your message here..." />
                                </label>

                                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700">
                                    <Send size={18} />
                                    Send message
                                </button>
                            </form>
                        </div>

                        <div className="space-y-6">
                            <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-8">
                                <h2 className="text-2xl font-semibold text-deep-navy">Get in touch</h2>
                                <div className="mt-6 space-y-4">
                                    {contactInfo.slice(0, 3).map(({ icon: Icon, action, value, label }) => (
                                        <a key={label} href={action} target="_blank" rel="noreferrer" className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:border-royal-purple/30 hover:bg-white">
                                            <div className="mt-0.5 rounded-full bg-[#f2ebff] p-2 text-royal-purple">
                                                <Icon size={16} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">{label}</p>
                                                <p className="mt-1 text-sm leading-6 text-gray-700">{value}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-3xl border border-gray-200 bg-[#f7f3ff] p-7 shadow-sm sm:p-8">
                                <h2 className="text-xl font-semibold text-deep-navy">Follow us</h2>
                                <p className="mt-3 text-sm leading-7 text-gray-600">
                                    Stay connected through our social channels for updates, prayer prompts, and church news.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {socialLinks.map(({ icon: Icon, href }, index) => (
                                        <a key={index} href={href} target="_blank" rel="noreferrer" className="rounded-full border border-[#e3d8ff] bg-white p-3 text-royal-purple transition hover:bg-[#efe7ff]">
                                            <Icon width={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 py-16 md:py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="overflow-hidden rounded-4xl border border-gray-200 bg-white shadow-sm">
                            <div className="border-b border-gray-200 bg-white px-6 py-6 sm:px-8">
                                <div className="flex flex-wrap items-center gap-3">
                                    <MapPin className="text-royal-purple" />
                                    <div>
                                        <h2 className="text-2xl font-semibold text-deep-navy">Find us on the map</h2>
                                        <p className="mt-1 text-sm text-gray-600">{churchAddress}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-105 sm:h-130">
                                <iframe
                                    src={mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    title="RPC Assembly Location"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </PublicLayout>
    );
}