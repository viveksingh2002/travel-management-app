import { Link } from "react-router-dom";

function UserSidebar() {
  return (
    <div
      className="border-end bg-light d-flex flex-column p-3"
      style={{
        width: "240px",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <h4 className="fw-bold text-primarys mb-4">Odyssey</h4>

      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/user/dashboard">Dashboard</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/user/my-bookings">My Bookings</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/user/browse-packages">Travel Packages</Link>
        </li>

        {/* <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/bookings">Payments</Link>
        </li> */}

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/user/support">Support Tickets</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/bot">ChatBot</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/user/login">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default UserSidebar;
