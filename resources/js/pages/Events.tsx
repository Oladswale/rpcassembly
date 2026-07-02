import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';
import PageHero from '@/components/ui/PageHero';
import EventsSection from '@/components/pages/events/EventsSection';

export default function Events() {
    return (
        <PublicLayout>
            <Head title="Events" />

            <main>
                <PageHero
                    title='Events'
                    description='Stay connected with everything happening at RPC Assembly. Join us for life-transforming services and programs.'
                />

                <EventsSection />
            </main>
        </PublicLayout>
    );
}
