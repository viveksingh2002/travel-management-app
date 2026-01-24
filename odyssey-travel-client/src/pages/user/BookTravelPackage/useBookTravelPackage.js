import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const ageOptions = ["18-24 Years", "25-39 Years", "40-60 Years"];
export const genderOptions = ["Male", "Female", "Other"];
export const relationOptions = ["Spouse", "Sibling", "Parent", "Friend"];

export default function useBookTravelPackage() {
    const navigate = useNavigate();
    const { id } = useParams(); // Get package ID from URL

    // --- 1. Dynamic Package Data from Backend ---
    const [packageData, setPackageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPackageDetails = async () => {
            try {
                // Fetch specific package by ID
                const response = await axios.get(`http://localhost:8080/api/packages/${id}`);
                setPackageData(response.data);
            } catch (error) {
                console.error("Error fetching package details:", error);
            }
            setLoading(false);
        };

        if (id) {
            fetchPackageDetails();
        }
    }, [id]);

    // --- 2. Helper to Load Form from Session Storage ---
    const loadFromSession = (key, defaultValue) => {
        const saved = sessionStorage.getItem(key);
        return saved ? JSON.parse(saved) : defaultValue;
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

    // --- 4. Logic Handlers ---
    const updatePrimaryDetail = (field, value) => {
        setPrimaryTraveler((prev) => ({ ...prev, [field]: value }));
    };

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
    const totalTravelers = familyMembers.length;
    const basePrice = pricePerPerson * totalTravelers;
    const finalAmount = basePrice + taxesFees - discounts;

    // --- 6. Handle Proceed ---
    const handleProceed = () => {
        // Save current form state to session
        sessionStorage.setItem("primaryTraveler", JSON.stringify(primaryTraveler));
        sessionStorage.setItem("familyMembers", JSON.stringify(familyMembers));
        sessionStorage.setItem("specialRequest", JSON.stringify(specialRequest));

        // Also save the package price for the payment page
        sessionStorage.setItem("packagePrice", pricePerPerson);
        sessionStorage.setItem("packageTitle", packageData ? packageData.title : "Package");

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
        priceDetails: {
            totalTravelers,
            basePrice,
            taxesFees,
            discounts,
            finalAmount
        },
        handleProceed,
    };
}
