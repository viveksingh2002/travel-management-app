import { Link } from "react-router-dom";

function AgentSidebar() {
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
          <Link className="nav-link text-dark" to="/agent/dashboard">Dashboard</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/agent/add-package">Add/Edit Package</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/agent/my-packages">My Packages</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/agent/booking-overview">Bookings Overview</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/agent/support-ticket">Support Tickets</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/bot">ChatBot</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/agent/login">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default AgentSidebar;
