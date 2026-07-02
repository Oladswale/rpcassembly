import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';
import PageHero from '@/components/ui/PageHero';
import ContactSection from '@/components/pages/contact/ContactSection';

export default function Contact() {
    return (
        <PublicLayout>
            <Head title="Contact Us" />

            <main>
                <PageHero
                    title='Contact Us'
                    description='We would love to hear from you. Get in touch with us'
                    className='lg:pt-20 lg:pb-28'
                />

                <ContactSection />
            </main>
        </PublicLayout>
    );
}
