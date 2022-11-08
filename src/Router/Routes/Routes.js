import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import Checkout from "../../pages/Checkout/Checkout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";

import Login from "../../pages/Login/Login";

import Orders from "../../pages/Orders/Orders";
import ServiceAllLoader from "../../pages/Services/ServiceAllLoader";
import ServiceCardDetails from "../../pages/Services/ServiceCardDetails";


import SignUp from "../../pages/SignUp/SignUp";

// import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <ServiceCardDetails></ServiceCardDetails>,
      },
      {
        path: "/servicesAll/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/servicesAll/${params.id}`),
        element: <ServiceAllLoader></ServiceAllLoader>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout/:id",
        // loader: ({ params }) =>
        //   fetch(
        //     `https://m-67-genius-car-server-nafisamou.vercel.app/services/${params.id}`
        //   ),
        element: (
          <Checkout></Checkout>
          //   <PrivateRoute>
          //   </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <Orders></Orders>
          //   <PrivateRoute>
          //   </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
