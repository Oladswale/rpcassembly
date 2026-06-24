import { Link } from '@inertiajs/react'
import React, { useState, useEffect } from 'react'
import Navbar from '@/pages/layouts/navbar'
import { Menu, X } from 'lucide-react'
import MobileNav from '@/pages/layouts/mobile-nav'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <header 
                className={`
                    sticky top-0 z-50 w-full transition-all duration-300 ease-in-out px-6 md:px-12 lg:px-16
                    ${isScrolled 
                        ? 'py-2 bg-purple-950/80 backdrop-blur-md shadow-lg border-b border-white/5' 
                        : 'py-4 bg-purple-900 border-b border-white/10'
                    }
                `}
            >
                <div className='flex flex-row justify-between items-center max-w-7xl mx-auto'>
                    
                    <Link 
                        href={"/"} 
                        className="flex items-center transform hover:scale-105 active:scale-95 transition-all duration-200 ease-out"
                    >
                        <img 
                            src="/rpclogo.png" 
                            alt="Rpc Assembly Logo" 
                            loading='eager' 
                            className={`
                                w-auto object-contain block transition-all shrink-0 duration-300 ease-in-out
                                ${isScrolled ? 'h-10 lg:h-11' : 'h-12 lg:h-14'}
                            `} 
                        />
                    </Link>

                    <div className="hidden md:block transition-all duration-300 hover:translate-y-[-1px] hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                        <Navbar />
                    </div>

                    <button 
                        className='block md:hidden cursor-pointer text-white focus:outline-none hover:text-purple-300 transition-colors duration-200' 
                        onClick={() => { setIsMenuOpen(!isMenuOpen) }}
                        aria-label="Toggle Menu"
                    >
                        <div className="transform transition-transform duration-300 ease-out active:scale-75">
                            {isMenuOpen ? (
                                <X size={28} className="animate-[spin_0.2s_ease-out]" />
                            ) : (
                                <Menu size={28} className="animate-[fade-in_0.2s_ease-out]" />
                            )}
                        </div>
                    </button>
                </div>
            </header>

            <MobileNav
                isModalOpen={isMenuOpen}
                closeMenu={() => setIsMenuOpen(false)}
            />
        </>
    )
}

export default Header
