
import PublicLayout from './layouts/appLayout';
import { Head, usePage } from '@inertiajs/react';
import ProgramsSection from '@/components/pages/home/ProgramsSection';
import AboutSection from '@/components/pages/home/AboutSection';
import Hero from '@/components/pages/home/hero';
import HomeEventSection from '@/components/pages/home/HomeEventSection';
import SermonSection from '@/components/pages/home/SermonSection';
import MinistriesSection from '@/components/pages/home/MinistriesSection';
import MapSection from '@/components/pages/home/MapSection';

export type HomeEvent = {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    flyer_url: string | null;
};

export default function Welcome() {
    const { events } = usePage<{ events: HomeEvent[] }>().props;

    return (
        <PublicLayout>
            <Head title="Home" />
            <main>
                <Hero />
                <ProgramsSection />
                <AboutSection />
                <MinistriesSection />
                <HomeEventSection events={events} />
                <SermonSection />
                <MapSection />
            </main>
        </PublicLayout>
    );
}