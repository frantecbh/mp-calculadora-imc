
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends ComponentProps<'input'>{
  className?: string
}

export const Input = ({className, ...rest}: InputProps) => {
  return (
    <div className={twMerge('group  h-12 border rounded-xl px-4 flex items-center gap-2 ', className)} >
     
      <input 
        className={twMerge('flex-1 outline-0 placeholder:text-gray-400', className)}
    {...rest} />
    </div>
   
  )
}
