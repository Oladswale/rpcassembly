import { Button } from '@/components/ui/button';
import { navLinks } from '@/types/data';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';

const Navbar = () => {
    const { url } = usePage();

    return (
        <nav className='hidden md:flex items-center'>
            <ul className='flex gap-x-6'>
                {navLinks.map(({ title, href }, index) => {
                    const isActive = url === href;
                    
                    return (
                        <li key={title}>
                            <Link 
                                href={href}
                                style={{ animationDelay: `${index * 75}ms` }}
                                className={`text-lg font-medium relative py-1 text-nowrap transition-all duration-300 block group animate-[fadeInDown_0.4s_both] ${
                                    isActive 
                                        ? 'text-purple-200 drop-shadow-[0_0_10px_rgba(233,213,255,0.6)]' 
                                        : 'text-white/70 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]'
                                }`}
                            >
                                {title}
                                <span 
                                    className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ease-out origin-center ${
                                        isActive 
                                            ? 'w-full left-0 shadow-[0_0_8px_#c084fc]' 
                                            : 'w-0 left-1/2 group-hover:w-full group-hover:left-0'
                                    }`}
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <div className="relative ml-8 group hidden lg:block ">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-md blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-[pulse_2s_infinite]" />
                
                <Button 
                    asChild 
                    className="relative bg-red-600 text-white hover:bg-red-500 font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                >
                    <Link href="/sermons" className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                        Watch Live
                    </Link>
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
