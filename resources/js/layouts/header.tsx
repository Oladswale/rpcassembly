import { Link } from '@inertiajs/react'
import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import Navbar from './navbar'
import { Menu, X } from 'lucide-react'
import MobileNav from './mobile-nav'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true)

    return (
        <header className='px-6 md:px-12 lg:px-16 py-2 bg-primary'>
            <div className='flex flex-row justify-between items-center'>
                <Link href={"/"}>
                    <img src={Logo} alt="Rpc Assembly" loading='eager' className='w-32 lg:w-40' />
                </Link>

                <Navbar />

                <button className='block md:hidden cursor-pointer text-white' onClick={() => { setIsMenuOpen(!isMenuOpen)}}>
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