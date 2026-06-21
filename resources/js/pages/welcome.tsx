
import PublicLayout from './layouts/appLayout';
import { Head } from '@inertiajs/react';
import ProgramsSection from '@/components/pages/home/ProgramsSection';
import AboutSection from '@/components/pages/home/AboutSection';
import Hero from '@/components/pages/home/hero';
import HomeEventSection from '@/components/pages/home/HomeEventSection';


export default function Welcome() {
    return (
        <PublicLayout>
            <Head title="Home" />
           
            <main>
                <Hero />
                <ProgramsSection />
                <AboutSection />
                <HomeEventSection />
            </main>
        </PublicLayout>
    );
}