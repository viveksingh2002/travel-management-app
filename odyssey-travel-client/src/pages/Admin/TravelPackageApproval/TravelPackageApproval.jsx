import React, { useState } from "react";

function TravelPackageApproval() {
  const [pendingPackages] = useState([
    {
      id: 1,
      title: "Sample Package 1",
      description: "Description of sample package 1",
      destination: "Destination 1",
      price: 1200,
      startDate: "2024-07-01",
      endDate: "2024-07-10",
      maxTravelers: 20,
      itinerary: "Day 1: Arrival\nDay 2: Sightseeing\nDay 3: Departure",
      images: [
        "https://via.placeholder.com/200x120",
        "https://via.placeholder.com/200x120",
      ],
    },
    {
      id: 2,
      title: "Sample Package 2",
      description: "Description of sample package 2",
      destination: "Destination 2",
      price: 1500,
      startDate: "2024-08-05",
      endDate: "2024-08-15",
      maxTravelers: 15,
      itinerary: "Day 1: Welcome\nDay 2: Hiking\nDay 3: Local tour",
      images: ["https://via.placeholder.com/200x120"],
    },
    {
      id: 3,
      title: "Sample Package 3",
      description: "Description of sample package 3",
      destination: "Destination 3",
      price: 1800,
      startDate: "2024-09-10",
      endDate: "2024-09-20",
      maxTravelers: 18,
      itinerary: "Day 1: Check-in\nDay 2: Cruise\nDay 3: Return",
      images: ["https://via.placeholder.com/200x120"],
    },
  ]);

  const [message, setMessage] = useState("");

  const approvePackage = (id) => setMessage(`Package ${id} approved.`);
  const rejectPackage = (id) => setMessage(`Package ${id} rejected.`);

  return (
    <div className="container py-4">

      <h2 className="fw-bold text-center mb-4" style={{ fontSize: "34px" }}>
        Pending Travel Packages
      </h2>

      {message && (
        <div className="alert alert-info text-center fw-bold py-2 small shadow-sm">
          {message}
        </div>
      )}

      <div className="row g-4">
        {pendingPackages.map((pkg) => (
          <div key={pkg.id} className="col-md-4">
            <div className="card shadow border-0 rounded-4">

              {/* Header with bigger title */}
              <div
                className="card-header text-white py-3 rounded-top-4"
                style={{
                  background: "linear-gradient(135deg, #007bff, #6610f2)",
                }}
              >
                <h5 className="mb-0 fw-bold" style={{ fontSize: "20px" }}>
                  {pkg.title}
                </h5>
              </div>

              <div className="card-body p-3">

                <span className="badge bg-success me-2 px-3 py-2">
                  ₹ {pkg.price}
                </span>
                <span className="badge bg-primary px-3 py-2">
                  {pkg.destination}
                </span>

                <p className="text-secondary small mt-2 mb-2">
                  {pkg.description}
                </p>

                <p className="small mb-1">
                  <strong>Dates:</strong> {pkg.startDate} → {pkg.endDate}
                </p>

                <p className="small mb-2">
                  <strong>Max Travelers:</strong> {pkg.maxTravelers}
                </p>

                <p className="fw-bold small mb-1">Itinerary:</p>
                <pre
                  className="p-2 bg-light rounded-2 border small"
                  style={{
                    whiteSpace: "pre-wrap",
                    maxHeight: "90px",
                    overflowY: "auto",
                  }}
                >
                  {pkg.itinerary}
                </pre>

                <p className="fw-bold small mt-2 mb-1">Images:</p>
                <div className="d-flex flex-wrap gap-2">
                  {pkg.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt=""
                      className="rounded border"
                      style={{
                        width: "80px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </div>

                <div className="mt-3 d-flex justify-content-between">
                  <button
                    className="btn btn-outline-success btn-sm px-3"
                    onClick={() => approvePackage(pkg.id)}
                  >
                    Approve
                  </button>

                  <button
                    className="btn btn-outline-danger btn-sm px-3"
                    onClick={() => rejectPackage(pkg.id)}
                  >
                    Reject
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default TravelPackageApproval;
