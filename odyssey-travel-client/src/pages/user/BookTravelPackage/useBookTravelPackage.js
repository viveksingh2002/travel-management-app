import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const ageOptions = ["18-24 Years", "25-39 Years", "40-60 Years"];
export const genderOptions = ["Male", "Female", "Other"];
export const relationOptions = ["Spouse", "Sibling", "Parent", "Friend"];

export default function useBookTravelPackage() {
    const navigate = useNavigate();
    const { packageId } = useParams(); // Get package ID from URL (matches UserRoutes.jsx)
    const id = packageId; // Use id internally to keep the rest of the code the same

    // --- 1. Dynamic Package Data from Backend ---
    const [packageData, setPackageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // If there is no ID in the URL, don't try to fetch
        if (!id) {
            setLoading(false);
            return;
        }

        const fetchPackageDetails = async () => {
            try {
                // Fetch specific package by ID
                const response = await axios.get(`http://localhost:8080/api/packages/${id}`);
                setPackageData(response.data);
            } catch (error) {
                console.error("Could not fetch package. Is your backend running on 8080?", error);
            }
            setLoading(false); // Stop loading even if there's an error
        };

        fetchPackageDetails();
    }, [id]);

    // --- 2. Helper to Load Form from Session Storage ---
    const loadFromSession = (key, defaultValue) => {
        const saved = sessionStorage.getItem(key);
        if (!saved) return defaultValue;

        try {
            return JSON.parse(saved);
        } catch (error) {
            return saved; // If not JSON, return as plain string
        }
    };

    // --- 3. Form State Initialisation ---
    const [primaryTraveler, setPrimaryTraveler] = useState(() =>
        loadFromSession("primaryTraveler", { fullName: "", email: "", mobile: "" })
    );

    const [familyMembers, setFamilyMembers] = useState(() =>
        loadFromSession("familyMembers", [
            { fullName: "", age: "25-39 Years", gender: "Female", relation: "Spouse" }
        ])
    );

    const [specialRequest, setSpecialRequest] = useState(() =>
        loadFromSession("specialRequest", "")
    );

    const [travelDate, setTravelDate] = useState("");

    // --- 4. Logic Handlers ---
    const updatePrimaryDetail = (field, value) => {
        if (field === "travelDate") {
            setTravelDate(value); // Synchronize with our dedicated state
        }
        setPrimaryTraveler((prev) => ({ ...prev, [field]: value }));
    };

    console.log("Booking Page - Package Data:", packageData);
    console.log("Booking Page - Price Per Person:", packageData ? packageData.price : 0);

    const addMember = () => {
        setFamilyMembers([...familyMembers, { fullName: "", age: "18-24 Years", gender: "Male", relation: "Sibling" }]);
    };

    const removeMember = (index) => {
        setFamilyMembers(familyMembers.filter((_, i) => i !== index));
    };

    const updateMember = (index, field, value) => {
        const newList = [...familyMembers];
        newList[index][field] = value;
        setFamilyMembers(newList);
    };

    // --- 5. Dynamic Price Calculations ---
    // If package is not loaded yet, we use 0
    const pricePerPerson = packageData ? packageData.price : 0;

    const taxesFees = 150;
    const discounts = 50;
    const totalTravelers = familyMembers.length + 1; // +1 for primary traveler
    const baseFare = pricePerPerson * totalTravelers;
    const finalAmount = baseFare + taxesFees - discounts;

    // --- 6. Handle Proceed ---
    const handleProceed = () => {
        // Save form data to session storage
        sessionStorage.setItem("primaryTraveler", JSON.stringify(primaryTraveler));
        sessionStorage.setItem("familyMembers", JSON.stringify(familyMembers));
        sessionStorage.setItem("specialRequest", specialRequest);
        sessionStorage.setItem("travelDate", travelDate);

        // Save package/price data for Payment page
        sessionStorage.setItem("packageId", id);
        sessionStorage.setItem("packageTitle", packageData ? packageData.title : "");
        sessionStorage.setItem("packagePrice", pricePerPerson); // MUST save this for Payment page
        sessionStorage.setItem("totalAmount", finalAmount);
        sessionStorage.setItem("travelers", totalTravelers);

        navigate("/user/payment");
    };

    return {
        packageData,
        loading,
        primaryTraveler,
        updatePrimaryDetail,
        familyMembers,
        addMember,
        removeMember,
        updateMember,
        specialRequest,
        setSpecialRequest,
        travelDate,
        setTravelDate,
        priceDetails: {
            totalTravelers,
            basePrice: baseFare,
            taxesFees,
            discounts,
            finalAmount
        },
        handleProceed,
    };
}
