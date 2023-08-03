import { Logo } from "..";
type Props = {
    children: JSX.Element
}

export const Wrapper  = ({children} : Props) =>{

    return (
        <section className="w-full flex justify-center">    
            <div className="rounded-lg shadow-xl w-[700px] h-[900px] flex flex-col items center mt-20 border-t-8 border-t-principal pt-7">
                <Logo/>
                {children}
            </div>   
        </section>
    );

}