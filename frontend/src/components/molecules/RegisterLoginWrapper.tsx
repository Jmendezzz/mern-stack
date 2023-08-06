import { Logo } from "..";
type Props = {
    children: JSX.Element
}

export const Wrapper  = ({children} : Props) =>{

    return (
        <section className="w-full h-auto tall:h-screen flex p-5 justify-center items-center">    
            <div className="rounded-lg shadow-xl w-[600px] flex flex-col items-center border-t-8 border-t-principal pt-5 pb-5">
                <Logo/>
                {children}
            </div>   
        </section>
    );

}