import { Button } from '@/components/ui/button';
import { navLinks } from '@/types/data';
import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    const { url } = usePage();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <nav className='hidden md:flex items-center'>
            <ul className='flex gap-x-6'>
                {navLinks.map((item, index) => {
                    const hasChildren = item.children && item.children.length > 0;
                    const isActive = !hasChildren && url === item.href;
                    const isDropdownOpen = openDropdown === item.title;

                    return (
                        <li key={item.title} className="relative">
                            {hasChildren ? (
                                <div className="relative">
                                    <div className="flex items-center gap-1">
                                        <Link
                                            href={item.href}
                                            style={{ animationDelay: `${index * 75}ms` }}
                                            className={`text-lg font-medium relative py-1 text-nowrap transition-all duration-300 block group animate-[fadeInDown_0.4s_both] ${
                                                url === item.href
                                                    ? 'text-purple-200 drop-shadow-[0_0_10px_rgba(233,213,255,0.6)]'
                                                    : 'text-white/70 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]'
                                            }`}
                                        >
                                            {item.title}
                                            <span
                                                className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ease-out origin-center ${
                                                    url === item.href
                                                        ? 'w-full left-0 shadow-[0_0_8px_#c084fc]'
                                                        : 'w-0 left-1/2 group-hover:w-full group-hover:left-0'
                                                }`}
                                            />
                                        </Link>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenDropdown(isDropdownOpen ? null : item.title);
                                            }}
                                            className={`text-white/70 hover:text-white transition-colors duration-300 ${isDropdownOpen ? 'text-purple-200' : ''}`}
                                        >
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                    </div>

                                    {isDropdownOpen && (
                                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl overflow-hidden z-50 animate-[fadeInDown_0.2s_ease-out]">
                                            {item.children?.map((child) => (
                                                <Link
                                                    key={child.title}
                                                    href={child.href || '#'}
                                                    className="block px-4 py-3 text-deep-navy hover:bg-warm-cream hover:text-royal-purple transition-colors font-medium"
                                                    onClick={() => setOpenDropdown(null)}
                                                >
                                                    {child.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    style={{ animationDelay: `${index * 75}ms` }}
                                    className={`text-lg font-medium relative py-1 text-nowrap transition-all duration-300 block group animate-[fadeInDown_0.4s_both] ${
                                        isActive
                                            ? 'text-purple-200 drop-shadow-[0_0_10px_rgba(233,213,255,0.6)]'
                                            : 'text-white/70 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]'
                                    }`}
                                >
                                    {item.title}
                                    <span
                                        className={`absolute bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ease-out origin-center ${
                                            isActive
                                                ? 'w-full left-0 shadow-[0_0_8px_#c084fc]'
                                                : 'w-0 left-1/2 group-hover:w-full group-hover:left-0'
                                        }`}
                                    />
                                </Link>
                            )}
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
                    <a
                        href="https://www.youtube.com/@rpcassembly4969"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                        Watch Live
                    </a>
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
