import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function usePayment() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const navigate = useNavigate();

  // Read booking data from sessionStorage
  const userId = Number(sessionStorage.getItem("userId")) || 2;
  const packageId = Number(sessionStorage.getItem("packageId")) || 1;
  const travelDate = sessionStorage.getItem("travelDate") || new Date().toISOString().split('T')[0];
  const travelers = Number(sessionStorage.getItem("travelers")) || 1;
  const totalAmount = Number(sessionStorage.getItem("totalAmount")) || 0;

  // Read traveler objects
  const primaryTraveler = JSON.parse(sessionStorage.getItem("primaryTraveler") || "{}");
  const familyMembers = JSON.parse(sessionStorage.getItem("familyMembers") || "[]");
  const specialRequest = sessionStorage.getItem("specialRequest");

  // Pay Now Handler
  const handlePayNow = async () => {

    // Map family members to Companions for backend
    const companionsList = familyMembers.map((member) => {
      return {
        fullName: member.fullName,
        age: parseInt(member.age) || 20, // Convert string age to number
        gender: member.gender,
        relation: member.relation
      };
    });

    // Create the final booking payload
    const payload = {
      userId: 2, //TODO: Get from auth
      packageId: packageId,
      travelDate: travelDate,
      travelers: travelers,
      totalAmount: totalAmount,
      contactFullName: primaryTraveler.fullName,
      contactEmail: primaryTraveler.email,
      contactNumber: primaryTraveler.mobile,
      specialRequest: specialRequest,
      companions: companionsList,
      payment: {
        amount: totalAmount,
        paymentMethod: paymentMethod.toUpperCase()
      }
    };

    console.log("Sending booking payload:", payload);

    try {
      const response = await axios.post("http://localhost:8080/api/bookings", payload);
      alert(response.data); // Status message from backend

      // Clear session and go home
      sessionStorage.removeItem("primaryTraveler");
      sessionStorage.removeItem("familyMembers");
      sessionStorage.removeItem("specialRequest");
      sessionStorage.removeItem("travelDate");
      sessionStorage.removeItem("packageId");
      sessionStorage.removeItem("totalAmount");
      sessionStorage.removeItem("travelers");

      navigate("/user/browse-packages");
    } catch (error) {
      console.error("Booking error:", error);
      alert("Something went wrong. Please check your data.");
    }
  };

  return {
    packageId,
    totalAmount,
    handlePayNow,
    paymentMethod,
    setPaymentMethod
  };
}
