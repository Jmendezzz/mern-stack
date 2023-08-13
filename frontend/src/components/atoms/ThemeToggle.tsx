import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';
import { useDashboardContext } from '../../pages/dashboard/DashboardLayout';

export const ThemeToggle = () => {
	const {isDark, toggleDarkTheme} = useDashboardContext();
  return (
    <div className='hover:cursor-pointer text-2xl' onClick={toggleDarkTheme}>
			{isDark ? <BsFillSunFill /> : <BsFillMoonFill />}
		</div>
  )
}
