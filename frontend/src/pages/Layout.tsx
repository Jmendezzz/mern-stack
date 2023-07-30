import { Outlet } from "react-router-dom";
import logo from "../assets/images/layout/logo.svg"

export const Layout = ()=>{
    return (
        <main className='h-full'>
            <nav className="p-10">
                <img src={logo} alt="Jobify Logo" className="h-20" />
            </nav>
            <Outlet/>
        </main>
    );
}