import React from "react";

const UserDashboard = () => {
  // 🔹 Later this will come from backend
  const username = "Allu Arjun";

  // 🔹 Temporary UI data (replace with API later)
  const packages = [
    { id: 1, title: "Tropical Beach Getaway", price: 1200, rating: 4.8 },
    { id: 2, title: "Mountain Adventure Tour", price: 1850, rating: 4.5 },
    { id: 3, title: "Historic City Exploration", price: 980, rating: 4.6 },
    { id: 4, title: "Nature Escape Retreat", price: 750, rating: 4.7 },
    { id: 5, title: "Desert Safari Experience", price: 1100, rating: 4.3 },
    { id: 6, title: "Metropolitan City Break", price: 1300, rating: 4.9 },
  ];

  const bookings = [
    { id: "BKG79001", type: "Flight", date: "2024-08-15", status: "Confirmed" },
    { id: "BKG79002", type: "Hotel", date: "2024-09-01", status: "Pending" },
    { id: "BKG79003", type: "Package", date: "2024-07-20", status: "Completed" },
    { id: "BKG79004", type: "Cab Rental", date: "2024-07-22", status: "Confirmed" },
    { id: "BKG79005", type: "Flight", date: "2024-10-10", status: "Cancelled" },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Completed":
        return "bg-blue-100 text-blue-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* 🔹 Welcome Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome, <span className="text-blue-600">{username}</span>
        </h1>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Browse Packages
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            My Bookings
          </button>
        </div>
      </div>

      {/* 🔹 Browse Packages */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Browse Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow-sm border hover:shadow-md transition"
            >
              <div className="h-40 bg-gray-200 rounded-t-lg flex items-center justify-center text-gray-400">
                Image
              </div>

              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-1">
                  {pkg.title}
                </h3>

                <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
                  <span>${pkg.price}</span>
                  <span>⭐ {pkg.rating}</span>
                </div>

                <button className="w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Bookings History */}
      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Bookings History
        </h2>

        <div className="bg-white rounded-lg shadow-sm border overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 text-left">Booking ID</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-3">{booking.id}</td>
                  <td className="p-3">{booking.type}</td>
                  <td className="p-3">{booking.date}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="text-blue-600 hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
