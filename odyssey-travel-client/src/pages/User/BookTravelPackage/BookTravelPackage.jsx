import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultMember = {
  fullName: "",
  age: "25-39 Years",
  gender: "Female",
  relation: "Spouse",
};

const ageOptions = ["18-24 Years", "25-39 Years", "40-60 Years"];
const genderOptions = ["Male", "Female", "Other"];
const relationOptions = ["Spouse", "Sibling", "Parent", "Friend"];



function BookingPage() {
  const [familyMembers, setFamilyMembers] = useState([defaultMember]);
const navigate=useNavigate();
const handleProceed=()=>
{
  
  navigate("/user/payment");
}
  const addMember = () => {
    setFamilyMembers((prev) => [
      ...prev,
      { fullName: "", age: "18-24 Years", gender: "Male", relation: "Sibling" },
    ]);
  };

  const removeMember = (index) => {
    setFamilyMembers((prev) => prev.filter((_, i) => i !== index));
  };

  // Controlled inputs for family members for future backend linking
  const updateMember = (index, field, value) => {
    setFamilyMembers((prev) =>
      prev.map((member, i) =>
        i === index ? { ...member, [field]: value } : member
      )
    );
  };

  return (
    <div className="container my-5" style={{ maxWidth: "900px" }}>
      {/* Primary Traveler Details */}
      <div className="card p-4 mb-4 shadow-sm">
        <h5 className="mb-3"><b>Primary Traveler Details</b></h5>
        <label className="form-label">Full Name</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Full Name"
          // Controlled for future backend integration
          onChange={() => {}}
        />
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="example@email.com"
          onChange={() => {}}
        />
        <label className="form-label">Mobile Number</label>
        <input
          type="text"
          className="form-control"
          placeholder="+91 XXXXXXXXXX"
          onChange={() => {}}
        />
      </div>

      {/* Additional Family Members */}
      <div className="card p-4 mb-4 shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>Additional Family Members</h5>
          <button className="btn btn-outline-primary btn-sm" onClick={addMember}>
            + Add Member
          </button>
        </div>

        {familyMembers.map((member, index) => (
          <div key={index} className="border p-3 rounded mb-3 bg-light">
            <div className="d-flex justify-content-between mb-2">
              <strong>Member {index + 1}</strong>
              {familyMembers.length > 1 && (
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => removeMember(index)}
                >
                  Remove
                </button>
              )}
            </div>

            <div className="row">
              <div className="col-md-3 mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={member.fullName}
                  onChange={(e) => updateMember(index, "fullName", e.target.value)}
                />
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">Age</label>
                <select
                  className="form-select"
                  value={member.age}
                  onChange={(e) => updateMember(index, "age", e.target.value)}
                >
                  {ageOptions.map((age) => (
                    <option key={age}>{age}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">Gender</label>
                <select
                  className="form-select"
                  value={member.gender}
                  onChange={(e) => updateMember(index, "gender", e.target.value)}
                >
                  {genderOptions.map((gender) => (
                    <option key={gender}>{gender}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-3 mb-3">
                <label className="form-label">Relation</label>
                <select
                  className="form-select"
                  value={member.relation}
                  onChange={(e) => updateMember(index, "relation", e.target.value)}
                >
                  {relationOptions.map((relation) => (
                    <option key={relation}>{relation}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special Requests */}
      <div className="card p-4 mb-4 shadow-sm">
        <h5 className="mb-3">Special Requests</h5>
        <textarea
          className="form-control"
          rows="4"
          placeholder="E.g. Vegetarian meals, window seat preference, accessibility requirements..."
          onChange={() => {}}
        ></textarea>
      </div>

      {/* Package Summary */}
      <div className="card p-4 mb-4 shadow-sm">
        <h5 className="mb-3">Package Summary</h5>

        <div className="row mb-3">
          <div className="col-6">Package Name:</div>
          <div className="col-6 text-end fw-bold">Himalayan Thrills of Manali</div>
        </div>

        <div className="row mb-3">
          <div className="col-6">Destination:</div>
          <div className="col-6 text-end fw-bold">Manali, Himachal, India</div>
        </div>

        <div className="row mb-3">
          <div className="col-6">Travel Dates:</div>
          <div className="col-6 text-end fw-bold">Aug 15 – Aug 22, 2025</div>
        </div>

        <div className="row mb-3">
          <div className="col-6">Price per Person:</div>
          <div className="col-6 text-end fw-bold">₹1200</div>
        </div>

        <div className="row mb-2">
          <div className="col-6">Number of Travelers:</div>
          <div className="col-6 text-end fw-bold">{familyMembers.length}</div>
        </div>

        <hr />

        <div className="row">
          <div className="col-6 fw-bold">Total Package Price:</div>
          <div className="col-6 text-end fw-bold">
            ₹{(1200 * familyMembers.length).toFixed(2)}
          </div>
        </div>
      </div>

      {/* Payment Preview */}
      <div className="card p-4 mb-4 shadow-sm">
        <h5 className="mb-3">Payment Preview</h5>

        <div className="row mb-2">
          <div className="col-6">Travelers ({familyMembers.length} persons):</div>
          <div className="col-6 text-end">₹{(1200 * familyMembers.length).toFixed(2)}</div>
        </div>

        <div className="row mb-2">
          <div className="col-6">Taxes & Fees:</div>
          <div className="col-6 text-end">₹150.00</div>
        </div>

        <div className="row mb-2">
          <div className="col-6">Discounts:</div>
          <div className="col-6 text-end">-₹50.00</div>
        </div>

        <hr />

        <div className="row mb-2">
          <h5 className="col-6">Final Amount Payable:</h5>
          <h5 className="col-6 text-end fw-bold">
            ₹{(1200 * familyMembers.length + 150 - 50).toFixed(2)}
          </h5>
        </div>
      </div>

      {/* Proceed Button */}
      <div className="text-center mb-5">
        <button className="btn btn-primary px-5 py-2" onClick={handleProceed}>Proceed to Payment</button>
      </div>
    </div>
  );
}

export default BookingPage;