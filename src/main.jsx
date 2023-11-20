import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";
import UseStateCourseModule from "./components/CourseModule/UseStateCourseModule.jsx";
import UseEffectCourseModule from "./components/CourseModule/UseEffectCourseModule.jsx";
import Home from "./Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "useState",
        element: <UseStateCourseModule />,
      },
      {
        path: "useEffect",
        element: <UseEffectCourseModule />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
