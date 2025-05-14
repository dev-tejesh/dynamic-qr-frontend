

import React from "react";
import { useNavigate } from "react-router-dom";
// import { useState } from 'react';

const LoginPage = () => {
  // const [googleLoading, setgoogleLoading] = useState(false);
  const loading = false;
  const googleLoading = false;
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col sm:flex-row">
      {/* Image Section */}
      {/* <Snackbar
        message={snackbarMessage}
        type={snackbarType}
        onClose={() => setSnackbarMessage("")} // Clear message on close
      /> */}
      <img
        src="/src/assets/dynamicqr.png"
        alt="Dynamic QR"
        className="hidden sm:block w-full sm:w-1/2 h-1/2 sm:h-full object-cover"
      />

      {/* Form Section */}
      <div className="flex flex-col w-full h-full sm:w-1/2 justify-center items-center p-4 sm:p-8">
        <div className="text-2xl font-bold mb-4">Dynamic QR</div>
        <div className="text-xl font-semibold mb-4">Hello! Welcome</div>

        <form
          className="flex flex-col w-full max-w-sm"
          // onSubmit={handleLogin}
        >
          <label className="block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Email Address"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="rounded p-2 m-2 mx-0 border border-gray-300 placeholder-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <label className="block text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="rounded p-2 m-2 mx-0 border border-gray-300 placeholder-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <div
            className="text-sm font-medium text-slate-700 text-right text-xs hover:cursor-pointer hover:text-blue-600"
            onClick={() => navigate("/forgot")}
          >
            Forgot Password?
          </div>
          <button
            className="h-10 bg-blue-600 text-center m-3 mx-0 rounded text-white flex items-center justify-center"
            // disabled={loading}
            type="submit"
          >
            {loading ? (
              <TailSpin
                height="20"
                width="20"
                color="#fff"
                ariaLabel="loading"
                className="mr-2"
              />
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="text-sm font-medium text-slate-700 text-center">
          Don&apos;t have an account yet?
          <span
            className="cursor-pointer text-blue-600 ml-1"
            onClick={() => navigate("/signup")}
            
          >
            Signup Now
          </span>
          <div className="my-4 text-center text-gray-500">OR</div>
          <button
            className="h-10 bg-blue-600 text-center m-3 mx-0 rounded text-white flex items-center justify-center w-full max-w-sm"
            // onClick={handleGoogleLogin}
            // disabled={googleLoading}
          >
            {googleLoading ? (
              <TailSpin
                height="20"
                width="20"
                color="#fff"
                ariaLabel="loading"
              />
            ) : (
              "Sign in with Google"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
