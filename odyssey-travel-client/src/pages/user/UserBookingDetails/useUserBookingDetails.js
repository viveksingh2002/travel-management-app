import { useState, useEffect } from "react";
import axios from "axios";

export default function useUserBookingDetails() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // this would come from auth context
    const userId = Number(sessionStorage.getItem("userId")) || 2;

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8080/api/bookings/user/${userId}`);

            const sortedBookings = response.data.sort((a, b) => {

                return b.bookingId - a.bookingId;
            });
            setBookings(sortedBookings);
            setError(null);
        } catch (err) {
            console.error("Error fetching bookings:", err);
            setError("Failed to load bookings. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return {
        bookings,
        loading,
        error,
        refreshBookings: fetchBookings
    };
}
