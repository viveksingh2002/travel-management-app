import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md">

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200">
          Admin Login
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-1">
          Secure Access Panel
        </p>

        <form className="mt-6 space-y-4">

          {/* Email */}
          <div className="border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600 flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Admin Email"
              className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-200"
            />
          </div>

          {/* Password */}
          <div className="border rounded-lg px-3 py-2 dark:bg-gray-700 dark:border-gray-600 flex items-center">
            <FontAwesomeIcon icon={faLock} className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-200"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}


export default AdminLogin