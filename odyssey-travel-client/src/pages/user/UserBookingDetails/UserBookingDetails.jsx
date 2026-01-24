import React, { useState } from 'react';

const BOOKINGS_DATA = [
  { id: "BK1001", packageName: "European Grand Tour", destination: "Paris, Rome, Berlin", date: "2024-09-15", travelers: 2, amount: "$4,500", status: "Upcoming", type: "upcoming" },
  { id: "BK1002", packageName: "Bali Adventure Retreat", destination: "Ubud, Denpasar", date: "2024-10-22", travelers: 1, amount: "$1,800", status: "Upcoming", type: "upcoming" },
  { id: "BK1003", packageName: "Tokyo City Lights", destination: "Tokyo, Japan", date: "2024-11-05", travelers: 3, amount: "$6,200", status: "Upcoming", type: "upcoming" },
  { id: "BK1004", packageName: "Coastal California Drive", destination: "San Francisco, LA", date: "2024-12-01", travelers: 2, amount: "$3,100", status: "Upcoming", type: "upcoming" },
  { id: "BK1005", packageName: "Amazon Rainforest Expedition", destination: "Manaus, Brazil", date: "2025-01-10", travelers: 1, amount: "$2,700", status: "Upcoming", type: "upcoming" },
  { id: "BK1006", packageName: "Swiss Alps Winter", destination: "Zurich, Interlaken", date: "2024-02-20", travelers: 4, amount: "$5,800", status: "Completed", type: "completed" },
  { id: "BK1007", packageName: "Maldives Honeymoon", destination: "Malé", date: "2024-03-10", travelers: 2, amount: "$7,200", status: "Completed", type: "completed" },
];

function UserBookingDetails() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter bookings 
  const filteredBookings = BOOKINGS_DATA
    .filter((b) => b.type === activeTab)
    .filter((b) =>
      searchTerm === ""
        ? true
        : b.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.packageName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          b.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Pagination
  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBookings = filteredBookings.slice(startIndex, startIndex + itemsPerPage);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-100">

      <div className="flex-1">
        {/* Top Bar */}
        <div className="bg-white dark:bg-gray-800 shadow-sm px-6 py-4 flex justify-end items-center">
          <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition">
            <i className="bi bi-bell text-xl"></i>
          </button>
          <button className="ml-6 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition">
            <i className="bi bi-person-circle text-2xl"></i>
          </button>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">My Bookings</h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Bookings</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2">{BOOKINGS_DATA.length}</h3>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-600 dark:text-gray-400">Upcoming Trips</p>
              <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mt-2">
                {BOOKINGS_DATA.filter(b => b.type === "upcoming").length}
              </h3>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed Trips</p>
              <h3 className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">
                {BOOKINGS_DATA.filter(b => b.type === "completed").length}
              </h3>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => handleTabChange("upcoming")}
              className={`px-6 py-2.5 rounded-full font-medium transition-colors ${
                activeTab === "upcoming"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Upcoming Bookings
            </button>
            <button
              onClick={() => handleTabChange("completed")}
              className={`px-6 py-2.5 rounded-full font-medium transition-colors ${
                activeTab === "completed"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              Completed Bookings
            </button>
          </div>

          <h5 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            {activeTab === "upcoming" ? "Your Upcoming Trips" : "Your Completed Trips"}
          </h5>

          {/* Search + Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by Booking ID, Package or Destination..."
              className="w-full max-w-md px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition"
            />
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-sm transition">
                Filter Status
              </button>
              <button className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-full transition shadow-sm">
                Download Excel
              </button>
            </div>
          </div>

          {/* Table / Empty State */}
          {paginatedBookings.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center text-gray-500 dark:text-gray-400">
              No bookings found matching your search.
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-max">
                  <thead className="bg-gray-900 dark:bg-gray-800 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Booking ID</th>
                      <th className="px-6 py-4 text-left font-semibold">Package Name</th>
                      <th className="px-6 py-4 text-left font-semibold">Destination</th>
                      <th className="px-6 py-4 text-left font-semibold">Travel Date</th>
                      <th className="px-6 py-4 text-left font-semibold">Travelers</th>
                      <th className="px-6 py-4 text-left font-semibold">Total Amount</th>
                      <th className="px-6 py-4 text-left font-semibold">Status</th>
                      <th className="px-6 py-4 text-left font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedBookings.map((booking) => (
                      <tr
                        key={booking.id}
                        className="border-b dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <td className="px-6 py-4 font-bold text-indigo-600 dark:text-indigo-400">{booking.id}</td>
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">{booking.packageName}</td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{booking.destination}</td>
                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{booking.date}</td>
                        <td className="px-6 py-4">
                          <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                            {booking.travelers}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-bold text-green-600 dark:text-green-400">{booking.amount}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold ${
                              booking.type === "upcoming"
                                ? "bg-indigo-600 text-white"
                                : "bg-green-600 text-white"
                            }`}
                          >
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href="#"
                            className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 hover:underline transition"
                          >
                            View Details →
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className={`px-5 py-2 border rounded-lg transition ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed border-gray-200 dark:border-gray-700 text-gray-400"
                    : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    currentPage === page
                      ? "bg-indigo-600 text-white"
                      : "border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-5 py-2 border rounded-lg transition ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed border-gray-200 dark:border-gray-700 text-gray-400"
                    : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserBookingDetails;