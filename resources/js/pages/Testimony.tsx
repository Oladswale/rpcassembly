import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';
import PageHero from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/section-header';
import HorizontalLine from '@/components/ui/horizontal-line';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'react-hot-toast'
import { Send, LoaderCircle } from 'lucide-react';
export default function Testimony() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        testimony: '',
    });
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function getCookie(name: string): string | null {
        const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
        return match ? decodeURIComponent(match[2]) : null
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!navigator.onLine) {
            toast.error('You are currently offline. Please check your network connection.');
            return;
        }

        setIsLoading(true)

        try {
            const csrfToken = getCookie('XSRF-TOKEN')

            const res = await fetch('/testimony', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    ...(csrfToken ? { 'X-XSRF-TOKEN': csrfToken } : {}),
                },
                body: JSON.stringify(formData),
            })

            const data = await res.json()

            if (res.ok && data.success) {
                toast.success(data.message || 'Thank you for sharing your testimony! God bless you.');
                setFormData({ name: '', phone: '', testimony: '' });
            } else {
                toast.error(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error(error)
            toast.error('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false)
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <PublicLayout>
            <Head title="Testimony" />

            <main>
                <PageHero
                    title='Testimony'
                    description="Share what God has done in your life. Your story can inspire and strengthen someone else's faith."
                />

                <div className="flex flex-col bg-white text-[#1b1b18] py-12 lg:py-16">
                    <div className="w-full max-w-4xl mx-auto px-6">
                        <SectionHeader className="text-center mb-12">
                            Share Your <span className="text-royal-purple font-serif italic">Testimony</span>
                            <HorizontalLine className="mx-auto" />
                        </SectionHeader>

                        <div className="bg-warm-cream rounded-2xl shadow-xl p-8 lg:p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-deep-navy mb-2 font-sans">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-royal-purple focus:border-transparent transition-all duration-300 font-sans"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-deep-navy mb-2 font-sans">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-royal-purple focus:border-transparent transition-all duration-300 font-sans"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="testimony" className="block text-sm font-medium text-deep-navy mb-2 font-sans">
                                        Your Testimony *
                                    </label>
                                    <textarea
                                        id="testimony"
                                        name="testimony"
                                        value={formData.testimony}
                                        onChange={handleChange}
                                        required
                                        rows={8}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-royal-purple focus:border-transparent transition-all duration-300 font-sans resize-none"
                                        placeholder="Share your testimony here... Tell us what God has done in your life"
                                    />
                                </div>

                                <div className="pt-4">
                                    <Button
                                        disabled={isLoading}
                                        type="submit"
                                        className="w-full bg-royal-purple text-white hover:bg-deep-purple font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 py-6 text-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {
                                            isLoading ? (
                                                <span>
                                                    <LoaderCircle size={20} className="inline-flex mr-2 animate-spin" />
                                                    Sharing...
                                                </span>
                                            ) : (
                                                <span>
                                                    Share Testimony
                                                    <Send size={20} className="inline-flex ml-2" />
                                                </span>
                                            )
                                        }
                                    </Button>
                                </div>
                            </form>
                        </div>

                        <div className="mt-12 text-center">
                            <h3 className="text-2xl font-serif font-bold text-deep-navy mb-4">Why Share Your Testimony?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="bg-white p-6 rounded-xl shadow-md">
                                    <div className="w-12 h-12 bg-royal-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">🙌</span>
                                    </div>
                                    <h4 className="font-semibold text-deep-navy mb-2 font-sans">Glorify God</h4>
                                    <p className="text-gray-600 text-sm font-sans">Your testimony shows God's faithfulness and power at work in your life</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md">
                                    <div className="w-12 h-12 bg-royal-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">💪</span>
                                    </div>
                                    <h4 className="font-semibold text-deep-navy mb-2 font-sans">Encourage Others</h4>
                                    <p className="text-gray-600 text-sm font-sans">Your story of victory can strengthen the faith of someone going through a similar situation</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md">
                                    <div className="w-12 h-12 bg-royal-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">✝️</span>
                                    </div>
                                    <h4 className="font-semibold text-deep-navy mb-2 font-sans">Spread the Gospel</h4>
                                    <p className="text-gray-600 text-sm font-sans">Your testimony is a powerful tool to reach others and draw them to Christ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </PublicLayout>
    );
}
