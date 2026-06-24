import { navLinks } from '@/types/data'
import { Link, usePage } from '@inertiajs/react'
import { X } from 'lucide-react'
import React from 'react'


interface MobileNavProp {
    isModalOpen: boolean;
    closeMenu: () => void;
}

const MobileNav: React.FC<MobileNavProp> = ({ isModalOpen, closeMenu }) => {
    if (!isModalOpen) return null;

    const { url } = usePage();
    
    return (
        <nav className='flex md:hidden fixed inset-0 w-full h-full z-999 overflow-hidden'>
            {/* Backdrop click closer */}
            <div className='absolute inset-0 bg-black/60' onClick={closeMenu} />

            {/* Drawer Area */}
            <div className='w-[75%] sm:w-[60%] z-10 top-0 bg-deep-purple absolute right-0 h-full shadow-2xl overflow-y-auto'>
                <div className='pl-4 py-5'>
                    <button onClick={closeMenu} className="focus:outline-none">
                        <X size={30} className='text-white cursor-pointer' />
                    </button>
                    
                    <ul className='space-y-4 mt-3 pl-7'>
                        {navLinks.map(({ title, href }) => (
                            <li key={title}>
                                <Link 
                                    href={href} 
                                    onClick={closeMenu}
                                    className={`text-lg font-normal block py-1 transition-colors ${url === href ? 'text-accent-gold font-semibold' : 'text-white hover:text-accent'}`}
                                >
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MobileNav;