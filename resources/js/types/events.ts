export enum Month {
    JANUARY = 0,
    FEBRUARY = 1,
    MARCH = 2,
    APRIL = 3,
    MAY = 4,
    JUNE = 5,
    JULY = 6,
    AUGUST = 7,
    SEPTEMBER = 8,
    OCTOBER = 9,
    NOVEMBER = 10,
    DECEMBER = 11,
}

export enum Weekday {
    SUNDAY = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6,
}

export interface ChurchEvent {
    title: string
    month: Month
    day?: number
    weekday?: Weekday
    occurrence?: 1 | 2 | 3 | 4 | 'last'
    duration?: number
    description?: string
    location?: string
    color?: string
}

export interface CalendarEventData {
    title: string
    start: string
    end: string
    description?: string
    location?: string
    duration?: number
    color?: string
}
