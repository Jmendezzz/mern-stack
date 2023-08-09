import { useDashboardContext } from "../../../pages/DashboardLayout"
import {AiOutlineClose} from 'react-icons/ai';


export const SmallSidebar = () => {
  useDashboardContext();
  return (
    <div className="flex items-center justify-center w-full h-full absolute top-0 bottom-0">
      <div className="bg-black opacity-90 h-full w-full absolute"></div>
      <div className="bg-white h-[90%] w-[80%] z-20 relative">
        <button className="absolute top-0 right-0 m-5">
          <AiOutlineClose className="text-4xl text-red-800 "/>
        </button>


      </div>
    </div>
  )
}
