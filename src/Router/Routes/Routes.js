import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import Checkout from "../../pages/Checkout/Checkout";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";

import Login from "../../pages/Login/Login";
import Edit from "../../pages/Review/Edit";
import Review from "../../pages/Review/Review";
import AddService from "../../pages/Services/AddService/AddService";

import ServiceAllLoader from "../../pages/Services/ServiceAllLoader";
import ServiceCardDetails from "../../pages/Services/ServiceCardDetails";

import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
          fetch(`https://server-nafisamou.vercel.app/services/${params.id}`),
        element: <ServiceCardDetails></ServiceCardDetails>,
      },
      {
        path: "/services",
        loader: () => fetch("https://server-nafisamou.vercel.app/servicesAll"),
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
        path: "/edit/:id",
        loader: ({ params }) =>
          fetch(`https://server-nafisamou.vercel.app/reviews/${params.id}`),
        element: <Edit></Edit>,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`https://server-nafisamou.vercel.app/services/${params.id}`),
        element: <Checkout></Checkout>,
      },

      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <Review></Review>
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: <AddService></AddService>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
