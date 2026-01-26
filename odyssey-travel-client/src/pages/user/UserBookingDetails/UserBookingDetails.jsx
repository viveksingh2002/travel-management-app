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
    if (status === 'CONFIRMED' || status === 'PENDING') return 'UPCOMING';
    return 'COMPLETED';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'CONFIRMED': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'PENDING': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'CANCELLED': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      case 'COMPLETED': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
    }
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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="animate-pulse text-indigo-600 font-bold text-xl">Loading your bookings...</div>
    </div>
  );

  if (error) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 p-6 text-center">
      <div className="text-red-500 font-bold text-xl mb-4">{error}</div>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Retry
      </button>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-100">

      <div className="flex-1">
        {/* Main Content */}
        <div className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">My Bookings</h2>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search bookings..."
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
              <i className="bi bi-search absolute left-3 top-2.5 text-gray-400"></i>
            </div>
          </div>

          {/* Stats Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-xl">
                  <i className="bi bi-calendar-check text-2xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Bookings</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{bookings.length}</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 mb-8 bg-gray-100 dark:bg-gray-900 p-1.5 rounded-2xl w-fit">
            <button
              onClick={() => handleTabChange("UPCOMING")}
              className={`px-6 py-2 rounded-xl font-semibold transition-all ${activeTab === "UPCOMING"
                ? "bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm"
                : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => handleTabChange("COMPLETED")}
              className={`px-6 py-2 rounded-xl font-semibold transition-all ${activeTab === "COMPLETED"
                ? "bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm"
                : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
            >
              Past Trips
            </button>
          </div>

          {/* Content */}
          {paginatedBookings.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-16 text-center border border-dashed border-gray-300 dark:border-gray-700">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-briefcase text-3xl text-gray-400"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">No bookings found</h4>
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm mx-auto">
                {searchTerm ? "Try adjusting your search terms" : "You haven't booked any trips in this category yet."}
              </p>
              {!searchTerm && (
                <a
                  href="/user/browse-packages"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition"
                >
                  Explore Packages <i className="bi bi-arrow-right"></i>
                </a>
              )}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
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
                      <tr key={booking.bookingId} className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors">
                        <td className="px-6 py-5">
                          <span className="font-bold text-indigo-600 dark:text-indigo-400">#{booking.bookingId}</span>
                        </td>
                        <td className="px-6 py-5">
                          <p className="font-bold text-gray-900 dark:text-gray-100">{booking.packageTitle}</p>
                        </td>
                        <td className="px-6 py-5 text-gray-600 dark:text-gray-400">
                          {new Date(booking.travelDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                            <i className="bi bi-people"></i> {booking.travelers}
                          </div>
                        </td>
                        <td className="px-6 py-5 font-bold text-gray-900 dark:text-gray-100">
                          ₹{booking.totalAmount?.toLocaleString('en-IN') || '0'}
                        </td>
                        <td className="px-6 py-5">
                          <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${getStatusColor(booking.status)}`}>
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