import React, { useEffect, useState } from "react";
import axios from "axios";

const SupportTicket = () => {
  // TEMP: replace later with logged-in agent id
  const agentId = 1;

  // Data state
  const [tickets, setTickets] = useState([]);

  // UI state
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // ================= FETCH TICKETS =================
  const fetchTickets = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:8080/api/support/user/${agentId}`
      );
      setTickets(res.data);
      setErrorMessage("");
    } catch (err) {
      console.error("Fetch tickets error:", err);
      setErrorMessage("Unable to load tickets. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ================= UPDATE STATUS =================
  const updateStatus = async (ticketId, newStatus) => {
    try {
      setLoading(true);

      await axios.put(
        `http://localhost:8080/api/support/${ticketId}/status`,
        null,
        {
          params: { status: newStatus },
        }
      );

      setSuccessMessage("Ticket status updated successfully ✅");
      setErrorMessage("");
      fetchTickets();
    } catch (err) {
      console.error("Update status error:", err);
      setErrorMessage("Failed to update ticket status.");
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };

  // ================= INITIAL LOAD =================
  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "900px" }}>
      <h2>Agent Support Tickets</h2>

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

      {/* ================= TICKET LIST ================= */}
      {loading && <p>Loading...</p>}

      {!loading && tickets.length === 0 && (
        <p>No support tickets available.</p>
      )}

      {!loading &&
        tickets.map((ticket) => (
          <div
            key={ticket.ticketId}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "12px",
            }}
          >
            <p><strong>ID:</strong> {ticket.ticketId}</p>
            <p><strong>Subject:</strong> {ticket.subject}</p>
            <p><strong>Description:</strong> {ticket.description}</p>
            <p><strong>Priority:</strong> {ticket.priority}</p>
            <p><strong>Status:</strong> {ticket.status}</p>
            <p>
              <strong>Created:</strong>{" "}
              {new Date(ticket.createdAt).toLocaleString()}
            </p>

            {/* ================= STATUS UPDATE ================= */}
            <div style={{ marginTop: "10px" }}>
              <label>Update Status: </label>{" "}
              <select
                value={ticket.status}
                onChange={(e) =>
                  updateStatus(ticket.ticketId, e.target.value)
                }
              >
                <option value="OPEN">OPEN</option>
                <option value="IN_PROGRESS">IN_PROGRESS</option>
                <option value="RESOLVED">RESOLVED</option>
                <option value="CLOSED">CLOSED</option>
              </select>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SupportTicket;
