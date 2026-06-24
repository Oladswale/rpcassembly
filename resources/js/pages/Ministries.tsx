import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';
import PageHero from '@/components/ui/PageHero';
import MinistriesSection from '@/components/pages/ministries/MinistriesSection';

export default function Ministries() {
    return (
        <PublicLayout>
            <Head title="Ministries" />

            <main>
                <PageHero
                    title='Ministries'
                    description="At RPC Assembly, we believe ministry is not just something we do, it's who we are. Discover the
                    ministries where you can grow, serve and make an impact for God's kingdom"
                />

                <MinistriesSection />
            </main>
        </PublicLayout>
    );
}
