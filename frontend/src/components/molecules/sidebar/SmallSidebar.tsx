import { useDashboardContext } from "../../../pages/dashboard/DashboardLayout";
import { AiOutlineClose } from "react-icons/ai";
import { Logo } from "../..";
import { NavLinks } from "../..";
export const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <div
      className={`flex items-center justify-center w-full h-full absolute top-0 bottom-0 transition-all 
      ${
        showSidebar ? "visible opacity-100" : "invisible opacity-0"
      } block md:hidden`}
    >
      <div
        className="flex inset-0 bg-black bg-opacity-90 fixed w-full"
        onClick={toggleSidebar}
      ></div>
      <div className="flex flex-col items-center  bg-white  dark:bg-gray-800 w-[80%] z-20 relative p-10 gap-12 ">
        <button onClick={toggleSidebar} className="absolute top-0 right-0 m-2">
          <AiOutlineClose className="text-4xl text-red-800 " />
        </button>
        <Logo />
        <NavLinks isBigSidebar={false}/>
      </div>
    </div>
  );
};
