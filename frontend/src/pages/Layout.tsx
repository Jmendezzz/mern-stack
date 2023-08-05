import { Outlet } from "react-router-dom";
import { Logo } from "../components";

export const Layout = ()=>{
    return (
        <main >
            <nav className="p-10 w-full flex justify-start">
                <Logo/>
            </nav>
            <Outlet/>
        </main>
    );
}