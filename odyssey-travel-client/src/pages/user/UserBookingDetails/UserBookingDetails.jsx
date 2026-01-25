import React, { useState } from 'react';
import useUserBookingDetails from './useUserBookingDetails';

function UserBookingDetails() {
  const { bookings, loading, error } = useUserBookingDetails();
  const [activeTab, setActiveTab] = useState("UPCOMING");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter bookings based on status (assuming status is CONFIRMED, COMPLETED, CANCELLED)
  // Logic: CONFIRMED -> Upcoming, COMPLETED -> Completed
  // NOTE: Backend returns 'CONFIRMED' etc. 
  // Let's filter: Upcoming = CONFIRMED, Completed = COMPLETED/CANCELLED for now or just separate

  const getTabType = (status) => {
    if (status === 'CONFIRMED') return 'UPCOMING';
    return 'COMPLETED';
  };

  const filteredBookings = bookings
    .filter((b) => getTabType(b.status) === activeTab)
    .filter((b) =>
      searchTerm === ""
        ? true
        : String(b.bookingId).includes(searchTerm) ||
        b.packageTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Pagination
  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBookings = filteredBookings.slice(startIndex, startIndex + itemsPerPage);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  if (loading) return <div className="p-10 text-center">Loading your bookings...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-100">

      <div className="flex-1">
        {/* Main Content */}
        <div className="p-6 md:p-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">My Bookings</h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Bookings</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2">{bookings.length}</h3>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => handleTabChange("UPCOMING")}
              className={`px-6 py-2.5 rounded-full font-medium transition-colors ${activeTab === "UPCOMING"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => handleTabChange("COMPLETED")}
              className={`px-6 py-2.5 rounded-full font-medium transition-colors ${activeTab === "COMPLETED"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
            >
              History
            </button>
          </div>

          {/* Table */}
          {paginatedBookings.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-12 text-center text-gray-500">
              No bookings found.
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border dark:border-gray-700">
              <div className="overflow-x-auto">
                <table className="w-full min-w-max">
                  <thead className="bg-gray-900 dark:bg-gray-800 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">ID</th>
                      <th className="px-6 py-4 text-left">Package</th>
                      <th className="px-6 py-4 text-left">Travel Date</th>
                      <th className="px-6 py-4 text-left">Travelers</th>
                      <th className="px-6 py-4 text-left">Total</th>
                      <th className="px-6 py-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedBookings.map((booking) => (
                      <tr key={booking.bookingId} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 text-indigo-600 font-bold">#{booking.bookingId}</td>
                        <td className="px-6 py-4 font-medium dark:text-gray-200">{booking.packageTitle}</td>
                        <td className="px-6 py-4 dark:text-gray-300">{booking.travelDate}</td>
                        <td className="px-6 py-4 dark:text-gray-300">{booking.travelers}</td>
                        <td className="px-6 py-4 font-bold text-green-600">₹{booking.totalAmount}</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserBookingDetails;