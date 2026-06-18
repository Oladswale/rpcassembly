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
        <nav className='flex md:hidden fixed inset-0 w-full h-full z-50'>
            {/* Drawer Area */}
            <div className='w-[70%] z-20 top-0 bg-primary absolute right-0 h-full pl-4 py-5 shadow-2xl'>
                <button onClick={closeMenu} className="focus:outline-none">
                    <X size={30} className='text-white cursor-pointer' />
                </button>
                
                <ul className='space-y-4 mt-8 pl-7'>
                    {navLinks.map(({ title, href }) => (
                        <li key={title}>
                            <Link 
                                href={href} 
                                onClick={closeMenu}
                                className={`text-lg font-normal block py-1 transition-colors ${url === href ? 'text-accent font-semibold' : 'text-white hover:text-accent'}`}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Backdrop click closer */}
            <div className='absolute inset-0 bg-black/60' onClick={closeMenu}></div>
        </nav>
    );
};

export default MobileNav;