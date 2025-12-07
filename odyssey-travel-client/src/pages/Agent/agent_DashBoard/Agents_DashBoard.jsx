import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

function Agent_DashBoard() {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Created Packages",
        data: [90, 110, 130, 150, 170, 140],
        borderColor: "#4B5563",
        backgroundColor: "transparent",
        tension: 0.4,
      },
      {
        label: "Approved Packages",
        data: [80, 100, 120, 160, 190, 160],
        borderColor: "#9CA3AF",
        backgroundColor: "transparent",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6">Welcome, Agent!</h1>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        {[
          { label: "Total Packages", value: "1,250" },
          { label: "Approved Packages", value: "980" },
          { label: "Pending Packages", value: "120" },
          { label: "Total Bookings", value: "5,678" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-5 border border-gray-200"
          >
            <p className="text-gray-500">{item.label}</p>
            <p className="text-2xl font-bold mt-1">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Chart + Recent Packages */}
      <div className="grid grid-cols-2 gap-8">
        {/* Chart Section */}
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">
            Package/Booking Performance
          </h2>
          <Line data={chartData} />
        </div>

        {/* Recent Packages */}
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">My Recent Packages</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm border-b">
                <th className="py-2">Package Title</th>
                <th>Destination</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {[
                {
                  title: "Luxury European Tour",
                  dest: "Paris, Rome, London",
                  status: "Pending",
                  date: "2024-07-20",
                },
                {
                  title: "Adventure Trek Himalayas",
                  dest: "Nepal, Bhutan",
                  status: "Approved",
                  date: "2024-07-18",
                },
                {
                  title: "Caribbean Cruise Escape",
                  dest: "Bahamas, Jamaica",
                  status: "Approved",
                  date: "2024-07-15",
                },
                {
                  title: "Japan Cultural Immersion",
                  dest: "Tokyo, Kyoto",
                  status: "Approved",
                  date: "2024-07-12",
                },
                {
                  title: "Safari Expedition Africa",
                  dest: "Kenya, Tanzania",
                  status: "Pending",
                  date: "2024-07-10",
                },
              ].map((pkg, i) => (
                <tr key={i} className="border-b">
                  <td className="py-2">{pkg.title}</td>
                  <td>{pkg.dest}</td>
                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        pkg.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {pkg.status}
                    </span>
                  </td>
                  <td>{pkg.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bookings + Tickets */}
      <div className="grid grid-cols-2 gap-8 mt-10">
        {/* Bookings Overview */}
        <div className="bg-white border rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Bookings Overview</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm border-b">
                <th className="py-2">Booking ID</th>
                <th>User</th>
                <th>Package</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {[
                {
                  id: "B-00123",
                  user: "Alice Johnson",
                  pkg: "Luxury European Tour",
                  date: "2024-07-26",
                  status: "Confirmed",
                },
                {
                  id: "B-00124",
                  user: "Bob Williams",
                  pkg: "Adventure Trek Himalayas",
                  date: "2024-07-24",
                  status: "Cancelled",
                },
                {
                  id: "B-00125",
                  user: "Charlie Brown",
                  pkg: "Caribbean Cruise Escape",
                  date: "2024-07-27",
                  status: "Confirmed",
                },
                {
                  id: "B-00126",
                  user: "Diana Prince",
                  pkg: "Japan Cultural Immersion",
                  date: "2024-07-28",
                  status: "Cancelled",
                },
              ].map((b, i) => (
                <tr key={i} className="border-b">
                  <td className="py-2">{b.id}</td>
                  <td>{b.user}</td>
                  <td>{b.pkg}</td>
                  <td>{b.date}</td>
                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        b.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Support Tickets */}
        <div className="bg-white border rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Support Tickets</h2>

          <div className="space-y-4 text-sm">
            {[
              { issue: "Issue with booking modification", status: "Open" },
              { issue: "Enquiry about package inclusions", status: "New" },
              { issue: "Feedback on recent tour", status: "Closed" },
              { issue: "Payment processing error", status: "Open" },
            ].map((t, i) => (
              <div
                key={i}
                className="p-3 border rounded-lg flex justify-between items-center"
              >
                <span>{t.issue}</span>
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    t.status === "Closed"
                      ? "bg-gray-200 text-gray-600"
                      : t.status === "New"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {t.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agent_DashBoard;
