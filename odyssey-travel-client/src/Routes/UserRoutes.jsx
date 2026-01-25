import { Routes, Route } from "react-router-dom";
import User_DashBoard from "../pages/user/User_DashBoard/User_DashBoard";
import Payment from "../pages/user/Payment/Payment";
import UserBookingDetails from '../pages/user/UserBookingDetails/UserBookingDetails';
import BrowsePackages from '../pages/user/BrowsePackages/BrowsePackages';
// import Login from '../pages/User/userlogin/login';
import Support from '../pages/user/Support/Support';
import UserLayout from '../Layouts/UserLayout';
import BookingPage from "../pages/user/BookTravelPackage/BookTravelPackage";

export default function UserRoutes() {
  return (
    <Routes>
      {/* Parent route with layout */}
      <Route path="/" element={<UserLayout />}>

        {/* Nested routes (relative paths) */}
        <Route path="dashboard" element={<User_DashBoard />} />
        <Route path="browse-packages" element={<BrowsePackages />} />
        <Route path="book-package/:packageId" element={<BookingPage />} />
        <Route path="payment" element={<Payment />} />
        <Route path="my-bookings" element={<UserBookingDetails />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="support" element={<Support />} />

      </Route>
    </Routes>
  );
}