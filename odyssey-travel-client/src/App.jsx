import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import  Package_details from './pages/Package_details/package_details';
import LandingPage from './pages/LandingPage/LandingPage'
import SignUp from './pages/Sign_Up/SignUp';
import Login from './pages/userlogin/login';
import User_DashBoard from './pages/User_DashBoard/User_DashBoard';
import BookTravelPackage from './pages/BookTravelPackage/BookTravelPackage';
import Payment from './pages/Payment/payment';
import UserBookingDetails from './pages/UserBookingDetails/UserBookingDetails';
import AgentLogin from './pages/AgentLogin/AgentLogin';
import Admin_DashBoard from './pages/admin_DashBoard/Admin_DashBoard';
import Agents_DashBoard from './pages/agent_DashBoard/Agents_DashBoard';
import AddPackage from '../../../../Downloads/AddPackage';
import Home from './pages/Home/Home';
import BrowsePackages from './pages/BrowsePackages/BrowsePackages';
function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />}/>


       <Route
              path='home'
              element={
               <Home />   
              }
            >
            
            <Route
            path='AddPackage'
            element={<AddPackage />}
            />

            <Route
                path='SignUp'
                element={<SignUp />}
              />
              <Route
                path='Userlogin'
                element={<Login />}
              />
              <Route
                path='UserDashBoard'
                element={<User_DashBoard />}
              />
              <Route
                path='BookTravelPackage'
                element={<BookTravelPackage />}
              />
              <Route
                path='Payment'
                element={<Payment />}
              />
              <Route
                path='UserBookingDetails'
                element={<UserBookingDetails />}
              />
  

               <Route
                path='AgentLogin'
                element={<AgentLogin />}
              />

               <Route
                path='Agents_DashBoard'
                element={<Agents_DashBoard />}
              />

                 <Route
                path='Admin_DashBoard'
                element={<Admin_DashBoard />}
              />

            </Route>
    </Routes>
  )
}

export default App
