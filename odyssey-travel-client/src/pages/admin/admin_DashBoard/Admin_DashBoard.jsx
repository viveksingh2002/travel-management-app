import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Legend
} from "recharts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUserTie,
  faBoxOpen,
  faHourglassHalf,
  faUserEdit,
  faClipboardCheck,
  faCheckCircle,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

function Admin_DashBoard() {


  const stats = [
    { title: "Total Users", value: "2,450", icon: faUsers },
    { title: "Total Agents", value: "185", icon: faUserTie },
    { title: "Active Packages", value: "120", icon: faBoxOpen },
    { title: "Pending Approvals", value: "45", icon: faHourglassHalf },
  ];

  const actions = [
    { title: "Edit New User", desc: "Edit and delete the user traveler.", icon: faUserEdit },
    { title: "Review Agents", desc: "Process applications from new travel agents.", icon: faClipboardCheck },
    { title: "Approve Packages", desc: "Authorize new travel packages for listing.", icon: faCheckCircle },
    { title: "Generate Reports", desc: "Access and create detailed system reports.", icon: faChartBar },
  ];

  const yoyData = [
    { month: "Jan", bookings: 120, customers: 80 },
    { month: "Feb", bookings: 150, customers: 110 },
    { month: "Mar", bookings: 180, customers: 130 },
    { month: "Apr", bookings: 200, customers: 150 },
    { month: "May", bookings: 240, customers: 170 },
    { month: "Jun", bookings: 300, customers: 220 },
  ];

  const revenueData = [
    { month: "Jan", revenue: 12 },
    { month: "Feb", revenue: 18 },
    { month: "Mar", revenue: 25 },
    { month: "Apr", revenue: 30 },
    { month: "May", revenue: 35 },
    { month: "Jun", revenue: 40 },
    { month: "Jul", revenue: 42 },
    { month: "Aug", revenue: 38 },
    { month: "Sep", revenue: 46 },
    { month: "Oct", revenue: 50 },
    { month: "Nov", revenue: 48 },
    { month: "Dec", revenue: 60 },
  ];

  const locationData = [
    { name: "Goa", visits: 400 },
    { name: "Manali", visits: 350 },
    { name: "Kashmir", visits: 280 },
    { name: "Jaipur", visits: 200 },
    { name: "Kerala", visits: 450 },
  ];

  const analytics = [
    { title: "Total States Covered", value: "28", icon: faChartBar },
    { title: "Total Revenue (This Year)", value: "₹12.4 Cr", icon: faChartBar },
    { title: "Total Bookings", value: "47,920", icon: faUsers },
    { title: "Total Customers", value: "15,210", icon: faUsers },
    { title: "Total Agents", value: "185", icon: faUserTie },
    { title: "Total Packages", value: "620", icon: faBoxOpen },
    { title: "Pending Approvals", value: "45", icon: faHourglassHalf },
    { title: "Avg Customer Rating", value: "4.8 ★", icon: faClipboardCheck },
  ];


  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      const formatted = now.toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      setDateTime(formatted);
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-semibold">Welcome, Admin!</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {dateTime}
          </p>
        </div>
      </div>

      {/* Actions Section */}
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10">
        {analytics.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-gray-600 dark:text-gray-300 font-medium">{item.title}</h2>
              <FontAwesomeIcon icon={item.icon} className="text-gray-400 dark:text-gray-300 text-xl" />
            </div>
            <p className="text-3xl font-bold text-gray-800 dark:text-white">{item.value}</p>
          </div>
        ))}
      </div>
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

        {/* Year-over-Year Comparison */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Year-over-Year Comparison</h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={yoyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="bookings" stroke="#8884d8" name="Bookings" />
              <Line type="monotone" dataKey="customers" stroke="#82ca9d" name="Customers" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Revenue Trend */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Revenue Trends</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#8884d8" name="Revenue (₹ Lakhs)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Popular Locations */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow mt-6">
        <h2 className="text-xl font-semibold mb-4">Most Popular Travel Locations</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={locationData}
              dataKey="visits"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default Admin_DashBoard;
