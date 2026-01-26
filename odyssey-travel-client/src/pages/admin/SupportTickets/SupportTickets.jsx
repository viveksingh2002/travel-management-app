import React, { useEffect, useState } from "react";
import axios from "axios";

const SupportTickets = () => {
  // TEMP: admin id (later from auth)
  const adminId = 1;

  // State
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  // ================= FETCH ALL TICKETS =================
  const fetchTickets = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:8080/api/support/user/${adminId}`
      );
      setTickets(res.data);
      setErrorMessage("");
    } catch (err) {
      console.error("Admin fetch tickets error:", err);
      setErrorMessage("Unable to load support tickets.");
    } finally {
      setLoading(false);
    }
  };

  // ================= UPDATE STATUS =================
  const updateStatus = async (ticketId, newStatus) => {
    try {
      setUpdatingId(ticketId);
      await axios.put(
        `http://localhost:8080/api/support/${ticketId}/status`,
        null,
        { params: { status: newStatus } }
      );
      setSuccessMessage("Ticket status updated successfully ✅");
      setErrorMessage("");
      fetchTickets();
    } catch (err) {
      console.error("Admin update status error:", err);
      setErrorMessage("Failed to update ticket status.");
      setSuccessMessage("");
    } finally {
      setUpdatingId(null);
    }
  };

  // ================= INITIAL LOAD =================
  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "1000px" }}>
      <h2>Admin – Support Tickets</h2>

      {/* ================= MESSAGES ================= */}
      {errorMessage && (
        <p style={{ color: "red", marginBottom: "10px" }}>
          {errorMessage}
        </p>
      )}

      {successMessage && (
        <p style={{ color: "green", marginBottom: "10px" }}>
          {successMessage}
        </p>
      )}

      {/* ================= TABLE ================= */}
      {loading && <p>Loading tickets...</p>}

      {!loading && tickets.length === 0 && (
        <p>No support tickets found.</p>
      )}

      {!loading && tickets.length > 0 && (
        <table
          border="1"
          cellPadding="8"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Subject</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Update Status</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.ticketId}>
                <td>{ticket.ticketId}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.description}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.status}</td>
                <td>
                  <select
                    value={ticket.status}
                    disabled={updatingId === ticket.ticketId}
                    onChange={(e) =>
                      updateStatus(ticket.ticketId, e.target.value)
                    }
                  >
                    <option value="OPEN">OPEN</option>
                    <option value="IN_PROGRESS">IN_PROGRESS</option>
                    <option value="RESOLVED">RESOLVED</option>
                    <option value="CLOSED">CLOSED</option>
                  </select>
                </td>
                <td>
                  {new Date(ticket.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SupportTickets;
