import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import { useDashboardContext } from "../../pages/dashboard/DashboardLayout";

export const LogoutContainer = () => {
    const [showLogout, setShowLogout] = useState(true);
    const {user, logoutUser} = useDashboardContext();
  return( 
    <div className="text-white relative">
        <button className="bg-principal px-4 py-2 rounded-lg shadow-lg flex items-center justify-around gap-5" onClick={()=> setShowLogout(prev=>!prev)}>
        <FaUserCircle />
        {user?.name}
        <FaCaretDown />
        </button>
        <div className={`flex items-center justify-center rounded-lg absolute top-16 left-0 w-full transition-all bg-principal shadow-xl ${showLogout ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <button className="w-full h-full p-4" onClick={logoutUser}>Logout</button>

        </div>
    </div>
  )
  
}
