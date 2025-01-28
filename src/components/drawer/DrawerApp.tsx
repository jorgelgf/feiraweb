import { MenuIcon, XIcon } from 'lucide-react'
import { DrawerAppModal } from './DrawerApp.modal'
import { DivOpacity } from './DivOpacity'
export const DrawerApp = () => {
  const { setToggleMenu, toggleMenu } = DrawerAppModal()

  return (
    <div >
      {toggleMenu ?
        <MenuIcon className='cursor-pointer' onClick={() => setToggleMenu(!toggleMenu)} /> : (
          <>
            <DivOpacity />
            <div className={`absolute  top-0 right-0 z-30 bg-white w-60 h-screen`}>
              <div className='flex flex-col items-end h-full p-5'>
                <XIcon className=' text-red-600 cursor-pointer' onClick={() => setToggleMenu(!toggleMenu)} />
              </div>
            </div>
          </>)
      }
    </div>
  )
}