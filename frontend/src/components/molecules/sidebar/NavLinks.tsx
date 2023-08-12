import { NavLink } from "react-router-dom"
import { links } from "../../../utils/links"
import { useDashboardContext } from "../../../pages/DashboardLayout"

export const NavLinks = () => {
    const {toggleSidebar} = useDashboardContext();
  return (
    <section className="flex flex-col gap-4 h-full">
    {links.map((link) => (
      <NavLink
        to={link.path}
        key={link.text}
        onClick={toggleSidebar}
        className={({isActive})=>`flex gap-4 capitalize text-sky-950 text-2xl hover:text-principal transition-colors ${isActive?'text-principal' : 'text-sky-950'}`}  
        end
      >
        <span>{link.icon}</span>
        {link.text}
      </NavLink>
    ))}
  </section>
  )
}
