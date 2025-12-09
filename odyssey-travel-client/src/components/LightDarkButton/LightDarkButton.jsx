import React, { useState, useEffect } from "react";

import moonIcon from '../../assets/icons/moon-stars.svg'
import sunIcon from '../../assets/icons/sun.svg'

function LightDarkButton() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // console.log("is Dark:--" + isDark);

  useEffect(() => {
    const html = document.documentElement;

    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <label
      htmlFor="themeSwitch"
      className="relative inline-block w-12 h-6 cursor-pointer"
    >
      <input
        id="themeSwitch"
        type="checkbox"
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
        className="sr-only"
      />

      {/* Track */}
      <span
        className={`absolute inset-0 rounded-full transition-colors duration-300 flex items-center px-1 ${isDark ? "bg-blue-600" : "bg-gray-400"
          }`}
      >
      </span>

      {/* Knob */}
      <span
        className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow flex items-center justify-center transition-transform duration-300 ${isDark ? "translate-x-6" : "translate-x-1"
          }`}
      >
        {!isDark && <img
          src={sunIcon}
          alt="sun"
          className="w-4 h-4"
        />}
        {isDark && <img
          src={moonIcon}
          alt="moon"
          className="w-3 h-3 opacity-70"
        />}
      </span>
    </label>
  );
}

export default LightDarkButton;
