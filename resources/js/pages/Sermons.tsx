import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';
import { Button } from '@/components/ui/button';

export default function Sermons() {
    const recentSermons = [
        { title: "Walking in Faith", speaker: "Pastor John Doe", date: "June 14, 2026" },
        { title: "The Power of Grace", speaker: "Pastor Sarah Smith", date: "June 7, 2026" },
        { title: "Living with Purpose", speaker: "Pastor John Doe", date: "May 31, 2026" },
    ];

    return (
        <PublicLayout>
            <Head title="Sermons" />
            
            <div className="flex flex-col bg-white text-[#1b1b18] py-12">
                <main className="w-full max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-extrabold mb-8 text-primary">Sermon Library</h1>

                    {/* Featured Sermon Section */}
                    <div className="bg-gray-50 p-8 rounded-2xl mb-12 border border-gray-100">
                        <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Featured</span>
                        <h2 className="text-3xl font-bold mt-2 mb-4">Finding Peace in Chaos</h2>
                        <p className="text-gray-600 mb-6 max-w-xl">
                            Join us as we explore how to maintain inner calm through faith, 
                            even when the world around us feels overwhelming.
                        </p>
                        <Button className="bg-red-600 hover:bg-red-700 text-white">
                            Watch Now
                        </Button>
                    </div>

                    {/* Archive List */}
                    <h3 className="text-2xl font-bold mb-6">Recent Messages</h3>
                    <div className="space-y-4">
                        {recentSermons.map((sermon, index) => (
                            <div 
                                key={index} 
                                className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                                <div>
                                    <h4 className="font-bold text-lg">{sermon.title}</h4>
                                    <p className="text-sm text-gray-500">{sermon.speaker} • {sermon.date}</p>
                                </div>
                                <Button variant="outline" size="sm">
                                    View
                                </Button>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </PublicLayout>
    );
}