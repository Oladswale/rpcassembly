import { Head } from '@inertiajs/react';
import PublicLayout from '@/pages/layouts/appLayout';
import { Button } from '@/components/ui/button';

export default function Contact() {
    return (
        <PublicLayout>
            <Head title="Contact Us" />
            
            <div className="flex flex-col bg-white text-[#1b1b18] py-12">
                <main className="w-full max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl font-extrabold mb-8 text-primary">Get in Touch</h1>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                                <p className="text-gray-600">
                                    123 Faith Way<br />
                                    Ibadan, Oyo State, Nigeria
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-bold mb-2">Reach Out</h3>
                                <p className="text-gray-600">Email: hello@rpcassembly.org</p>
                                <p className="text-gray-600">Phone: +234 800 123 4567</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-2">Service Times</h3>
                                <p className="text-gray-600">Sunday Service: 9:00 AM</p>
                                <p className="text-gray-600">Wednesday Bible Study: 6:00 PM</p>
                            </div>
                        </div>

                        {/* Simple Contact Message */}
                        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                            <p className="text-gray-600 mb-6">
                                Have a question or prayer request? We would love to hear from you. 
                                We typically respond within 24-48 hours.
                            </p>
                            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                                Send Email
                            </Button>
                        </div>
                    </div>
                </main>
            </div>
        </PublicLayout>
    );
}