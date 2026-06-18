import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';

export default function Ministries() {
    const ministries = [
        { title: "Youth Ministry", description: "Empowering the next generation through faith and community activities." },
        { title: "Worship Team", description: "Leading our congregation in heartfelt praise and musical worship." },
        { title: "Community Outreach", description: "Serving our local neighborhood through kindness and tangible support." },
        { title: "Prayer Warriors", description: "Dedicated to interceding for the needs of our members and the world." }
    ];

    return (
        <PublicLayout>
            <Head title="Ministries" />
            
            <div className="flex flex-col bg-white text-[#1b1b18] py-12">
                <main className="w-full max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-extrabold mb-4 text-primary">
                        Our Ministries
                    </h1>
                    <p className="text-lg text-gray-600 mb-10 max-w-2xl">
                        Explore the various ways to get involved, grow in your faith, 
                        and serve alongside others in our community.
                    </p>

                    {/* Ministry Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {ministries.map((ministry, index) => (
                            <div 
                                key={index} 
                                className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-gray-50"
                            >
                                <h3 className="text-xl font-bold mb-3 text-primary">{ministry.title}</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {ministry.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </PublicLayout>
    );
}