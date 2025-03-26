import { ComponentProps, ReactNode } from "react"

import { twMerge } from 'tailwind-merge'

interface  ButtonProps extends ComponentProps<'button'> {
  className?: string
}

export const Button = ({className, ...rest}: ButtonProps) => {
  return (
    <button className={twMerge('flex justify-center items-center outline', className)}
    {...rest} />
  )
}
