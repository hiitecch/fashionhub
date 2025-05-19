import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
      if (response.data.success) {
        setToken(response.data.token)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center w-full px-6 py-10 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Overlay to darken background for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative bg-white border border-gray-300 shadow-xl rounded-2xl px-12 py-10 w-full min-w-[60vh] max-w-2xl z-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-6">
            <p className="text-xl font-medium text-gray-800 mb-3">Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-xl w-full px-5 py-4 text-lg border border-gray-400 outline-none focus:ring-2 focus:ring-black"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-8">
            <p className="text-xl font-medium text-gray-800 mb-3">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-xl w-full px-5 py-4 text-lg border border-gray-400 outline-none focus:ring-2 focus:ring-black"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="w-full py-4 text-xl font-semibold rounded-xl text-white bg-black hover:bg-gray-800 transition-all duration-300"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
