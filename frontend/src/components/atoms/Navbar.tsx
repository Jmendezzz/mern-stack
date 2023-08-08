import {FaAlignLeft} from 'react-icons/fa';
import { Logo } from '..';
import { useDashboardContext } from '../../pages/DashboardLayout';

export const Navbar = () => {
  const {toggleSidebar} = useDashboardContext();
  return (
    <nav className='w-full p-10'>
      <ul className='flex justify-center items-center'>
        <li className='grow '>
          <button onClick={toggleSidebar}>
            <FaAlignLeft className='text-principal text-4xl' />
          </button>
        </li>
        <li className='block md:hidden'>
          <Logo />
        </li>
        <li className='hidden md:block text-5xl font-bold'>Dashboard</li>
        <li className='grow flex justify-end text-xl font-bold'>
          <p>Logout</p>
        </li>
      </ul>
    </nav>
  )
}
