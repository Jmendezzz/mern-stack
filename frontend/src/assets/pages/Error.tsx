import { Link, useRouteError } from "react-router-dom";
type RouteError = {
    status: string
}
export const Error  = () =>{
    const error:RouteError = useRouteError();

    return(
        <div>
            <h1>Error page</h1>
            <h2>{error.status}</h2>
            <Link to={'/'} >back home</Link>
        </div>
    );

}