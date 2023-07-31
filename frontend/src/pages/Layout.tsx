import { Outlet } from "react-router-dom";
import { Logo } from "../components";

export const Layout = ()=>{
    return (
        <main className='h-full'>
            <nav className="p-10">
                <Logo/>
            </nav>
            <Outlet/>
        </main>
    );
}