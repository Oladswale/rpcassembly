import type { EventClickArg } from '@fullcalendar/core';
import { Head, usePage } from '@inertiajs/react';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { useCallback, useState, useMemo } from 'react';
import EventCalendar from '@/components/ui/event-calendar';
import EventModal from '@/components/ui/event-modal';
import PageHero from '@/components/ui/PageHero';
import { churchEvents, convertToFullCalendarEvents } from '@/lib/events';
import PublicLayout from '@/pages/layouts/appLayout';
import type { CalendarEventData } from '@/types/events';

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

    const [viewYear, setViewYear] = useState(new Date().getFullYear());
    const calendarEvents = useMemo(
        () => convertToFullCalendarEvents(churchEvents, viewYear),
        [viewYear],
    );

    const handleViewYearChange = useCallback((year: number) => {
        setViewYear(year);
    }, []);

    const [selectedEvent, setSelectedEvent] =
        useState<CalendarEventData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleEventClick = useCallback((arg: EventClickArg) => {
        const props = arg.event.extendedProps;

        setSelectedEvent({
            title: arg.event.title,
            start: arg.event.startStr,
            end: arg.event.endStr,
            description: props.description as string | undefined,
            location: props.location as string | undefined,
            duration: props.duration as number | undefined,
            color: props.color as string | undefined,
        });

        setIsModalOpen(true);
        setIsClosing(false);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsClosing(true);

        setTimeout(() => {
            setIsModalOpen(false);
            setIsClosing(false);
            setSelectedEvent(null);
        }, 200);
    }, []);

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

                <section className="bg-warm-cream">
                    <div className="mx-auto max-w-7xl pb-20 pt-14 ">
                        <div className="mb-12 text-center">
                            <h2 className="font-serif text-3xl font-bold text-deep-navy md:text-4xl">
                                Church Calendar{' '}
                                <span className="text-royal-purple">
                                    {viewYear}
                                </span>
                            </h2>
                            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent-gold" />
                            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
                                Explore our annual schedule of services,
                                programmes, and special gatherings. Click on any
                                event to learn more.
                            </p>
                        </div>

                        <EventCalendar
                            events={calendarEvents}
                            onEventClick={handleEventClick}
                            onViewYearChange={handleViewYearChange}
                        />
                    </div>
                </section>

                <EventModal
                    event={selectedEvent}
                    isOpen={isModalOpen}
                    isClosing={isClosing}
                    onClose={handleCloseModal}
                />
            </main>
        </PublicLayout>
    );
}
