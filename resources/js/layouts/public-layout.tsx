import React from 'react'
import Header from './header'

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
        </main>
    )
}

export default PublicLayout