import React from "react";
import { Link } from "react-router-dom";
import { QrCode } from "lucide-react";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  // Update document title
  React.useEffect(() => {
    document.title = "Sign In | QRforge";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex items-center justify-center">
          <QrCode className="h-10 w-10 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">QRforge</span>
        </Link>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
