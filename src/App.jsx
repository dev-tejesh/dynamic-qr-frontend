import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forgot from "./pages/authentication/Forgot";
import LoginPage from "./pages/authentication/LoginPage";
import Signup from "./pages/authentication/Signup";
import QRCodeCreationPage from "./pages/Home/QRCodeCreationPage";
import LandingPage from "./pages/landingpage/LandingPage";
import Topnavbar from "./components/Topnavbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Topnavbar /> */}
              <LandingPage />
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/create-qrcode" element={<QRCodeCreationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
