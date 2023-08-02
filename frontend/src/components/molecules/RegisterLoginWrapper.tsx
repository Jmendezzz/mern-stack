import { Logo } from "..";
type Props = {
    children: JSX.Element
}

export const Wrapper  = ({children} : Props) =>{

    return (
        <section className="rounded-lg shadow-lg w-[500px] h-[700px]">    
            <Logo/>   
            {children}
        </section>
    );

}