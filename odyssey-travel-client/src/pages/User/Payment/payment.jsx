import React from 'react'

function payment() {
  return (
    <div className="container py-4 py-md-5" style={{ maxWidth: "900px" }}>

      <h3 className="fw-bold mb-4 text-center text-md-start">Complete Your Payment</h3>

      {/* Payment Summary */}
      <div className="mb-4">
        <h5 className="fw-bold mb-3">Payment Summary</h5>

        <div className="row mb-2 small text-muted">
          <div className="col-7 col-sm-8">Package Name</div>
          <div className="col-5 col-sm-4 text-end text-dark fw-medium">Grand Manali Tour</div>
        </div>
        <div className="row mb-2 small text-muted">
          <div className="col-7 col-sm-8">Booking ID</div>
          <div className="col-5 col-sm-4 text-end">Manali2025GHTR</div>
        </div>
        <div className="row mb-2 small text-muted">
          <div className="col-7 col-sm-8">Travel Dates</div>
          <div className="col-5 col-sm-4 text-end">2025-09-15 to 2025-09-29</div>
        </div>
        <div className="row mb-3 small text-muted">
          <div className="col-7 col-sm-8">Travelers</div>
          <div className="col-5 col-sm-4 text-end">2 Adults, 1 Child</div>
        </div>

        <hr className="my-3" />

        <div className="row mb-1">
          <div className="col-7 col-sm-8">Base Fare</div>
          <div className="col-5 col-sm-4 text-end">₹3,500.00</div>
        </div>
        <div className="row mb-1">
          <div className="col-7 col-sm-8">Service Fee</div>
          <div className="col-5 col-sm-4 text-end">₹150.00</div>
        </div>
        <div className="row mb-1">
          <div className="col-7 col-sm-8">Taxes</div>
          <div className="col-5 col-sm-4 text-end">₹200.00</div>
        </div>
        <div className="row mb-3 text-success">
          <div className="col-7 col-sm-8">Discount</div>
          <div className="col-5 col-sm-4 text-end">
            <span className="badge bg-success-subtle text-success">₹175.00 (5% OFF)</span>
          </div>
        </div>

        <div className="row fw-bold fs-5 border-top pt-3">
          <div className="col-7 col-sm-8">Total Payable Amount</div>
          <div className="col-5 col-sm-4 text-end text-success">₹3,675.00</div>
        </div>
      </div>

      {/* Confirm & Pay */}
      <h4 className="fw-bold mb-3">Confirm and Pay</h4>

      {/* Active Dates & Guests*/}
      <div className="row mb-4 g-3">
        <div className="col-12 col-md-6">
          <div className="border rounded p-3 bg-light" style={{ cursor: "pointer" }}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="fw-bold mb-1 small text-muted">Dates</p>
                <p className="mb-0 fw-medium">15 Sep – 29 Sep 2025</p>
              </div>
              <span className="text-muted">Edit</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="border rounded p-3 bg-light" style={{ cursor: "pointer" }}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="fw-bold mb-1 small text-muted">Guests</p>
                <p className="mb-0 fw-medium">2 Adults, 1 Child</p>
              </div>
              <span className="text-muted">Edit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mb-4 d-flex flex-column flex-sm-row gap-2">
        <button className="btn btn-dark flex-grow-1">Credit/Debit card</button>
        <button className="btn btn-outline-secondary flex-grow-1">NET-Banking</button>
        <button className="btn btn-outline-secondary flex-grow-1">UPI</button>
      </div>

      <input type="text" className="form-control mb-3" placeholder="Card number" />
      <input type="text" className="form-control mb-3" placeholder="Card holder" />

      <div className="row mb-4 g-3">
        <div className="col-12 col-md-6">
          <input type="text" className="form-control" placeholder="Expiration date (MM/YY)" />
        </div>
        <div className="col-12 col-md-6">
          <input type="text" className="form-control" placeholder="CVV" maxLength="4" />
        </div>
      </div>

      <div className="form-check mb-4">
        <input className="form-check-input" type="checkbox" id="saveCard" />
        <label className="form-check-label" htmlFor="saveCard">
          Save my card for future reservation
        </label>
      </div>

      <p className="small text-muted mb-4">
        By selecting the button below, I agree to the Property Rules, Terms and Conditions, Privacy Policy and Cancellation Policy.
      </p>

      <div className="d-grid gap-2">
        <button className="btn btn-success btn-lg">Confirm and Pay ₹3,675.00</button>
        <button className="btn btn-outline-secondary">Cancel / Go Back</button>
      </div>
    </div>
  );
}

export default payment;
