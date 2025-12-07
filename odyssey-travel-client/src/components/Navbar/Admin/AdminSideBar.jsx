import { Link } from "react-router-dom";

function AdminSidebar() {
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
          <Link className="nav-link text-dark" to="/admin/dashboard">Dashboard</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/admin/user-management">User Management</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/admin/agent-approva">Agent Approval</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/admin/travel-package-approval">Travel Package Approval</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/admin/support-tickets">Support Tickets</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/bot">ChatBot</Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-dark" to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
