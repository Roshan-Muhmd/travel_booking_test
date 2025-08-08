import React, { useRef } from "react";
import Card from "../components/ui/Card";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const { isAuthenticated, handleLogin } = useAuth();
  const formRef = useRef(null);

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <Card
      customstyle={
        "bg-white mx-auto my-32 p-8 rounded-lg shadow-lg w-full max-w-sm"
      }
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Login
      </h2>
      <form ref={formRef} className="space-y-4">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        {/* Remember Me */}
        {/* <div className="flex items-center justify-between">
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              className="mr-2 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            Remember me
          </label>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div> */}
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onClick={() => {
            const formData = new FormData(formRef.current);
            const data = Object.fromEntries(formData.entries());
            handleLogin(data)
          }}
        >
          Login
        </button>
      </form>
      {/* Signup Link */}
      {/* <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?
        <a href="#" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p> */}
    </Card>
  );
};

export default LoginPage;
