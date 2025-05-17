// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Forgot from "./pages/authentication/Forgot";
// import LoginPage from "./pages/authentication/LoginPage";
// import Signup from "./pages/authentication/Signup";
// import QRCodeCreationPage from "./pages/Home/QRCodeCreationPage";
// import LandingPage from "./pages/landingpage/LandingPage";
// import Topnavbar from "./components/Topnavbar";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               {/* <Topnavbar /> */}
//               <LandingPage />
//             </>
//           }
//         />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/forgot" element={<Forgot />} />
//         <Route path="/create-qrcode" element={<QRCodeCreationPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";

// Dashboard components
import QrCodeList from "./components/dashboard/QrCodeList";
import QrCodeGenerator from "./components/dashboard/QrCodeGenerator";
import AnalyticsDashboard from "./components/dashboard/AnalyticsDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Dashboard routes */}
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<AnalyticsDashboard />} />
          <Route path="qrcodes" element={<QrCodeList />} />
          <Route path="create" element={<QrCodeGenerator />} />
          <Route path="analytics" element={<AnalyticsDashboard />} />
          {/* Additional dashboard routes would be added here */}
        </Route>

        {/* Redirect to home for any undefined routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;