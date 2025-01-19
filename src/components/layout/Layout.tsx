import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer.'

interface LayoutProps {
  children: ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen flex flex-1 flex-col  font-Montserrat'>
      <Header />
      <div className=' flex flex-col items-center flex-1'>
        <main className='flex flex-1 w-full  max-w-96'>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}