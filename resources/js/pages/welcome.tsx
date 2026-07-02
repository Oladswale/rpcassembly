
import PublicLayout from './layouts/appLayout';
import { Head } from '@inertiajs/react';
import ProgramsSection from '@/components/pages/home/ProgramsSection';
import AboutSection from '@/components/pages/home/AboutSection';
import Hero from '@/components/pages/home/hero';
import HomeEventSection from '@/components/pages/home/HomeEventSection';
import SermonSection from '@/components/pages/home/SermonSection';
import MinistriesSection from '@/components/pages/home/MinistriesSection';
import CtaSection from '@/components/pages/home/CtaSection';


export default function Welcome() {
    return (
        <PublicLayout>
            <Head title="Home" />
           
            <main>
                <Hero />
                <ProgramsSection />
                <AboutSection />
                <MinistriesSection />
                <HomeEventSection />
                <SermonSection />
                {/* <CtaSection /> */}
            </main>
        </PublicLayout>
    );
}