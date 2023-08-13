import { Outlet } from "react-router-dom";
import { BigSidebar, Navbar, SmallSidebar } from "../../components";
import { useState, createContext, useContext } from "react";
import { getInitialTheme } from "../../App";

const DashboardContext = createContext({
  user: {
    name: "",
  },
  isDark: false,
  showSidebar: true,
  toggleDarkTheme: () => {},
  toggleSidebar: () => {},
  logoutUser: () => {},
});



export const DashboardLayout = () => {
  //Temp
  const user = {
    name: "Jhon",
  };
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme());
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const toggleDarkTheme = () => {
    const newIsDark = !isDark; 
    setIsDark(newIsDark);  
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("isDark", newIsDark.toString());
  };

  const logoutUser = () => {
    console.log("Loggin Out");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        isDark,
        showSidebar,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <section className="flex h-full  ">
        <SmallSidebar />
        <BigSidebar />
        <section className="w-[100%] flex flex-col">
          <Navbar />
          <div className="p-10">
            <Outlet />
          </div>
        </section>
      </section>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
