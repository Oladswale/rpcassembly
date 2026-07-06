import type { EventInput } from '@fullcalendar/core';
import { Month, Weekday } from '@/types/events';
import type { ChurchEvent } from '@/types/events';

function getFixedDate(year: number, month: Month, day: number): Date {
    return new Date(year, month, day);
}

function getNthWeekdayDate(
    year: number,
    month: Month,
    weekday: Weekday,
    occurrence: 1 | 2 | 3 | 4,
): Date {
    const firstDayOfMonth = new Date(year, month, 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    let diff = weekday - dayOfWeek;

    if (diff < 0) {
        diff += 7;
    }

    const date = 1 + diff + 7 * (occurrence - 1);

    return new Date(year, month, date);
}

function getLastWeekdayDate(
    year: number,
    month: Month,
    weekday: Weekday,
): Date {
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const dayOfWeek = lastDayOfMonth.getDay();
    let diff = dayOfWeek - weekday;

    if (diff < 0) {
        diff += 7;
    }

    const date = lastDayOfMonth.getDate() - diff;

    return new Date(year, month, date);
}

export function generateEventDates(
    event: ChurchEvent,
    year: number,
): { start: Date; end: Date } {
    let startDate: Date;

    if (event.day !== undefined) {
        startDate = getFixedDate(year, event.month, event.day);
    } else if (event.weekday !== undefined && event.occurrence !== undefined) {
        if (event.occurrence === 'last') {
            startDate = getLastWeekdayDate(year, event.month, event.weekday);
        } else {
            startDate = getNthWeekdayDate(
                year,
                event.month,
                event.weekday,
                event.occurrence,
            );
        }
    } else {
        throw new Error(
            `Invalid event config for "${event.title}": must include a day or a weekday with occurrence.`,
        );
    }

    const endDate = new Date(startDate);
    const days = event.duration !== undefined ? event.duration : 1;
    endDate.setDate(endDate.getDate() + days);

    return { start: startDate, end: endDate };
}

export function convertToFullCalendarEvents(
    events: ChurchEvent[],
    year: number,
): EventInput[] {
    return events.map((event) => {
        const { start, end } = generateEventDates(event, year);

        return {
            title: event.title,
            start: start.toISOString(),
            end: end.toISOString(),
            backgroundColor: event.color || '#6c2bd9',
            borderColor: event.color || '#6c2bd9',
            textColor: '#ffffff',
            classNames: ['rpc-calendar-event'],
            extendedProps: {
                description: event.description,
                location: event.location,
                duration: event.duration,
                color: event.color || '#6c2bd9',
            },
        };
    });
}

export function getReadableDate(event: ChurchEvent): string {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const weekdayNames = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday',
    ];

    if (event.day !== undefined) {
        const suffix = getDaySuffix(event.day);

        return `${monthNames[event.month]} ${event.day}${suffix}`;
    }

    if (event.weekday !== undefined && event.occurrence !== undefined) {
        const weekdayName = weekdayNames[event.weekday];

        if (event.occurrence === 'last') {
            return `Last ${weekdayName} of ${monthNames[event.month]}`;
        }

        return `${getOrdinal(event.occurrence)} ${weekdayName} of ${monthNames[event.month]}`;
    }

    return monthNames[event.month];
}

function getDaySuffix(day: number): string {
    if (day >= 11 && day <= 13) {
        return 'th';
    }

    switch (day % 10) {
        case 1: {
            return 'st';
        }
        case 2: {
            return 'nd';
        }
        case 3: {
            return 'rd';
        }
        default: {
            return 'th';
        }
    }
}

function getOrdinal(n: number): string {
    switch (n) {
        case 1: {
            return 'First';
        }
        case 2: {
            return 'Second';
        }
        case 3: {
            return 'Third';
        }
        case 4: {
            return 'Fourth';
        }
        default: {
            return '';
        }
    }
}

export const churchEvents: ChurchEvent[] = [
    {
        title: 'Cross Over Thanksgiving',
        month: Month.DECEMBER,
        day: 31,
        description:
            'Join us as we cross over into the new year with thanksgiving, praise, and powerful prayers. A night of reflection and celebration of God\u2019s faithfulness throughout the year.',
        location: 'RPC Assembly Main Auditorium',
        color: '#f59e0b',
    },
    {
        title: 'Annual Fasting & Prayer',
        month: Month.JANUARY,
        day: 1,
        duration: 5,
        description:
            'Start the year with a season of fasting, prayer, and seeking God\u2019s direction for the year ahead. We gather daily for powerful intercession and spiritual renewal.',
        location: 'RPC Assembly Church Auditorium',
        color: '#6c2bd9',
    },
    {
        title: "Children's Anniversary",
        month: Month.MAY,
        weekday: Weekday.SUNDAY,
        occurrence: 1,
        description:
            'A special service celebrating our children with songs, dances, and a message tailored for the young ones. Parents and guardians are encouraged to attend.',
        location: 'RPC Assembly Church Auditorium',
        color: '#f97316',
    },
    {
        title: 'Youth Anniversary',
        month: Month.JUNE,
        weekday: Weekday.SUNDAY,
        occurrence: 'last',
        description:
            'A anniversary service organised and led by the youth ministry. Vibrant worship, inspiring testimonies, and a powerful word for the next generation.',
        location: 'RPC Assembly Church Auditorium',
        color: '#2563eb',
    },
    {
        title: 'Mount Zion Special Program',
        month: Month.JULY,
        weekday: Weekday.SUNDAY,
        occurrence: 1,
        duration: 7,
        description:
            'A seven-day spiritual encounter from the first Sunday to Saturday.\n\nDay 1 (Sunday) \u2014 Opening\nFasting, prayer, and white fasting. General vigil begins at 11:00 PM.\n\nDay 2 (Monday)\nOpen to everyone.\n\nDay 3 (Tuesday) \u2014 Men Only\nA time of focused prayer and fellowship for the men.\n\nDay 4 (Wednesday) \u2014 Women Only\nA special time of prayer, worship, and ministry for the women.\n\nDay 5 (Thursday) \u2014 Youth\nA powerful night of prayer, praise, and prophetic word.\n\nDay 6 (Friday) \u2014 Church Workers\nHonouring those who serve faithfully.\n\nDay 7 (Saturday) \u2014 Grand Finale\nGeneral gathering for everyone. Vigil begins at 10:00 PM.',
        location: 'RPC Assembly Church Auditorium',
        color: '#4b0082',
    },
    {
        title: 'Hymnal Service',
        month: Month.JULY,
        weekday: Weekday.SUNDAY,
        occurrence: 'last',
        description:
            'A special service of hymns in remembrance of our late founder. We gather to honour his legacy through timeless songs of faith and a reflective message.',
        location: 'RPC Assembly Church Auditorium',
        color: '#6b7280',
    },
    {
        title: 'Eccelesiates Choir Anniversary',
        month: Month.AUGUST,
        weekday: Weekday.SUNDAY,
        occurrence: 'last',
        description:
            'A celebration of the Eccelesiates choir ministry. Featuring special renditions, guest choirs, and a powerful time of worship through song.',
        location: 'RPC Assembly Church Auditorium',
        color: '#0891b2',
    },
    {
        title: "Women's Anniversary",
        month: Month.SEPTEMBER,
        weekday: Weekday.SUNDAY,
        occurrence: 'last',
        description:
            'A anniversary service honouring the women of the church. Featuring guest ministers, special music, and a message of empowerment and faith.',
        location: 'RPC Assembly Church Auditorium',
        color: '#ec4899',
    },
    {
        title: "Men's Anniversary",
        month: Month.OCTOBER,
        weekday: Weekday.SUNDAY,
        occurrence: 'last',
        description:
            'A anniversary service honouring the men of the church. A time of fellowship, mentorship, and building godly men for the family and society.',
        location: 'RPC Assembly Church Auditorium',
        color: '#059669',
    },
];
