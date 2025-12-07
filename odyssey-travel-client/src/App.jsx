import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
<<<<<<< HEAD

import LandingPage from './pages/public/LandingPage/LandingPage'

=======
import LandingPage from './pages/LandingPage/LandingPage';
import AdminRoutes from './Routes/AdminRoutes';
import AgentRoutes from './Routes/AgentRoutes';
import UserRoutes from './Routes/UserRoutes';
import AgentLayout from './Layouts/AgentLayout';
import Agent_DashBoard from './pages/Agent/agent_DashBoard/Agents_DashBoard';
import AddPackage from './pages/Agent/AddPackages/AddPackages';
>>>>>>> b9cb326c11c19183808e6e61ef33cd41df23692c
function App() {

  return (
    <Routes>
<<<<<<< HEAD
      <Route path='/' element={<LandingPage />} />
      <Route path='login' element={<LandingPage />} />
      <Route path='register' element={<LandingPage />} />
=======
      <Route path='/' element={<LandingPage />}/>


            {/* AdminRoute */}
            <Route path="/admin/*" element={<AdminRoutes />} />
            
            {/* //user Route */}
            <Route path="/user/*" element={<UserRoutes />} />

            {/* Agent Routes */}
        <Route path="/agent/*" element={<AgentRoutes />} />

>>>>>>> b9cb326c11c19183808e6e61ef33cd41df23692c
    </Routes>
  )
}

export default App
