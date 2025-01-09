import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./ReactRouter/router";
import AuthProvider from "./Components/AuthProvider/AuthProvider";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <div className="w-11/12 mx-auto">
    <RouterProvider router={router} />
    </div>
    </AuthProvider>
  </React.StrictMode>
);
