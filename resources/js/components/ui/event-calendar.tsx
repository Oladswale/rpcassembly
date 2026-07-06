import { useEffect, useRef, useState, useCallback } from 'react';
import type { EventClickArg, EventInput, DatesSetArg } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import multiMonthPlugin from '@fullcalendar/multimonth';
import interactionPlugin from '@fullcalendar/interaction';

interface EventCalendarProps {
    events: EventInput[];
    onEventClick: (arg: EventClickArg) => void;
    onViewYearChange?: (year: number) => void;
}

export default function EventCalendar({
    events,
    onEventClick,
    onViewYearChange,
}: EventCalendarProps) {
    const calendarRef = useRef<FullCalendar>(null);
    const [isDesktop, setIsDesktop] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const mq = window.matchMedia('(min-width: 1024px)');

        setIsDesktop(mq.matches);

        const handler = (e: MediaQueryListEvent) => {
            setIsDesktop(e.matches);
        };

        mq.addEventListener('change', handler);

        return () => {
            mq.removeEventListener('change', handler);
        };
    }, []);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        const api = calendarRef.current?.getApi();

        if (api) {
            api.changeView(isDesktop ? 'multiMonthYear' : 'dayGridMonth');
        }
    }, [isDesktop, isClient]);

    const handleDatesSet = useCallback((arg: DatesSetArg) => {
        const year = arg.start.getFullYear();

        onViewYearChange?.(year);
    }, [onViewYearChange]);

    return (
        <div className="rpc-calendar-wrapper">
            <div className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
                {isClient && (
                    <FullCalendar
                        ref={calendarRef}
                        plugins={[
                            dayGridPlugin,
                            multiMonthPlugin,
                            interactionPlugin,
                        ]}
                        initialView={
                            isDesktop
                                ? 'multiMonthYear'
                                : 'dayGridMonth'
                        }
                        views={{
                            multiMonthYear: {
                                multiMonthMaxColumns: 3,
                                multiMonthMinWidth: 280,
                                aspectRatio: 1.2,
                                fixedWeekCount: false,
                            },
                        }}
                        events={events}
                        eventClick={onEventClick}
                        datesSet={handleDatesSet}
                        headerToolbar={{
                            start: 'prev',
                            center: 'title',
                            end: 'next',
                        }}
                        firstDay={0}
                        height="auto"
                        contentHeight="auto"
                        stickyHeaderDates={false}
                        eventDisplay="block"
                        displayEventTime={false}
                        eventTimeFormat={{
                            hour: '2-digit',
                            minute: '2-digit',
                        }}
                        dayMaxEvents={isDesktop ? 2 : 1}
                        moreLinkText={(num) => `+${num} more`}
                        locale="en"
                    />
                )}
            </div>
        </div>
    );
}
