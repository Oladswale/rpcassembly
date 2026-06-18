import PublicLayout from './layouts/appLayout';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <PublicLayout>
            <Head title="Welcome" />
            
            <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow">
                <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                    
                </main>
            </div>
        </PublicLayout>
    );
}