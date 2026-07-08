import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './header';
import Footer from './footer';


const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col ">
            <Header />
            <main className="flex flex-col flex-1">
                {children}
            </main>
            <Footer />
            <Toaster position="top-right" toastOptions={{
                style: {
                    fontFamily: "'Lato', sans-serif",
                },
            }} />
        </div>
    )
}

export default PublicLayout
