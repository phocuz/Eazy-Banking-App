import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AppLayout from "./ui/AppLayout";
//import Loader from "./ui/Loader";
import Testing from "./ui/Testing";
import CardPayment from "./Pages/card/CardPayment";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <About />,
      },
      {
        path: "/testing",
        element: <Testing />,
      },
      {
        path: "/payments",
        element: <CardPayment />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
