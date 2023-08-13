import { NavLink } from "react-router-dom"
import { links } from "../../../utils/links"
import { useDashboardContext } from "../../../pages/dashboard/DashboardLayout"

type Props = {
  isBigSidebar:boolean

}
export const NavLinks = ({isBigSidebar}:Props) => {
    const {toggleSidebar} = useDashboardContext();
  return (
    <section className="flex flex-col gap-8 h-full">
    {links.map((link) => (
      <NavLink
        to={link.path}
        key={link.text}
        onClick={isBigSidebar ? ()=>{} : toggleSidebar }
        className={({isActive})=>`flex w-full capitalize text-2xl hover:text-principal transition-colors ${isActive?'text-principal' : 'text-sky-950'}`}  
        end
      >
        <span>{link.icon}</span>
        {link.text}
      </NavLink>
    ))}
  </section>
  )
}
