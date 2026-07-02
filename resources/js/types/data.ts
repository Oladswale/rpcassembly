import React, { ComponentType, SVGProps } from "react";
import { NavItem } from "../types/navigation";
import {
    CalendarDays,
    Users,
    HandHeart,
    Baby,
} from "lucide-react"
import Event1 from '../../js/assets/images/event-1.jpg'
import Event2 from '../../js/assets/images/event-2.jpg'
import Event3 from '../../js/assets/images/event-3.jpg'
import Event4 from '../../js/assets/images/event-4.jpg'
import Event5 from '../../js/assets/images/event-5.jpg'
import Event6 from '../../js/assets/images/event-6.jpg'
import Event7 from '../../js/assets/images/event-7.jpg'



export const navLinks: NavItem[] = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Ministries", href: "/ministries" },
    { title: "Sermons", href: "/sermons" },
    { title: "Events", href: "/events" },
    { title: "Contact", href: "/contact" },
];



export interface InfoType {
    title: string,
    time: string,
    description: string,
    icon: ComponentType<SVGProps<SVGElement>>,
    iconBgColor: string
}
export const serviceTimes: InfoType[] = [
    {
        title: "Morning Devotions",
        time: "5:45 AM",
        description: "Monday – Friday",
        icon: HandHeart,
        iconBgColor: "#2563EB",
    },
    {
        title: "Sunday Service",
        time: "7:00 AM",
        description: "Every Sunday",
        icon: CalendarDays,
        iconBgColor: "#7C3AED",
    },
    {
        title: "Bible Study",
        time: "5:30 PM",
        description: "Every Wednesday",
        icon: Users,
        iconBgColor: "#EC4899",
    },
]

export type EventsType = {
    id: string | number,
    image: string,
    title: string,
    date: string,
    time: string,
    location: string
}
export const events: Array<EventsType> = [
    {
        id: 1,
        image: Event1,
        title: "Sunday Worship Experience",
        date: "Sep 07, 2025",
        time: "8:30 AM",
        location: "Church Auditorium",
    },
    {
        id: 2,
        image: Event2,
        title: "Midweek Bible Study",
        date: "Sep 10, 2025",
        time: "6:00 PM",
        location: "Church Annex",
    },
    {
        id: 3,
        image: Event3,
        title: "Friday Prayer & Worship Night",
        date: "Sep 12, 2025",
        time: "6:00 PM",
        location: "Alaro",
    },
    {
        id: 4,
        image: Event4,
        title: "Youth Impact Gathering",
        date: "Sep 20, 2025",
        time: "4:00 PM",
        location: "Idito",
    },
    {
        id: 5,
        image: Event5,
        title: "Women's Fellowship Conference",
        date: "Oct 04, 2025",
        time: "10:00 AM",
        location: "Adegbayi",
    },
    {
        id: 6,
        image: Event6,
        title: "Community Outreach Program",
        date: "Oct 18, 2025",
        time: "9:00 AM",
        location: "Church Auditorium",
    },
    {
        id: 7,
        image: Event7,
        title: "Leadership & Excellence Summit",
        date: "Nov 08, 2025",
        time: "11:00 AM",
        location: "Church Annex",
    },
    {
        id: 8,
        image: "/events/thanksgiving.jpg",
        title: "Annual Thanksgiving Service",
        date: "Dec 14, 2025",
        time: "9:00 AM",
        location: "RPC Assembly",
    },
];

export type SermonType = {
    id: string | number,
    videoUrl: string,
    title: string,
    speaker: string,
    date: string,
    description: string,
}
export const sermons: SermonType[] = [
    {
        id: 1,
        videoUrl: "https://www.youtube.com/watch?v=OSAeiC--77k",
        title: "Anointing Service",
        speaker: "Pastor Olufisayo",
        date: "July 1, 2026",
        description: "A powerful message to strengthen your faith.",
    },
    {
        id: 2,
        videoUrl: "https://www.youtube.com/watch?v=m-hm8o5iiBE",
        title: "First Day of the Month",
        speaker: "Pastor Olufisayo",
        date: "July 1, 2026",
        description: "Understanding God's plans for daily living in the new month.",
    },
    {
        id: 3,
        videoUrl: "https://www.youtube.com/watch?v=5DFRCbFZcVg",
        title: "Youth Anniversary",
        speaker: "Pastor Olufisayo",
        date: "June 28, 2026",
        description: "Walking in divine purpose and destiny.",
    },
    {
        id: 4,
        videoUrl: "https://www.youtube.com/watch?v=-mbpkbOowIk",
        title: "Walking in the Spirit",
        speaker: "Pastor Olufisayo",
        date: "June 21, 2026",
        description: "Living a life led and empowered by the Holy Spirit.",
    },
    {
        id: 5,
        videoUrl: "https://www.youtube.com/watch?v=GJQ0_R_MiFk",
        title: "The Power of Prayer",
        speaker: "Pastor Olufisayo",
        date: "June 14, 2026",
        description: "Discovering the transformative power of a consistent prayer life.",
    },
    {
        id: 6,
        videoUrl: "https://www.youtube.com/watch?v=O_I_2szfOkM",
        title: "Faith That Works",
        speaker: "Pastor Olufisayo",
        date: "June 7, 2026",
        description: "Understanding how genuine faith produces visible results.",
    },
    {
        id: 7,
        videoUrl: "https://www.youtube.com/watch?v=CWlyLhCtvKQ",
        title: "Grace and Truth",
        speaker: "Pastor Olufisayo",
        date: "May 31, 2026",
        description: "Balancing the grace of God with the truth of His Word.",
    },
    {
        id: 8,
        videoUrl: "https://www.youtube.com/watch?v=jgDC4FD08Zk",
        title: "Rooted in Christ",
        speaker: "Pastor Olufisayo",
        date: "May 24, 2026",
        description: "Building a life deeply anchored in the person of Jesus Christ.",
    },
]

