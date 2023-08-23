import landing_image from "../assets/images/layout/main.svg";
import { Link } from "react-router-dom";
export const Landing = () => {
  return (
    <section className="flex p-10 w-full h-auto ">
      <div className="flex w-full  h-[700px] items-center justify-around">
        <div className="flex flex-col gap-10  ">
          <h1 className="font-bold ">
            Job <span className="text-principal">tracking</span> app
          </h1>
          <p className="text-2xl line text-justify max-w-[700px]">
            Are you tired of juggling numerous job applications and feeling
            overwhelmed by the job search process? Look no further Jobify is
            here to transform your job hunting experience into a seamless and
            rewarding journey.
          </p> 
          <div className="flex w-full gap-3  flex-col sm:flex-row ">
            <Link to={'/register'} className="btn w-48 p-3 text-center text-xl">
              Register
            </Link>           
            <Link to={'/login'} className="btn w-48 p-3 text-center text-xl">
              Login
            </Link>           

          </div>
          
        </div>
        <div className="w-auto hidden lg:block ">
          <img src={landing_image} className="h-[700px] w-[600px]" alt="Landing Image" />
        </div>
      </div>
    </section>
  );
};
