
import PublicLayout from './layouts/appLayout';
import { Head } from '@inertiajs/react';
import ProgramsSection from '@/components/pages/home/ProgramsSection';
import AboutSection from '@/components/pages/home/AboutSection';
import Hero from '@/components/pages/home/Hero';
import HomeEventSection from '@/components/pages/home/HomeEventSection';
import SermonSection from '@/components/pages/home/SermonSection';
import CtaSection from '@/components/pages/home/CtaSection';


export default function Welcome() {
    return (
        <PublicLayout>
            <Head title="Home" />
           
            <main>
                <Hero />
                <ProgramsSection />
                <AboutSection />
                <HomeEventSection />
                <SermonSection />
                {/* <CtaSection /> */}
            </main>
        </PublicLayout>
    );
}