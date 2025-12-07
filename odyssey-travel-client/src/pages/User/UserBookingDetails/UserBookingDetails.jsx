import React from 'react'
import User_DashBoard from '../User_DashBoard/User_DashBoard';
import "./UserBookingDetails.css";

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
  const upcoming = BOOKINGS_DATA.filter(b => b.type === "upcoming");

  return (
    <div>
      <div className="main-content">
        <div className="top-bar">
          <i className="bi bi-bell fs-4 text-gray-600 hover:text-gray-900 transition"></i>
          <i className="bi bi-person-circle fs-3 ms-4 text-gray-700 hover:text-gray-900 transition"></i>
        </div>

        <div className="content-area">
          <h2 className="page-title">My Bookings</h2>

          {/* Stats */}
          <div className="stats-grid">
            <div className="stat-card hover:shadow-lg transition-shadow">
              <p>Total Bookings</p>
              <h3>{BOOKINGS_DATA.length}</h3>
            </div>
            <div className="stat-card hover:shadow-lg transition-shadow">
              <p>Upcoming Trips</p>
              <h3 className="text-primary">{BOOKINGS_DATA.filter(b=>b.type==="upcoming").length}</h3>
            </div>
            <div className="stat-card hover:shadow-lg transition-shadow">
              <p>Completed Trips</p>
              <h3 className="text-success">{BOOKINGS_DATA.filter(b=>b.type==="completed").length}</h3>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <button className="tab-btn active hover:bg-blue-50">
              Upcoming Bookings
            </button>
            <button className="tab-btn hover:bg-gray-50">
              Completed Bookings
            </button>
          </div>

          <h5 className="section-title">Your Upcoming Trips</h5>

          {/* Search bar */}
          <div className="actions-bar">
            <input
              type="text"
              placeholder="Search by Booking ID, Package or Destination..."
              className="search-input focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              readOnly
            />
            <div className="action-buttons">
              <button className="btn-filter hover:bg-gray-100 hover:shadow transition">
                Filter Status
              </button>
              <button className="btn-download hover:bg-blue-600 hover:shadow transition">
                Download Excel
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="table-container">
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Package Name</th>
                  <th>Destination</th>
                  <th>Travel Date</th>
                  <th>Travelers</th>
                  <th>Total Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {upcoming.map((b) => (
                  <tr key={b.id} className="hover:bg-gray-50 transition">
                    <td className="booking-id">{b.id}</td>
                    <td className="package-name">{b.packageName}</td>
                    <td>{b.destination}</td>
                    <td>{b.date}</td>
                    <td><span className="traveler-count">{b.travelers}</span></td>
                    <td className="amount">{b.amount}</td>
                    <td>
                      <span className={`status-badge ${b.status.toLowerCase()} shadow-sm`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="action-link">
                      <a href="#" className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition">
                        View Details →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button disabled className="opacity-50">Previous</button>
            <span className="active-page">1</span>
            <button className="hover:bg-blue-50 transition">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserBookingDetails;
