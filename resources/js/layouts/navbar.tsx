import LiveIcon from '@/assets/icons/liveicon'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/data'
import { Link, router, usePage } from '@inertiajs/react'
import React from 'react'

const Navbar = () => {
    const { url } = usePage()

    const navigateToSermonPage = () => {
        router.visit("/sermons")
    }

    return (
        <nav className='hidden md:flex items-center'>
            <ul className='flex gap-x-5'>
                {
                    navLinks.map(({ title, href }) => (
                        <li key={title}>
                            <Link href={href}
                                className='text-lg group font-normal text-white relative text-nowrap'>
                                {title}
                                <span className={`w-0 h-0.75 bg-accent absolute left-0 transition-all duration-400 group-hover:w-full -bottom-1 ${href === url && 'w-full'}`}></span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Button onClick={navigateToSermonPage}
                className='bg-destructive-foreground ml-5 cursor-pointer hover:bg-destructive-foreground/80 text-lg hidden lg:flex'>
                Watch Live
            </Button>
        </nav>
    )
}

export default Navbar