import { useDashboardContext } from "../../../pages/DashboardLayout"
import {AiOutlineClose} from 'react-icons/ai';
import { Logo } from "../..";
import { links } from "../../../utils/links";
import { NavLink } from "react-router-dom";


export const SmallSidebar = () => {
  const {showSidebar, toggleSidebar} = useDashboardContext();
  return (
    <div className={`flex items-center justify-center w-full h-full absolute top-0 bottom-0 ${showSidebar ? 'block' : 'hidden'} block md:hidden`}>
      <div className="bg-black opacity-90 h-full w-full absolute"></div>
      <div className="flex flex-col items-center bg-white h-[90%] w-[80%] z-20 relative p-10 gap-12">
        <button onClick={toggleSidebar} className="absolute top-0 right-0 m-5">
          <AiOutlineClose className="text-4xl text-red-800 "/>
        </button>
        <Logo />
        <section className="flex flex-col gap-4 ">
          {links.map(link =>(
            <NavLink to={link.path} key={link.text} className='flex gap-4 capitalize text-sky-950 text-2xl hover:text-principal transition-colors'>
              <span>{link.icon}</span>
              {link.text}
            </NavLink>
          ))}
        </section>
      </div>
    </div>
  )
}
