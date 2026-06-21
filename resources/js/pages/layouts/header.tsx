import { Link } from '@inertiajs/react'
import React, { useState } from 'react'
import Navbar from '@/pages/layouts/navbar'
import { Menu, X } from 'lucide-react'
import MobileNav from '@/pages/layouts/mobile-nav'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <header className='px-6 md:px-12 lg:px-16 py-3 bg-deep-purple border-b border-white/10 sticky top-0 z-40 w-full'>
            <div className='flex flex-row justify-between items-center max-w-7xl mx-auto'>
                
                <Link href={"/"} className="flex items-center">
                    <img 
                        src="/rpclogo.png" 
                        alt="Rpc Assembly Logo" 
                        loading='eager' 
                        className='h-12 lg:h-14 w-auto object-contain block' 
                    />
                </Link>

                <Navbar />

                <button 
                    className='block md:hidden cursor-pointer text-white focus:outline-none' 
                    onClick={() => { setIsMenuOpen(!isMenuOpen) }}
                >
                    {isMenuOpen ? <X size={30} /> : <Menu size={30}/>}
                </button>
            </div>

            <MobileNav
                isModalOpen={isMenuOpen}
                closeMenu={() => setIsMenuOpen(false)}
            />
        </header>
    )
}

export default Header