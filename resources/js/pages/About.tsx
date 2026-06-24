import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';
import PageHero from '@/components/ui/PageHero';
import MissionVision from '@/components/pages/about/MissionVision';
import CoreValuesSection from '@/components/pages/about/CoreValuesSection';
import OrganogramSection from '@/components/pages/about/OrganogramSection';

export default function About() {
    return (
        <PublicLayout>
            <Head title="About" />

            <main>
                <PageHero
                    title='About Us'
                    description='We are a redeemed people of Christ Assembly dedicated to winning souls, building believers and sending them to impact the world'
                />

                <MissionVision />
                <CoreValuesSection />
                <OrganogramSection />
            </main>
        </PublicLayout>
    );
}
