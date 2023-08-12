import { NavLinks } from "./NavLinks";
import { Logo } from "../..";
import { useDashboardContext } from "../../../pages/DashboardLayout";
export const BigSidebar = () => {
  const {showSidebar} = useDashboardContext();
  return (
      <section className={`h-full  hidden md:block ${showSidebar ? 'ml-[0px]' :'-ml-[250px]'} w-[250px] transition-all`}>
        <Logo />
        <NavLinks />
      </section>
  )
}
