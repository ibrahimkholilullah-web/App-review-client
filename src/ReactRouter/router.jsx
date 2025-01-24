import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Home/Navber/Page/Login";
import SignUp from "../Components/Home/Navber/Page/SignUp";
import Dashboard from "../Components/User/Dashboard/Dashboard";
import Book from "../Components/User/UserInfo/Book";
import Bookinglist from "../Components/User/UserInfo/Bookinglist";
import ReviewForm from "../Components/User/UserInfo/ReviewForm ";
import OrderList from "../Components/User/Dashboard/Admin/OrderList";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
       
      ]
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path:'/register',
      element: <SignUp></SignUp>
    },
    {
      path:'/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path:'book',
          element:<Book></Book>
        },
        {
          path:'bookingList',
          element: <Bookinglist></Bookinglist>
        },
        {
          path:'reviewForm',
          element: <ReviewForm></ReviewForm>
        },
        {
          path:'orderList',
          element: <OrderList></OrderList>
        }
      ]
    }
  ]);
