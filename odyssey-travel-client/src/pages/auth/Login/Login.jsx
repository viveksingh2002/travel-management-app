import React, { useEffect, useState } from "react";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";


import sideImg from "../../../assets/images/login-bg.jpg";
import ToggleRoleButton from "../../../components/ToggleRoleButton/ToggleRoleButton";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";

export default function Login({ isOpen, setIsOpen }) {
  const [isMounted, setIsMounted] = useState(false);
  const [role, setRole] = useState("customer");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [form, setForm] = useState({ email: "", password: "" });

  // Smooth mount/unmount
  useEffect(() => {
    if (isOpen) setIsMounted(true);
    else {
      const t = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!isMounted) return null;

  const handleInput = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitLogin = () => {
    alert("Login Submitted!");
    console.log(form, role);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[999]">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Box */}
      <div
        className={`relative w-[1100px] h-[650px] bg-white rounded-xl shadow-2xl flex overflow-hidden z-[1000] transition-all duration-300 ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
      >
        {/* Close */}
        <button
          className="absolute top-6 right-6 text-gray-600 hover:text-black transition"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faCircleXmark} size="lg" />
        </button>

        {/* Left Image */}
        <div className="w-1/2 h-full">
          <img src={sideImg} alt="Login" className="w-full h-full object-cover" />
        </div>

        {/* Right Login Area */}
        <div className="w-1/2 px-16 py-10 overflow-y-auto">

          {/* Title */}
          <h1 className="text-4xl text-center font-extrabold mb-10">
            Login to your account
          </h1>

          {/* Role Toggle */}
          <ToggleRoleButton role={role} setRole={setRole} />

          {/* Email */}
          <div className="mb-6">
            <label className="text-gray-600 text-sm">Email Address*</label>
            <div className="flex items-center border-b border-gray-400 mt-1">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-3" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInput}
                className="w-full outline-none py-2 text-lg"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="text-gray-600 text-sm">Password*</label>
            <div className="relative flex items-center border-b border-gray-400 mt-1">
              <FontAwesomeIcon icon={faLock} className="text-gray-500 mr-3" />
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleInput}
                className="w-full outline-none py-2 text-lg"
                placeholder="Enter your password"
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="absolute right-3 text-gray-500 cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={submitLogin}
            className="w-[25%] bg-red-600 text-white text-xl font-semibold py-3 mx-auto block rounded-full hover:bg-red-700 transition"
          >
            Login
          </button>

          {/* Links */}
          <div className="my-5 text-center text-gray-500 text-sm">
            <p className="cursor-pointer hover:underline">
              Forgot your password?
            </p>
            <p className="cursor-pointer mt-1 hover:underline">
              Don’t have an account? Sign Up
            </p>
          </div>

          {/* Social Login */}
          <SocialLogin />

        </div>
      </div>
    </div>
  );
}
