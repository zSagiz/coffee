import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import Foryourpleasure from "./pages/Foryourpleasure";
import Ourcoffee from "./pages/Ourcoffee";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Oneourcoffee from "./pages/Oneourcoffee";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    },
    {
      path: "/Foryourpleasure",
      element: <Foryourpleasure></Foryourpleasure>,
    },
    {
      path: "/Ourcoffee",
      element: <Ourcoffee></Ourcoffee>,
    },
    {
      path: "/Ourcoffee/:id",
      element: <Oneourcoffee></Oneourcoffee>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
