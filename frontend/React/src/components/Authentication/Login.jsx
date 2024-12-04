import React, { useState } from "react";

const Login = () => {
  const [darkMode, setDarkMode] = useState(true); // State to track the theme

  return (
    <div className={`flex min-h-screen items-center justify-center ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className={`w-full max-w-md ${darkMode ? "bg-gray-800" : "bg-gray-200"} rounded-lg shadow-lg p-8`}>
        {/* Theme Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setDarkMode(!darkMode)} // Toggle darkMode state
            className={`py-1 px-3 rounded ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        {/* Login Form */}
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              className={`w-full p-2 rounded ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`}
              placeholder="example@example.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              className={`w-full p-2 rounded ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`}
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className={`w-full p-2 rounded mt-4 ${darkMode ? "bg-blue-600 text-white" : "bg-blue-500 text-white"}`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
