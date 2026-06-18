import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';
import { Button } from '@/components/ui/button';

export default function Events() {
    const upcomingEvents = [
        { title: "Community Prayer Night", date: "June 25, 2026", time: "7:00 PM", location: "Main Sanctuary" },
        { title: "Youth Summer Kickoff", date: "July 2, 2026", time: "5:00 PM", location: "Church Hall" },
        { title: "Sunday Fellowship Brunch", date: "July 5, 2026", time: "11:30 AM", location: "Outdoor Pavilion" },
    ];

    return (
        <PublicLayout>
            <Head title="Events" />
            
            <div className="flex flex-col bg-white text-[#1b1b18] py-12">
                <main className="w-full max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-extrabold mb-8 text-primary">Upcoming Events</h1>

                    <div className="space-y-6">
                        {upcomingEvents.map((event, index) => (
                            <div 
                                key={index} 
                                className="flex flex-col md:flex-row items-start md:items-center p-6 border border-gray-100 rounded-xl bg-gray-50 gap-4"
                            >
                                {/* Date Box */}
                                <div className="flex-shrink-0 w-24 h-24 bg-red-600 text-white rounded-lg flex flex-col items-center justify-center text-center p-2">
                                    <span className="text-xs font-bold uppercase tracking-wide opacity-90">
                                        {event.date.split(' ')[0]}
                                    </span>
                                    <span className="text-2xl font-bold">
                                        {event.date.split(' ')[1].replace(',', '')}
                                    </span>
                                </div>

                                {/* Event Details */}
                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold">{event.title}</h3>
                                    <p className="text-gray-600">
                                        {event.time} • {event.location}
                                    </p>
                                </div>

                                {/* Action */}
                                <Button variant="outline">
                                    Add to Calendar
                                </Button>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </PublicLayout>
    );
}