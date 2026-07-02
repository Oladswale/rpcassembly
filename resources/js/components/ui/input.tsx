import { cn } from '@/utils'
import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className? : string
}
const Input : React.FC<InputProps> = ({className, ...props}) => {
  return (
      <input className={cn('w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none transition-all duration-200 focus:border-royal-purple focus:ring-2', className)} {...props} />
  )
}

export default Input