import "./Styles/App.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import { UserProvider } from "./Context/UserContext";
import { FoodProvider } from "./Context/FoodContext";

function App() {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/Recipe-Finder/login" ||
    location.pathname === "/Recipe-Finder/signup";

  return (
    <UserProvider>
      <FoodProvider>
        {/* Conditionally render Header and About */}
        {!hideHeaderFooter && <Header />}
        <Outlet />
        {!hideHeaderFooter && <About />}
      </FoodProvider>
    </UserProvider>
  );
}

export default App;
