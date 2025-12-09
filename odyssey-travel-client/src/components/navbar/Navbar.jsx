import LightDarkButton from "../LightDarkButton/LightDarkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Login from '../../pages/auth/Login/Login.jsx';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const navLinks = [
        { name: "Home", href: "/", active: true },
        { name: "Packages", href: "/packages", active: false },
        { name: "Services", href: "/services", active: false },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 shadow-sm px-4 h-[80px] z-50">
            <nav className="max-w-[85rem] mx-auto px-4 py-3 flex items-center justify-between">
                {/* LEFT - LOGO */}
                <a
                    href="/"
                    className="flex items-center text-3xl font-bold dark:text-white"
                >
                    <img
                        className="w-[55px] h-auto"
                        src="/images/odyssey_logo.png"
                        alt="Logo"
                    />
                    <span>Odyssey</span>
                </a>

                {/* CENTER - MENU (Always Visible) */}
                <div className="hidden sm:flex items-center gap-x-8 ">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-medium transition ${link.active
                                ? "text-blue-500"
                                : "text-gray-700 hover:text-gray-500 dark:text-neutral-300 dark:hover:text-neutral-100"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* RIGHT - TOGGLE + THEME BUTTON + LOGIN */}
                <div className="flex items-center gap-4">
                    {/* Mobile Toggle (Always Visible) */}
                    <button
                        className="sm:hidden text-gray-700 dark:text-white text-xl"
                        onClick={() => setOpen(!open)}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    <LightDarkButton />

                    <button
                        type="button"
                        className="py-2 px-4 rounded-lg bg-blue-600 text-white 
            hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
                        onClick={() => setShowLogin(true)}
                    >
                        Login
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            {open && (
                <div className="sm:hidden px-4 pb-4">
                    <div className="flex flex-col gap-4 mt-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-medium ${link.active
                                    ? "text-blue-500"
                                    : "text-gray-700 dark:text-neutral-300"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
            {/* Login Popup */}
            {showLogin && <Login isOpen={showLogin} setIsOpen={setShowLogin} />}
        </header>
    );
}

export default Navbar;
