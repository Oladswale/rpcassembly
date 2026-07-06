import { navLinks } from '@/types/data'
import { Link, usePage } from '@inertiajs/react'
import { X, ChevronDown, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'


interface MobileNavProp {
    isModalOpen: boolean;
    closeMenu: () => void;
}

const MobileNav: React.FC<MobileNavProp> = ({ isModalOpen, closeMenu }) => {
    if (!isModalOpen) return null;

    const { url } = usePage();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (title: string) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };

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
                        {navLinks.map((item) => {
                            const hasChildren = item.children && item.children.length > 0;
                            const isDropdownOpen = openDropdown === item.title;

                            return (
                                <li key={item.title}>
                                    {hasChildren ? (
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <Link
                                                    href={item.href}
                                                    onClick={closeMenu}
                                                    className={`text-lg font-normal block py-1 transition-colors ${url === item.href ? 'text-accent-gold font-semibold' : 'text-white hover:text-accent'}`}
                                                >
                                                    {item.title}
                                                </Link>
                                                <button
                                                    onClick={() => toggleDropdown(item.title)}
                                                    className="text-white hover:text-accent"
                                                >
                                                    {isDropdownOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                                </button>
                                            </div>
                                            {isDropdownOpen && (
                                                <ul className="ml-4 mt-2 space-y-2">
                                                    {item.children?.map((child) => (
                                                        <li key={child.title}>
                                                            <Link
                                                                href={child.href || '#'}
                                                                onClick={closeMenu}
                                                                className="text-base font-normal block py-1 transition-colors text-white/80 hover:text-accent"
                                                            >
                                                                {child.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className={`text-lg font-normal block py-1 transition-colors ${url === item.href ? 'text-accent-gold font-semibold' : 'text-white hover:text-accent'}`}
                                        >
                                            {item.title}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    <div className='mt-6 pl-7'>
                        <Button
                            asChild
                            className="w-full bg-red-600 text-white hover:bg-red-500 font-semibold shadow-lg transition-all duration-300"
                        >
                            <a
                                href="https://www.youtube.com/@rpcassembly4969"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                                onClick={closeMenu}
                            >
                                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                                Watch Live
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MobileNav;