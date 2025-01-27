import React from "react";
import logo from "../../../../assets/icons/logo.png";
import google from "../../../../assets/icons/Group 573.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import userAuth from "../../../AuthProvider/userAuth";
import { toast } from "react-toastify";
import { saveUser } from "../../../Utilit/Utilite";

const Login = () => {
  const location = useLocation()
  const {signInUser,googleSignUp} = userAuth()
  const navigate = useNavigate()
  const handleSignInUser = async(e) =>{
    e.preventDefault()
   const form = e.target
   const email = form.email.value;
   const password = form.password.value;
   const signInData = {
    email,password
   }
   console.log(signInData)
   try{
    await signInUser(email, password)
    toast.success('Sign In User')
    const redirectPath = location?.state ? location?.state : "/"
    navigate(redirectPath)
   }catch(err){
    toast.error(err.message)
   }
  }
  const handleSignInGoogle =async () =>{
    try{
     const data = await googleSignUp()
     await saveUser(data?.user)
      toast.success('Google SignIn User')
      const redirectPath = location?.state ? location?.state : "/"
      navigate(redirectPath)
    }catch(err){
      toast.error(err.message)
    }
  }
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center ">
      <div className="w-full max-w-md p-8 bg-white  rounded-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img className="h-16" src={logo} alt="Logo" />
        </div>

        {/* Google Login */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold text-black mb-4">
            Login With
          </h1>
          <button onClick={handleSignInGoogle}
            className="flex items-center justify-center w-full text-black bg-white border rounded-full py-2 hover:shadow-lg transition"
            
          >
            <img className="w-6 mr-3" src={google} alt="Google" />
            <span className="font-medium">Continue With Google</span>
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSignInUser} className="space-y-4">
          {/* Email Input */}
          <div className="form-control">
            <label className="block text-black text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-[#F63E7B] rounded-full border focus:outline-none focus:ring focus:ring-[#F63E7B]"
              required
            />
          </div>

          {/* Password Input */}
          <div className="form-control">
            <label className="block text-black text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-full border-[#F63E7B] border focus:outline-none focus:ring focus:ring-[#F63E7B]"
              required
            />
            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm text-black hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-4">
            <button className="w-full bg-white text-black border-2 rounded-full py-2  hover:bg-[#F63E7B] hover:text-white transition">
              Login
            </button>
          </div>
        </form>

        {/* Sign Up Redirect */}
        <p className="text-center text-sm text-black mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#F63E7B] hover:border-b-2 font-medium hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
