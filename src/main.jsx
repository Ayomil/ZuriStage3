import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login.jsx";
import ErrorPage from "./ErrorPage.jsx"
import SignUp from "./SignUp.jsx";
import Actual from "./MainPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "SignUp/",
    element: <SignUp />,
  },
  {
    path: "ActualPage/",
    element: <Actual />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
