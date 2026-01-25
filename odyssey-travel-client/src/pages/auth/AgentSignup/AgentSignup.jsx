import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthModal } from "../../../context/AuthModalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import signupImg from "../../../assets/images/login-bg.jpg";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { openLogin } = useAuthModal();


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const goToLogin = () => {
    navigate("/");     // Move to landing
    setTimeout(() => {
      openLogin();     // Open login modal
    }, 100);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-[1100px] h-[650px] bg-white rounded-xl shadow-xl flex overflow-hidden">

        {/* Left Image */}
        <div className="w-1/2 h-full">
          <img
            src={signupImg}
            alt="Signup Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-1/2 px-16 py-10">
          <h1 className="text-4xl font-bold text-center">
            Create your account
          </h1>
          <p className="text-center text-red-600 dark:text-red-400 text-3xl font-bold mt-1 mb-4">
            Agent
          </p>

          <form className="space-y-4">

            {/* First + Last Name */}
            <div className="flex gap-6">
              <div className="w-1/2">
                <label className="text-gray-600 text-sm">First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full border-b border-gray-400 outline-none py-2 text-lg"
                />
              </div>

              <div className="w-1/2">
                <label className="text-gray-600 text-sm">Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full border-b border-gray-400 outline-none py-2 text-lg"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-600 text-sm">Email Address*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="w-full border-b border-gray-400 outline-none py-2 text-lg"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="text-gray-600 text-sm">Password*</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full border-b border-gray-400 outline-none py-2 text-lg"
              />

              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 bottom-3 text-gray-500 cursor-pointer"
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="text-gray-600 text-sm">Confirm Password*</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full border-b border-gray-400 outline-none py-2 text-lg"
              />
            </div>

            {/* Signup Button – smaller width */}
            <div className="flex justify-center">
              <button className="bg-red-600 text-white px-12 py-3 rounded-full text-xl font-semibold hover:bg-red-700 transition" onClick={goToLogin}>
                Sign Up
              </button>
            </div>

          </form>

          {/* Already Have Account */}
          <p className="text-center mt-5 text-gray-500">
            Already have an account?{" "}
            <button
              type="button"
              onClick={goToLogin}
              className="text-red-600 font-medium hover:underline ml-1"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
