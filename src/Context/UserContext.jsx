import { createContext } from "react";
import { useLocalStorage } from "react-use";
import PropTypes from "prop-types";
// import { getCurrentUser } from "../API/UserRequests";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("user", null);
  // const [favourites, setVafourites] = useLocalStorage("favs", []);

  const login = (user) => {
    if (user) {
      setUser(user);

      navigate("/Recipe-Finder/");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/Recipe-Finder/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
