import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./Styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Profile from "./Pages/Profile.jsx";
import Recipes from "./Pages/Recipes.jsx";
import SingleRecipe from "./Pages/SingleRecipe.jsx";

const router = createBrowserRouter([
  {
    path: "/Recipe-Finder",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "singlerecipe/:id",
        element: <SingleRecipe />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
