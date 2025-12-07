import React from "react";

function UserDashboard() {
  return (
    <div className="flex-grow-1 bg-light min-vh-100">
      {/* Main Content Area */}
      <div className="p-4 pt-5">
        <div className="container-fluid">

          {/* Welcome Bar */}
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div>
              <h2 className="fw-bold text-dark mb-1">Welcome back, Allu Arjun!</h2>
              <p className="text-muted">Here's what's happening with your travels today.</p>
            </div>
            <div className="d-flex gap-3">
              <button className="btn btn-dark px-4 py-2 rounded-pill">
                Browse Packages
              </button>
              <button className="btn btn-outline-dark px-4 py-2 rounded-pill">
                My Bookings
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-5">
            <h5 className="fw-semibold mb-3">Discover Your Next Adventure</h5>
            <input
              type="text"
              className="form-control form-control-lg rounded-pill shadow-sm"
              placeholder="Search packages, destinations, activities..."
              style={{ maxWidth: "600px" }}
            />
          </div>

          {/* Featured Packages Grid */}
          <div className="row g-4 mb-5">
            {[
              { title: "Tropical Beach Getaway", price: "₹12,000", rating: 4.8, location: "Maldives" },
              { title: "Mountain Adventure Tour", price: "₹18,500", rating: 4.5, location: "Manali" },
              { title: "Historic City Exploration", price: "₹9,800", rating: 4.6, location: "Jaipur" },
              { title: "Nature Escape Retreat", price: "₹7,500", rating: 4.7, location: "Kerala" },
              { title: "Desert Safari Experience", price: "₹11,000", rating: 4.3, location: "Jaisalmer" },
              { title: "Metropolitan City Break", price: "₹13,000", rating: 4.9, location: "Mumbai" },
            ].map((pkg, i) => (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden hover-lift">
                  <div
                    className="bg-light d-flex align-items-center justify-content-center"
                    style={{ height: "160px" }}
                  >
                    <i className="fas fa-image fa-4x text-muted opacity-25"></i>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title fw-bold">{pkg.title}</h6>
                    <p className="text-muted small">
                      <i className="fas fa-map-marker-alt me-1"></i> {pkg.location}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="fs-4 fw-bold text-primary">{pkg.price}</span>
                      <span className="text-warning">
                        <i className="fas fa-star"></i> {pkg.rating}
                      </span>
                    </div>
                    <button className="btn btn-dark w-100 mt-3 rounded-pill py-2">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Bookings Table */}
          <div className="bg-white rounded-3 shadow-sm p-4">
            <h5 className="fw-semibold mb-4">Recent Bookings</h5>
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Booking ID</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-semibold">BKG78901</td>
                    <td>Flight</td>
                    <td>15 Aug 2024</td>
                    <td><span className="badge bg-success px-3 py-2 rounded-pill">Confirmed</span></td>
                    <td><button className="btn btn-sm btn-outline-primary">View</button></td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">BKG78902</td>
                    <td>Hotel</td>
                    <td>01 Sep 2024</td>
                    <td><span className="badge bg-warning text-dark px-3 py-2 rounded-pill">Pending</span></td>
                    <td><button className="btn btn-sm btn-outline-danger">Cancel</button></td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">BKG78903</td>
                    <td>Package</td>
                    <td>20 Jul 2024</td>
                    <td><span className="badge bg-primary px-3 py-2 rounded-pill">Completed</span></td>
                    <td><button className="btn btn-sm btn-outline-success">Rebook</button></td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">BKG78904</td>
                    <td>Car Rental</td>
                    <td>22 Aug 2024</td>
                    <td><span className="badge bg-success px-3 py-2 rounded-pill">Confirmed</span></td>
                    <td><button className="btn btn-sm btn-outline-primary">View</button></td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">BKG78905</td>
                    <td>Flight</td>
                    <td>10 Jun 2024</td>
                    <td><span className="badge bg-danger px-3 py-2 rounded-pill">Cancelled</span></td>
                    <td><button className="btn btn-sm btn-outline-secondary">Rebook</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-5 pt-4 text-muted small">
            © 2025 Odyssey Tours & Travels. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;