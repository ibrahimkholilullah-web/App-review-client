import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from "../../../../assets/icons/Group 573.png"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import userAuth from '../../../AuthProvider/userAuth';
import { toast } from 'react-toastify';
import Navber from '../Navber';
const SignUp = () => {
    const [passwordIcon, setPassswordIcon] = useState(false)
    const {createUser,googleSignUp,updateSignleUser} = userAuth()
    const navigate = useNavigate()
    const handleCreateAccount = async (e) =>{
        e.preventDefault()
        const from = e.target 
        const name = from.fristName.value + ' ' + from.lastName.value
        const email = from.email.value
        const password = from.password.value
        const userCreateData = {
            name,email,password
        }
       console.log(userCreateData)
       try{
      const result = await  createUser(email, password)
      await updateSignleUser(name)

        toast.success('Successfully Create User')
        navigate('/')
       }catch (err){
        toast.error(err.message)
       }
    }
     const handleSignInGoogle =async () =>{
        try{
          await googleSignUp()
          toast.success('Google SignIn User')
          navigate('/')
        }catch(err){
          toast.error(err.message)
        }
      }
    return (
       
    <div>
        <Navber></Navber>
        <div className="min-h-screen flex items-center justify-center md:pt-4">
      <div className="bg-white p-8 rounded-lg shadow-lg md:w-4/12">
        <h2 className="text-2xl font-bold mb-4 text-left">Create an account</h2>
        <form onSubmit={handleCreateAccount}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name='fristName'
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
               name='lastName'
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username or Email</label>
            <input
              type="email"
               name='email'
              placeholder="Username or Email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
         
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700"> Password</label>
            <input
              type={passwordIcon ? 'text' : 'password'}
              placeholder="Confirm Password"
              name='password'
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className=' absolute top-8 right-3 ' onClick={() => setPassswordIcon(!passwordIcon)} type='button'>
                {passwordIcon ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black border border-[#F63E7B] py-2 rounded-lg hover:bg-pink-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Create an account
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to='/login' className="text-pink-500 hover:underline">
            Login
          </Link>
        </p>
        <div className="flex items-center justify-between my-4">
          <hr className="w-1/3 border-gray-300" />
          <span className="text-sm text-gray-500">Or</span>
          <hr className="w-1/3 border-gray-300" />
        </div>
         <button onClick={handleSignInGoogle}
        className="flex items-center justify-center w-full text-black bg-white border rounded-full py-2 hover:shadow-lg transition"
      >
        <img className="w-6 mr-3" src={google} alt="Google" />
        <span className="font-medium">Continue With Google</span>
      </button>
       
      </div>
    </div>
    </div>
  

    );
};

export default SignUp;