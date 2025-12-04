import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/navbar'
import UserNavBar from '../../components/Navbar/UserNavBar'
function Home() {
  return (
    <div>
      <UserNavBar />

      {/* this is a placeholder to load all child components */}
      <Outlet />

      <footer className="text-center text-muted small py-4">
            © 2025 Odyssey Tours & Travels. All rights reserved.
      </footer>
    </div>
  )
}

export default Home