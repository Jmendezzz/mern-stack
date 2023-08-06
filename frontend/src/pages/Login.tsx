import { Wrapper } from "../components";
import { FormRow } from "../components";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <Wrapper>
      <form action="" className="w-full p-12 flex flex-col gap-2">
        <h4 className="text-center text-xl font-bold">Login</h4>
        <FormRow type="email" name="email" labelText="Email" />
        <FormRow type="password" name="password" labelText="Password" />
        <div className="mt-5 flex justify-center flex-col gap-5 ">
          <button
            type="submit"
            className="bg-principal rounded-lg text-white py-3 font-bold"
          >
            Submit
          </button>
          <p className="text-center font-bold">
            Do not have an account? <Link to={"/register"} className="text-principal">Register</Link>
          </p>
        </div>
      </form>
    </Wrapper>
  );
};
