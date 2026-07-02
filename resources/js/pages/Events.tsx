import { Head, usePage } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';
import { MapPin, Clock, Calendar } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

type Event = {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string | null;
    flyer_url: string | null;
};

export default function Events() {
    const { events } = usePage<{ events: Event[] }>().props;

    return (
        <PublicLayout>
            <Head title="Events" />

            <main>
                <PageHero
                    title='Events'
                    description='Stay up to date with everything happening at RPC Assembly — services, programmes and special gatherings'
                    src='/worship.jpg'
                />

                <div className="bg-white text-[#1b1b18] py-12">
                    <div className="w-full max-w-5xl mx-auto px-6">
                    {events.length === 0 ? (
                        <p className="text-gray-500 text-center py-16">No upcoming events at the moment. Check back soon!</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {events.map((event) => (
                                <div key={event.id} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50 flex flex-col">
                                    {event.flyer_url && (
                                        <img
                                            src={event.flyer_url}
                                            alt={event.title}
                                            className="w-full block"
                                        />
                                    )}

                                    <div className="p-5 flex flex-col gap-2">
                                        <h3 className="text-xl font-bold text-deep-navy">{event.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} className="text-royal-purple" /> {event.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} className="text-royal-purple" /> {event.time}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} className="text-royal-purple" /> {event.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    </div>
                </div>
            </main>
        </PublicLayout>
    );
}
