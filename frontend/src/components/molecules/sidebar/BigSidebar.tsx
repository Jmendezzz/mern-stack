import { NavLinks } from "./NavLinks";
import { Logo } from "../..";
import { useDashboardContext } from "../../../pages/dashboard/DashboardLayout";
export const BigSidebar = () => {
  const {showSidebar} = useDashboardContext();
  return (
      <section className={`h-full  hidden md:block dark:bg-gray-800 dark:border-r-0 ${showSidebar ? 'ml-[0px]' :'-ml-[350px]'} w-[350px] transition-all gap-5 border-r-4`}>

        <div className="flex flex-col gap-10 p-5 w-full">
          <Logo />
          <NavLinks isBigSidebar={true} />

        </div>

      </section>
  )
}
