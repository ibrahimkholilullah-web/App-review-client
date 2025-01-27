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
import ContactUs from "../Components/Home/Navber/Path/ContactUs";
import AllServices from "../Components/Home/Navber/Path/AllServices";
import OurTeam from "../Components/Team/OurTeam";
import AddServiceForm from "../Components/User/Dashboard/Admin/AddServices";
import MakeAdmin from "../Components/User/Dashboard/Admin/MakeAdmin";
import ManageServices from "../Components/User/Dashboard/Admin/ManageServices";
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";
import PrivatedRouter from "../Components/Privatedrout/PrivatedRouter";
import Error from "../Components/Error/Error";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/contact',
          element: <ContactUs></ContactUs>
        },
        {
          path: "/services",
          element: <AllServices></AllServices>
        },
        {
          path:'/ourTeam',
          element: <PrivatedRouter><OurTeam></OurTeam></PrivatedRouter>
        },
        {
          path:'/updateProfile',
          element: <UpdateProfile></UpdateProfile>
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
      errorElement: <Error></Error>,
      children: [
        {
          path:'book',
          element:<PrivatedRouter><Book></Book></PrivatedRouter>
        },
        {
          path:'bookingList',
          element: <PrivatedRouter><Bookinglist></Bookinglist></PrivatedRouter>
        },
        {
          path:'reviewForm',
          element:<PrivatedRouter> <ReviewForm></ReviewForm></PrivatedRouter>
        },
        {
          path:'orderList',
          element: <PrivatedRouter><OrderList></OrderList></PrivatedRouter>
        },
        {
          path: "addservices",
          element: <PrivatedRouter><AddServiceForm></AddServiceForm></PrivatedRouter>
        },
        {
          path:'makeadmin',
          element: <PrivatedRouter><MakeAdmin></MakeAdmin></PrivatedRouter>
        }, 
        {
          path:'manageservice',
          element: <PrivatedRouter><ManageServices></ManageServices></PrivatedRouter>
        }
      ]
    }
  ]);
