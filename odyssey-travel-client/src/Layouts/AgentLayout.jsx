import { Outlet } from "react-router-dom";
import AgentSidebar from "../components/Navbar/Agent/AgentSideBar";
import AgentTopNavBar from "../components/Navbar/Agent/AgentTopNavBar";
export default function AgentLayout() {
  return (
    <div>
      <AgentSidebar />
      <AgentTopNavBar />

      <div
        style={{
          marginLeft: "240px",
          marginTop: "70px",
          padding: "20px",
        }}
      >
        <Outlet />   {/* Pages load here */}
      </div>
      <footer className="text-center text-muted small py-4">
            © 2025 Odyssey Tours & Travels. All rights reserved.
      </footer>
    </div>
  );
}
