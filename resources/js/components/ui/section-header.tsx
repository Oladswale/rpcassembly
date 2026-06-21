import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

interface HeadingProps extends ComponentProps<'h3'> {
    children: React.ReactNode,
    className?: string,
}

export const SectionHeader : React.FC<HeadingProps> = ({ children, className, ...props }) => {
    return (
        <h3 className={cn('text-deep-navy text-base md:text-xl lg:text-2xl font-semibold uppercase', className)} {...props}>
            {children}
        </h3>
    )
}
