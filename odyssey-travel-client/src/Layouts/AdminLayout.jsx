import React from 'react'
import AdminNavBar from './../components/Navbar/Admin/AdminNavBar';
import AdminSidebar from '../components/Navbar/Admin/AdminSideBar';
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div>
      <AdminSidebar />
      <AdminNavBar />

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
  )
}

export default AdminLayout
