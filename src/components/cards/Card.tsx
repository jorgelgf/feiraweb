import { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className='border-2 shadow-xl w-80 rounded-xl flex flex-col pt-4 px-4'>
      {children}
    </div>
  )
}