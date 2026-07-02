import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';
import PageHero from '@/components/ui/PageHero';
import SermonsSection from '@/components/pages/sermons/SermonsSection';

export default function Sermons() {
    return (
        <PublicLayout>
            <Head title="Sermons" />

            <main>
                <PageHero
                    title='Sermons'
                    description='Life-transforming messages to strengthen your faith'
                />

                <SermonsSection />
            </main>
        </PublicLayout>
    );
}
