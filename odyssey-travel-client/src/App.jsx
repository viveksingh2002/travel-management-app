import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
import AdminRoutes from './Routes/AdminRoutes';
import AgentRoutes from './Routes/AgentRoutes';
import UserRoutes from './Routes/UserRoutes';
import AgentLayout from './Layouts/AgentLayout';
import Agent_DashBoard from './pages/Agent/agent_DashBoard/Agents_DashBoard';
import AddPackage from './pages/Agent/AddPackages/AddPackages';
function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />}/>


            {/* AdminRoute */}
            <Route path="/admin/*" element={<AdminRoutes />} />
            
            {/* //user Route */}
            <Route path="/user/*" element={<UserRoutes />} />

            {/* Agent Routes */}
        <Route path="/agent/*" element={<AgentRoutes />} />

    </Routes>
  )
}

export default App
