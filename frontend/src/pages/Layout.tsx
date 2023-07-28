import { Outlet } from "react-router-dom";

export const Layout = ()=>{
    return (
        <div>
            <nav>
                Navbrar
            </nav>
            <Outlet/>
        </div>
    );
}