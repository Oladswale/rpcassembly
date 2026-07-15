import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';
import PageHero from '@/components/ui/PageHero';
import { SectionHeader } from '@/components/ui/section-header';
import HorizontalLine from '@/components/ui/horizontal-line';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function FirstTimer() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        visitDate: '',
        howDidYouHear: '',
        prayerRequest: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for filling out the form! We look forward to seeing you.');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            visitDate: '',
            howDidYouHear: '',
            prayerRequest: '',
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <PublicLayout>
            <Head title="First Timer" />

            <main>
                <PageHero
                    title='First Timer'
                    description='We are excited to have you join us! Please fill out this form so we can make your visit special'
                />

                <div className="flex flex-col bg-white text-[#1b1b18] py-12 lg:py-16">
                    <div className="w-full max-w-4xl mx-auto px-6">
                        <SectionHeader className="text-center mb-12">
                            Welcome <span className="text-royal-purple font-serif italic">Home</span>
                            <HorizontalLine className="mx-auto" />
                        </SectionHeader>

                        <div className="bg-warm-cream rounded-2xl shadow-xl p-8 lg:p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-deep-navy mb-2 font-sans">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-royal-purple focus:border-transparent transition-all duration-300 font-sans"
                                            placeholder="Enter your first name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-deep-navy mb-2 font-sans">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-royal-purple focus:border-transparent transition-all duration-300 font-sans"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-deep-navy mb-2 font-sans">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-royal-purple focus:border-transparent transition-all duration-300 font-sans"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-deep-navy mb-2 font-sans">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-royal-purple focus:border-transparent transition-all duration-300 font-sans"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-deep-navy mb-2 font-sans">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-royal-purple focus:border-transparent transition-all duration-300 font-sans"
                                        placeholder="Enter your address"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="visitDate" className="block text-sm font-medium text-deep-navy mb-2 font-sans">
                                        Planned Visit Date *
                                    </label>
                                    <input
                                        type="date"
                                        id="visitDate"
                                        name="visitDate"
                                        value={formData.visitDate}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-royal-purple focus:border-transparent transition-all duration-300 font-sans"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="howDidYouHear" className="block text-sm font-medium text-deep-navy mb-2 font-sans">
                                        How did you hear about us?
                                    </label>
                                    <select
                                        id="howDidYouHear"
                                        name="howDidYouHear"
                                        value={formData.howDidYouHear}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-royal-purple focus:border-transparent transition-all duration-300 font-sans bg-white"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="friend">Friend/Family</option>
                                        <option value="social">Social Media</option>
                                        <option value="website">Website</option>
                                        <option value="event">Event/Program</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="prayerRequest" className="block text-sm font-medium text-deep-navy mb-2 font-sans">
                                        Prayer Request (Optional)
                                    </label>
                                    <textarea
                                        id="prayerRequest"
                                        name="prayerRequest"
                                        value={formData.prayerRequest}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-royal-purple focus:border-transparent transition-all duration-300 font-sans resize-none"
                                        placeholder="Share any prayer requests with us"
                                    />
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        className="w-full bg-royal-purple text-white hover:bg-deep-purple font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 py-6 text-lg"
                                    >
                                        Submit Form
                                    </Button>
                                </div>
                            </form>
                        </div>

                        <div className="mt-12 text-center">
                            <h3 className="text-2xl font-serif font-bold text-deep-navy mb-4">What to Expect</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="bg-white p-6 rounded-xl shadow-md">
                                    <div className="w-12 h-12 bg-royal-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">🎉</span>
                                    </div>
                                    <h4 className="font-semibold text-deep-navy mb-2 font-sans">Warm Welcome</h4>
                                    <p className="text-gray-600 text-sm font-sans">Our friendly team will greet you and help you find your way around</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md">
                                    <div className="w-12 h-12 bg-royal-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">🙏</span>
                                    </div>
                                    <h4 className="font-semibold text-deep-navy mb-2 font-sans">Inspiring Worship</h4>
                                    <p className="text-gray-600 text-sm font-sans">Experience uplifting music and a powerful message</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md">
                                    <div className="w-12 h-12 bg-royal-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl">☕</span>
                                    </div>
                                    <h4 className="font-semibold text-deep-navy mb-2 font-sans">Refreshments</h4>
                                    <p className="text-gray-600 text-sm font-sans">Stay after service for fellowship and light refreshments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </PublicLayout>
    );
}
