import { cn } from '@/utils';
import React, { HTMLAttributes, useState } from 'react'
interface CustomImageProps extends HTMLAttributes<HTMLImageElement> {
    src: string,
    alt: string;
    className?: string;
    wrapperClassName?: string;
    loading?: 'eager' | 'lazy';
    overlayClassName?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, className, loading, wrapperClassName, overlayClassName, ...props }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    return (
        <div className={cn('relative overflow-hidden w-full h-full', wrapperClassName)}>
            <img
                src={src}
                alt={alt}
                loading={loading}
                onLoad={() => setIsLoading(false)}
                className={cn(
                    'w-full h-full transition-opacity duration-300',
                    isLoading ? 'opacity-0' : 'opacity-100',
                    className
                )}
                {...props}
            />

            {overlayClassName && (
                <div className={cn('absolute inset-0', overlayClassName)} />
            )}

            {isLoading && (
                <div className="absolute inset-0 z-10 animate-pulse-fast bg-gray-200" />
            )}
        </div>
    )
}

export default CustomImage