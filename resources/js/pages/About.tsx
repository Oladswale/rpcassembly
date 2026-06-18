import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';

export default function About() {
    return (
        <PublicLayout>
            <Head title="About" />
            
            <div className="flex flex-col items-center bg-white text-[#1b1b18] py-12">
                <main className="w-full max-w-4xl px-6">
                    <h1 className="text-4xl font-extrabold mb-6 text-primary">
                        Our Mission
                    </h1>
                    
                    <div className="prose prose-lg text-gray-700 leading-relaxed">
                        <p className="mb-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Nemo quia soluta totam accusantium pariatur voluptatem temporibus, 
                            natus blanditiis unde vero?
                        </p>
                        <p>
                            Ad distinctio dolorem, ut quibusdam dolores consectetur culpa 
                            cupiditate repellendus! We are dedicated to serving our community 
                            with faith, love, and purpose.
                        </p>
                    </div>
                </main>
            </div>
        </PublicLayout>
    );
}