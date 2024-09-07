import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="bg-[#111214] text-white pt-3 pb-1 px-4 flex justify-between items-center">
      <div className="logo flex justify-center items-center">
        <Link to={"/Recipe-Finder/"}>
          <img
            src="./logo.png"
            alt="Logo"
            className="h-10 w-auto md:h-12 lg:h-14" // Responsive logo size
          />
        </Link>
      </div>
      <div className="btns text-[18px] md:text-[20px] lg:text-[25px] mb-2">
        {user ? (
          <div className="flex justify-center items-center gap-8">
            <Link to={"/Recipe-Finder/profile"}>
              <FaRegUserCircle className="text-4xl hover:scale-125 transition-all duration-300" />
            </Link>

            <button
              className="px-4 py-2 bg-[#E53E3E] text-white rounded-md hover:bg-[#C53030] transition duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
            <Link to={"/Recipe-Finder/login"} className="hover:underline">
              Login
            </Link>
            <Link to={"/Recipe-Finder/signup"} className="hover:underline">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
