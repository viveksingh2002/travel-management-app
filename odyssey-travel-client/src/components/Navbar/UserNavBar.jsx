import React from "react";
import { Link } from "react-router-dom";

function UserNavBar() {
  return (
    <div className="d-flex">
      <div
        className="border-end bg-light p-3 d-flex flex-column"
        style={{ width: "240px", minHeight: "100vh" }}
      >
        {/* Odyssey */}
        <h4 className="fw-bold text-dark mb-4">Odyssey</h4>

        {/* Vertical Navbar */}
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link className="nav-link text-dark" to="/dashboard">Dashboard</Link>
          </li>

          <li className="nav-item mb-2">
            <Link className="nav-link text-dark" to="/add-edit">Add/Edit Package</Link>
          </li>

          <li className="nav-item mb-2">
            <Link className="nav-link text-dark" to="/packages">My Packages</Link>
          </li>

          <li className="nav-item mb-2">
            <Link className="nav-link text-dark" to="/bookings">Bookings Overview</Link>
          </li>

          <li className="nav-item mb-2">
            <Link className="nav-link text-dark" to="/tickets">Support Tickets</Link>
          </li>

          <li className="nav-item mb-2">
            <Link className="nav-link text-dark" to="/bot">Bot Chat</Link>
          </li>

          <li className="nav-item mb-2">
            <Link className="nav-link text-dark" to="/logout">Logout</Link>
          </li>
        </ul>
      </div>

     
      <div className="flex-grow-1">

        {/* Horizontal Navbar */}
        <nav className="navbar navbar-expand-lg bg-white border-bottom px-4">
          <ul className="navbar-nav mx-auto d-flex flex-row gap-4">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/home">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default UserNavBar;
