import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row justify-between">
      <img
        src="./login-dec.png"
        alt="Decoration"
        className="absolute hidden lg:block"
      />

      {/* Text Section */}
      <div className="text w-full lg:w-2/3 flex justify-center items-center p-4 lg:p-0">
        <div className="form flex flex-col gap-8 md:gap-12 items-center w-full">
          <h1 className="text-[30px] md:text-[40px] font-semibold text-center">
            Sign Up
          </h1>

          <h1 className="font-bold text-3xl px-12 ">
            This Website uses Fake APi For Learning So Specific Users Only We
            cont add more Users
          </h1>

          <a href="https://dummyjson.com/users" target="_blank" className="font-bold hover:underline">
            Click Here To see Available users
          </a>
          <button className="py-4 bg-[#EBC76B] text-black font-semibold rounded-[15px] text-[24px] md:text-[30px] mt-8 md:mt-12 w-full md:w-[500px] lg:w-[670px]">
            Sign Up
          </button>

          {/* "Or" Section */}
          <div className="or border-black border w-full md:w-[500px] lg:w-[670px] relative my-4">
            <span className="bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2">
              Or
            </span>
          </div>

          {/* Sign Up Link */}
          <Link
            className="text-[24px] md:text-[30px] font-bold hover:underline"
            to={"/Recipe-Finder/login"}
          >
            Log In
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="img w-full lg:w-1/3 bg-[url('./login-back.png')] min-h-[300px] lg:min-h-screen bg-cover hidden lg:block"></div>
    </div>
  );
};

export default Signup;
