import { Outlet } from "react-router-dom";
import { BigSidebar, Navbar, SmallSidebar } from "../../components";
import { useState, createContext, useContext } from "react";

const DashboardContext = createContext({
  isDark: false,
  showSidebar: true,
  toggleDarkTheme: () => {},
  toggleSidebar: () => {},
});

export const DashboardLayout = () => {
  //Temp
  const user = {
    name: "Jhon",
  };
  const [isDark, setIsDark] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const toggleDarkTheme = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <DashboardContext.Provider
      value={{ isDark, showSidebar, toggleDarkTheme, toggleSidebar }}
    >
      <section className="flex  ">
        <SmallSidebar />
        <BigSidebar />
        <section className="w-[100%] p-2 flex flex-col">
            <Navbar />
          <div className="p-2">
            <Outlet />
          </div>
        </section>
      </section>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
