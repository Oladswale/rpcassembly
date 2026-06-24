import { ComponentType, SVGProps } from "react"
import {
    Music,
    Heart,
    Shield,
    Church,
    Users,
    Baby,
    CalendarDays,
    HandHeart
} from 'lucide-react'

export type MinistryType = {
    id: number,
    title: string,
    description: string,
    icon: ComponentType<SVGProps<SVGSVGElement>>,
    color: string,
}
export const ministries: MinistryType[] = [
    {
        id: 1,
        title: "Youth Ministry",
        description: "Empowering the next generation to know Christ, grow in faith, and make a difference in their world through engaging programs and mentorship.",
        icon: Users,
        color: "#7C3AED",
    },
    {
        id: 2,
        title: "Worship Team",
        description: "Leading our congregation into the presence of God through heartfelt praise, worship, and musical excellence.",
        icon: Music,
        color: "#EC4899",
    },
    {
        id: 3,
        title: "Children's Ministry",
        description: "Nurturing the faith of our children with age-appropriate Bible teaching, fun activities, and a safe, loving environment.",
        icon: Baby,
        color: "#F59E0B",
    },
    {
        id: 4,
        title: "Men's Fellowship",
        description: "Building godly men who lead their families, serve their community, and stand firm in their faith.",
        icon: Shield,
        color: "#2563EB",
    },
    {
        id: 5,
        title: "Women's Fellowship",
        description: "A community of women growing together in faith, supporting one another, and impacting their world for Christ.",
        icon: Heart,
        color: "#DB2777",
    },
    {
        id: 6,
        title: "Prayer Ministry",
        description: "Dedicated to intercessory prayer, seeking God's face for our church, community, and nations.",
        icon: Church,
        color: "#059669",
    },
    {
        id: 7,
        title: "Community Outreach",
        description: "Sharing the love of Christ through practical acts of service, evangelism, and community development.",
        icon: HandHeart,
        color: "#DC2626",
    },
    {
        id: 8,
        title: "Media & Technical",
        description: "Using media and technology to spread the gospel, enhance worship experiences, and connect with our online community.",
        icon: CalendarDays,
        color: "#4F46E5",
    },
]