import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppNavBar from "./components/AppNavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="md:h-screen">
      <BrowserRouter>
        <ToastContainer />
        <AppNavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              }
            />
            <Route
              path="register"
              exact
              element={
                <Register
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="login"
              exact
              element={
                <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              }
            />
            <Route
              path="forgotPassword"
              exact
              element={<ForgotPassword isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="resetPassword"
              element={<ResetPassword isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="profile"
              exact
              element={
                <Profile
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
