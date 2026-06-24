import React from 'react';
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
        </div>
    )
}

export default PublicLayout