import React from 'react';
import Header from './header';


const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col bg-[#FDFDFC] text-[#1b1b18]">
            <Header />
            <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8">
                {children}
            </main>
        </div>
    )
}

export default PublicLayout