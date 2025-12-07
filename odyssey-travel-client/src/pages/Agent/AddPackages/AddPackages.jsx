
function package_details()
{
    return(
    <div>
        {/* Sidebar */}


      {/* Main Content Area */}
      <div className="flex-grow-1 bg-light min-vh-100 p-4">
        <div className="container-fluid">
          <h2 className="mb-4 fw-semibold">Package Details</h2>

          {/* Package Details Card */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              {/* Your existing form fields – all good! */}
              <div className="mb-3">
                <label className="form-label fw-medium">Package Title</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Explore Manali in 7 Days"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-medium">Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  defaultValue="Discover the magic of Manali with our exclusive 7-day tour package. Experience the ultimate Himalayan adventure with thrilling activities amidst Manali's snow-capped peaks and valleys."
                />
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Destination</label>
                  <input type="text" className="form-control" defaultValue="Manali, Himachal Pradesh" />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Price (₹)</label>
                  <div className="input-group">
                    <span className="input-group-text">₹</span>
                    <input type="text" className="form-control" defaultValue="25000" />
                  </div>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Status</label>
                  <select className="form-select" defaultValue="Draft">
                    <option>Draft</option>
                    <option>Published</option>
                    <option>Archived</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label">Start Date</label>
                  <input type="date" className="form-control" defaultValue="2025-09-15" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">End Date</label>
                  <input type="date" className="form-control" defaultValue="2025-09-22" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Max Travelers</label>
                  <input type="number" className="form-control" defaultValue="20" min="1" />
                </div>
              </div>
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">Package Images</h5>
              <div className="border border-dashed rounded-3 p-5 text-center bg-white">
                <p className="text-muted mb-3">Drag & drop images here or click to upload</p>
                <div className="d-flex justify-content-center gap-4 flex-wrap">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="border border-dashed rounded bg-light d-flex align-items-center justify-content-center text-muted"
                      style={{ width: "180px", height: "120px" }}
                    >
                      <small>Image {i}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Itinerary */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4">Itinerary</h5>
              {[
                "Arrival in Manali, hotel check-in, evening at leisure.",
                "Visit Hadimba Temple, Manu Temple, Vashisht Hot Springs.",
                "Full day adventure in Solang Valley – paragliding, zorbing, ropeway.",
                "Rohtang Pass excursion (subject to permit), snow activities.",
                "Visit Rahalla Falls, local market shopping.",
                "Departure day – transfer to bus/volvo stand.",
              ].map((day, i) => (
                <div className="d-flex align-items-start mb-3 gap-3" key={i}>
                  <span className="badge bg-primary rounded-pill mt-1" style={{ width: "32px", height: "32px" }}>
                    {i + 1}
                  </span>
                  <textarea className="form-control" rows="2" defaultValue={day} />
                </div>
              ))}
              <button className="btn btn-outline-primary btn-sm mt-3">
                + Add Day
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex justify-content-end gap-3 mb-5">
            <button className="btn btn-outline-secondary px-4">Cancel</button>
            <button className="btn btn-secondary px-4">Save as Draft</button>
            <button className="btn btn-primary px-5">Submit for Approval</button>
          </div>

          <footer className="text-center text-muted small py-4">
            © 2025 Odyssey Tours & Travels. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}

export default package_details