import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { useContext, useState } from "react";
import { loginUser } from "../API/UserRequests";

const Login = () => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const user = await loginUser(username, password);
    console.log(user);

    if (user && user.token && user.refreshToken) {
      login(user);
    } else {
      alert("Invalid credentials");
    }
  };

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
            LOG IN
          </h1>

          {/* Username Input */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-5 py-4 md:py-6 bg-[#E3E3E3] placeholder:text-black text-black font-semibold w-full md:w-[500px] lg:w-[670px] rounded-[15px]"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-5 py-4 md:py-6 bg-[#E3E3E3] placeholder:text-black text-black font-semibold w-full md:w-[500px] lg:w-[670px] rounded-[15px]"
          />

          {/* Login Button */}
          <button
            className="py-4 bg-[#EBC76B] text-black font-semibold rounded-[15px] text-[24px] md:text-[30px] mt-8 md:mt-12 w-full md:w-[500px] lg:w-[670px]"
            onClick={handleLogin}
          >
            LOG IN
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
            to={"/Recipe-Finder/signup"}
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="img w-full lg:w-1/3 bg-[url('/login-back.png')] min-h-[300px] lg:min-h-screen bg-cover hidden lg:block"></div>
    </div>
  );
};

export default Login;
