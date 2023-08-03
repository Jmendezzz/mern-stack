import { Link } from "react-router-dom";
import { Wrapper } from "../components";
export const Register = () =>{
    return (
        <Wrapper>

            <form className="w-full p-24 flex flex-col gap-5 ">
                <label htmlFor="name" >Name</label>
                <input type="text" id="name" name="name" className="border-2 border-input_border rounded-lg py-3 px-2 bg-slate-200"/>

                <button className="bg-principal rounded-lg text-white py-3 font-bold">Submit</button>
                <p className="text-center font-bold">Already a member? <Link to={"/login"} className="text-principal">Login</Link></p>

            </form>

        </Wrapper>
    );
    
}