'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [FromData ,setFromData] = useState({
      email: "",
      password: "",
      role: "ADMIN",
      username: ""
  });

  const url = 'https://api.freeapi.app/api/v1/users/register';
  const options = {
    method: 'POST',
    headers: {accept: 'application/json', 'content-type': 'application/json'},
    body: JSON.stringify(FromData)
  };

  const [FromError , setFromError]=useState('')

  const handleSub  = async(e)=>{
    e.preventDefault()
    
    if(!FromData.email || !FromData.password ) 
      return setFromError('kichu bhul ache')

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if(data.message  === 'Users registered successfully and verification email has been sent on your email.'){
        toast.success('login Successfull ', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
      }

      if(data.message  === 'Received data is not valid'){
        toast.success('login Successfull', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
      }



      console.log(data)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
     {/* Background gradient changed here */}
     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Login 
        </h2>
        <h2 className="text-xl font-semibold text-center text-red-500 mb-6">
         {FromError}
        </h2>
        <form onSubmit={handleSub} className="space-y-4">


          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              onChange={(e)=>setFromData((prev)=> ({...prev, email:e.target.value}))}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              onChange={(e)=>setFromData((prev)=> ({...prev, password:e.target.value}))}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span
              className="absolute right-3 top-9 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </span>
          </div>

          {/* Register Button - color changed */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
          >
           Login
          </button>

          {/* Login Redirect */}
          <p className="text-sm text-center text-gray-600 mt-3">
            Don't Have Any Account{" "}
            <Link href="#" className="text-blue-500 hover:underline">
            Register Here
            </Link>
          </p>
        </form>
      </div>
    </div>

    {/* Toast container must be here */}
    <ToastContainer />
    </>
  )
}

export default page
