import { cn } from '@/lib/utils'
import React, { ComponentProps, HTMLAttributes } from 'react'

interface HorizontalProps extends ComponentProps<"div"> {
    className? : string
}

const HorizontalLine : React.FC<HorizontalProps> = ({className, ...props}) => {
  return (
      <div className={cn('h-1 w-10 rounded-xs bg-royal-purple', className)} {...props} />
  )
}

export default HorizontalLine