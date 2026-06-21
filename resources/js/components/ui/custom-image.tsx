import { cn } from '@/utils';
import React, { HTMLAttributes, useState } from 'react'
interface CustomImageProps extends HTMLAttributes<HTMLImageElement> {
    src: string,
    alt: string;
    className?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, className, ...props }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    return (
        <div className='relative overflow-hidden'>
            {isLoading && (
                <div
                    className={`absolute inset-0 animate-pulse-fast bg-gray-200 ${isLoading ? 'opacity-100' : 'opacity-0'}`}
                />
            )}

            <img
                src={src}
                alt={alt}
                onLoad={() => setIsLoading(false)}
                className={cn('transition-opacity duration-300', isLoading ? 'opacity-0' : 'opacity-100', className)}
                {...props}
            />
        </div>
    )
}

export default CustomImage