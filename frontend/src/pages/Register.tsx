import { Link } from "react-router-dom";
import { Wrapper } from "../components";
import { FormRow } from "../components";
export const Register = () => {
  return (
    <Wrapper>
      <form className="w-full p-12 flex flex-col gap-2">
        <h4 className="text-center text-xl font-bold">Register</h4>

        <FormRow name="name" labelText="Name" type="text" />
        <FormRow name="lastName" labelText="Last Name" type="text" />
        <FormRow name="location" labelText="Location" type="text" />
        <FormRow name="email" labelText="Email" type="email" />
        <FormRow name="password" labelText="Password" type="password" />
        <FormRow
          name="comfirmPassword"
          labelText="Comfirm Password"
          type="password"
        />
        <div className="mt-5 flex justify-center flex-col gap-5 ">
          <button
            type="submit"
            className="bg-principal rounded-lg text-white py-3 font-bold"
          >
            Submit
          </button>
          <p className="text-center font-bold">
            Already a member? <Link to={"/login"} className="text-principal">Login</Link>
          </p>
        </div>
      </form>
    </Wrapper>
  );
};
