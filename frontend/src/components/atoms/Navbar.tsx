import {FaAlignLeft} from 'react-icons/fa';
import { Logo } from '..';
import { useDashboardContext } from '../../pages/DashboardLayout';

export const Navbar = () => {
  const {toggleSidebar} = useDashboardContext();
  return (
    <nav>
      <ul>
        <li>
          <button onClick={toggleSidebar}>
            <FaAlignLeft />
          </button>
        </li>
        <li>
          <Logo />
        </li>
      </ul>
    </nav>
  )
}
