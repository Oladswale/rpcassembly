import { navLinks } from '@/data'
import { Link, usePage } from '@inertiajs/react'
import { X } from 'lucide-react'
import React from 'react'

interface MobileNavProp {
    isModalOpen: boolean,
    closeMenu: () => void
}

const MobileNav: React.FC<MobileNavProp> = ({isModalOpen, closeMenu}) => {

    if (!isModalOpen) return null

    const { url } = usePage()
    return (
        <nav className='flex md:hidden fixed inset-0 w-full h-full'>
            <div className='w-[70%] z-20 top-0 bg-primary absolute right-0 h-full pl-4 py-5'>
                <button onClick={closeMenu}>
                    <X size={30} className='text-white cursor-pointer ' />
                </button>
                
                <ul className='space-y-4 mt-2 pl-7 '>
                    {
                        navLinks.map(({ title, href }) => (
                            <li key={title}>
                                <Link href={href} className={`text-lg font-normal ${url === href ? 'text-accent' : 'text-white'}`}>{title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className='absolute inset-0 bg-black/60'></div>
        </nav>
    )
}

export default MobileNav