
import { Link } from "react-router-dom";

function AgentTopNavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-white border-bottom px-4"
      style={{
        
        height: "64px",
        display: "flex",
        alignItems: "center",
        position: "fixed",
        top: 0,
        right: 0,
        left: "240px",
        zIndex: 1000,
        justifyContent: "space-between",
        paddingRight: "20px",
        paddingLeft: "20px",
      }}
    >
      {/* Centered links */}
      <ul
        className="navbar-nav d-flex flex-row gap-4"
        style={{ margin: "0 auto", position: "absolute", left: "50%", transform: "translateX(-50%)" }}
      >
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/home">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-dark" to="/about">
            About Us
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-dark" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Right side icon space */}
      <div style={{ position: "absolute", right: 0, display: "flex", justifyContent: "flex-end", width: "120px" }}>
        {/* Add your icons here */}
        <span class="material-symbols-outlined">
logout
</span>
      </div>
    </nav>
  );
}

export default AgentTopNavBar;