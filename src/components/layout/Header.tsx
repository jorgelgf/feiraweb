import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { DrawerApp } from '../drawer/DrawerApp';
import { constants } from './constants';

export const Header = () => {
  return (
    <header className='p-5 border-b-2 border-s-zinc-400 flex justify-between items-center'>
      <nav className='flex items-center bottom-1 '>
        <MdOutlineLocalGroceryStore size={30} data-testid='iconHeader' cursor='pointer' className='hover:text-yellow-500' />
        <span className='font-extrabold text-xl'>{constants.firsText}</span>
        <span className='text-sm pt-1 font-light'>{constants.secondText}</span>
      </nav>
      <nav><DrawerApp /> </nav>
    </header>
  )
}