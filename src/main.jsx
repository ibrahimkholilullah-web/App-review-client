import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./ReactRouter/router";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import { ToastContainer } from "react-toastify";
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
    <div className="">
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    
    </div>
    <ToastContainer></ToastContainer>
    </AuthProvider>
  </React.StrictMode>
);
