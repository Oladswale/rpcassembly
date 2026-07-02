import { cn } from '@/utils'
import React, { TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string
}
const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => {
    return (
        <textarea className={cn('w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-royal-purple focus:ring-2  min-h-30', className)} {...props} />
    )
}

export default Textarea
