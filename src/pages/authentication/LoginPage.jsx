// import { useState } from "react";
// import { Eye, EyeOff, ArrowLeft } from "lucide-react";
// import { Link } from "react-router-dom"; // Assuming you're using React Router

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     // Simulate API call with timeout
//     try {
//       // Here you would make your actual login API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // For demo purposes only - in production, never handle auth this simply
//       if (email && password) {
//         window.location.href = "/dashboard";
//       } else {
//         throw new Error("Please fill in all fields");
//       }
//     } catch (err) {
//       setError(err.message || "Failed to log in. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <Link
//           to="/"
//           className="flex items-center text-blue-600 mb-8 mx-4 sm:mx-0"
//         >
//           <ArrowLeft className="h-5 w-5 mr-2" />
//           Back to home
//         </Link>
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-blue-700">DynamicQR</h1>
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//           <p className="mt-2 text-sm text-gray-600">
//             Or{" "}
//             <Link
//               to="/signup"
//               className="font-medium text-blue-600 hover:text-blue-500"
//             >
//               create a new account
//             </Link>
//           </p>
//         </div>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           {error && (
//             <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4">
//               <div className="flex">
//                 <div className="ml-3">
//                   <p className="text-sm text-red-700">{error}</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email address
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="you@example.com"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Password
//               </label>
//               <div className="mt-1 relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   autoComplete="current-password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5" aria-hidden="true" />
//                   ) : (
//                     <Eye className="h-5 w-5" aria-hidden="true" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 />
//                 <label
//                   htmlFor="remember-me"
//                   className="ml-2 block text-sm text-gray-900"
//                 >
//                   Remember me
//                 </label>
//               </div>

//               <div className="text-sm">
//                 <Link
//                   to="/forgot-password"
//                   className="font-medium text-blue-600 hover:text-blue-500"
//                 >
//                   Forgot your password?
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
//                   isLoading ? "opacity-70 cursor-not-allowed" : ""
//                 }`}
//               >
//                 {isLoading ? "Signing in..." : "Sign in"}
//               </button>
//             </div>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Or continue with
//                 </span>
//               </div>
//             </div>

//             <div className="mt-6 grid grid-cols-2 gap-3">
//               <div>
//                 <button
//                   type="button"
//                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 >
//                   <span className="sr-only">Sign in with Google</span>
//                   <svg
//                     className="h-5 w-5"
//                     aria-hidden="true"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
//                   </svg>
//                 </button>
//               </div>

//               <div>
//                 <button
//                   type="button"
//                   className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 >
//                   <span className="sr-only">Sign in with Microsoft</span>
//                   <svg
//                     className="h-5 w-5"
//                     aria-hidden="true"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 text-center text-sm text-gray-600">
//         <p>
//           By signing in, you agree to our{" "}
//           <Link
//             to="/terms"
//             className="font-medium text-blue-600 hover:text-blue-500"
//           >
//             Terms of Service
//           </Link>{" "}
//           and{" "}
//           <Link
//             to="/privacy"
//             className="font-medium text-blue-600 hover:text-blue-500"
//           >
//             Privacy Policy
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

import React from "react";
// import { useState } from 'react';

const LoginPage = () => {
  // const [googleLoading, setgoogleLoading] = useState(false);
  const loading = false;
  const googleLoading = false;
  return (
    <div className="h-screen flex flex-col sm:flex-row">
      {/* Image Section */}
      {/* <Snackbar
        message={snackbarMessage}
        type={snackbarType}
        onClose={() => setSnackbarMessage("")} // Clear message on close
      /> */}
      <img
        // src="https://plus.unsplash.com/premium_vector-1682269608279-c30dcfc02e95?q=80&w=1416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-6cd0-61f8-800f-9eca7f5b99b6/raw?se=2025-05-14T18%3A54%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=00000000-0000-0000-0000-000000000000&skoid=30ec2761-8f41-44db-b282-7a0f8809659b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-14T11%3A31%3A53Z&ske=2025-05-15T11%3A31%3A53Z&sks=b&skv=2024-08-04&sig=8S2p19R/jIjOJMfdDw6TFmC3/DyqDLO/ji2aY2dBvls%3D"
        alt="restaurant"
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
            // onClick={() => navigate("/reset")}
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
            // onClick={() => navigate("/signup")}
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
