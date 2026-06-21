import { Button } from '@/components/ui/button';
import { navLinks } from '@/types/data';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';

const Navbar = () => {
    const { url } = usePage();

    return (
        <nav className='hidden md:flex items-center'>
            <ul className='flex gap-x-6'>
                {navLinks.map(({ title, href }) => {
                    const isActive = url === href;
                    
                    return (
                        <li key={title}>
                            <Link 
                                href={href}
                                className={`text-lg font-medium group relative transition-colors duration-300 ${
                                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                                }`}
                            >
                                {title}
                                {/* Active Indicator & Hover Underline */}
                                <span 
                                    className={`absolute left-0 -bottom-1 h-0.5 group-hover:w-full bg-white transition-all duration-300 ${
                                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <Button 
                asChild 
                className="ml-8 bg-red-600 text-white hover:bg-red-700 transition-all duration-300 hover:scale-105 hidden xl:flex"
            >
                <Link href="/sermons">
                    Watch Live
                </Link>
            </Button>
        </nav>
    );
};

export default Navbar;