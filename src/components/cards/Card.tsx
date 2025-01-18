import { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className='border-1 shadow-md w-80 rounded-xl h-100 flex flex-col p-7'>
      {children}
    </div>
  )
}