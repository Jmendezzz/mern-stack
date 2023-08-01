import { Link, useRouteError } from "react-router-dom";
import error_image from  '../assets/images/errors/not-found.svg';
type RouteError = {
    status: string
}
export const Error  = () =>{
    const error:RouteError = useRouteError();
    console.log(error.status);

    if(error.status == '404'){
        return(
            <div className="flex flex-col w-full items-center justify-center h-full gap-5">
                <h1>Page not found</h1>
                <img src={error_image} alt="Error image" />
                <Link to={'/'} className="btn p-5" >Back home</Link>
            </div>
        );

    }
}