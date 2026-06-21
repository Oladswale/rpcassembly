import React from 'react';
import Header from './header';


const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col ">
            <Header />
            <main className="flex flex-col">
                {children}
            </main>
        </div>
    )
}

export default PublicLayout