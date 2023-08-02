import { Link, useRouteError } from "react-router-dom";
import error_image from  '../assets/images/errors/not-found.svg';
type RouteError = {
    status: string
}
export const Error  = () =>{
    const error:RouteError = useRouteError();
    if(error.status == '404'){
        return(
            <div className="flex flex-col w-full items-center justify-center h-full gap-5">
                <img src={error_image} alt="Error image" className="w-[800px] h-[400px]"/>
                <h1>Page not found</h1>
                <p className="text-xl">we can't find the page that you're looking for</p>
                <Link to={'/'} className="btn p-5" >Back home</Link>
            </div>
        );

    }
}