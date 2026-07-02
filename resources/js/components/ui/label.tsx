import { cn } from '@/utils'
import React, { LabelHTMLAttributes } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    className? : string
}
const Label: React.FC<LabelProps> = ({ className, ...props }) => {
    return (
        <label className={cn('text-sm font-semibold text-deep-navy', className)} {...props} />
  )
}

export default Label