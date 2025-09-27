'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


const page = () => {
//   -------------------pass  show and  hide----------
      const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  
  //   ------------api fetch------------
  
  const [FromData ,setFromData] = useState({
      
      "email": "",
      "password": "",
      "role": "ADMIN",
      "username": ""
      
    })
    


    // -----------api frtching--------
    const url = 'https://api.freeapi.app/api/v1/users/register';
const options = {
  method: 'POST',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  body: '{"email":"user.email@domain.com","password":"test@123","role":"ADMIN","username":"doejohn"}'
};
    
    // ----------error State-----
    
    const [FromError , setFromError]=useState('')




const handleSub =(e)=>{
 e.preventDefault()
  

 if(!FromData.email || !FromData.password || !FromData.username) return setFromError('kichu bhul ache')




}

  return (
    <>
    
    
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
     <h2 className="text-xl font-semibold text-center text-red-500 mb-6">
         {FromError}
        </h2>
        <form   onSubmit={handleSub} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
            onChange={(e)=>setFromData((prev)=> ({...prev, username:e.target.value}) , setFromError('')) }

              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
            onChange={(e)=>setFromData((prev)=> ({...prev, email:e.target.value}), setFromError(''))}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
            onChange={(e)=>setFromData((prev)=> ({...prev, password:e.target.value}), setFromError(''))}

              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
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

        
          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
          >
            Register
          </button>

          {/* Login Redirect */}
          <p className="text-sm text-center text-gray-600 mt-3">
            Already have an account?{" "}
            <Link href="#" className="text-indigo-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default page