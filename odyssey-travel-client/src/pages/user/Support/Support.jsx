import React, { useEffect, useState } from "react";
import axios from "axios";

const Support = () => {
  // TEMP: replace later with logged-in user id
  const userId = 1;

  // Form state
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("LOW");

  // Data state
  const [tickets, setTickets] = useState([]);

  // UI state
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ================= FETCH USER TICKETS =================
  const fetchTickets = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:8080/api/support/user/${userId}`
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

  // ================= RAISE TICKET =================
  const raiseTicket = async () => {
    if (!subject || !description) {
      setErrorMessage("Subject and description are required.");
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:8080/api/support", null, {
        params: {
          userId,
          subject,
          description,
          priority,
        },
      });

      setSuccessMessage("Ticket raised successfully 🎉");
      setErrorMessage("");
      setSubject("");
      setDescription("");
      setPriority("LOW");

      fetchTickets();
    } catch (err) {
      console.error("Raise ticket error:", err);
      setErrorMessage("Failed to raise ticket. Please try again.");
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
    <div style={{ padding: "20px", maxWidth: "800px" }}>
      <h2>User Support</h2>

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

      {/* ================= RAISE TICKET FORM ================= */}
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          marginBottom: "20px",
        }}
      >
        <h3>Raise Ticket</h3>

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ marginBottom: "10px", padding: "6px" }}
        >
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </select>

        <br />

        <button onClick={raiseTicket} disabled={loading}>
          {loading ? "Submitting..." : "Raise Ticket"}
        </button>
      </div>

      {/* ================= TICKET LIST ================= */}
      <h3>Your Tickets</h3>

      {loading && <p>Loading...</p>}

      {!loading && tickets.length === 0 && <p>No tickets found.</p>}

      {tickets.map((ticket) => (
        <div
          key={ticket.ticketId}
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            marginBottom: "10px",
          }}
        >
          <p><strong>Subject:</strong> {ticket.subject}</p>
          <p><strong>Description:</strong> {ticket.description}</p>
          <p><strong>Status:</strong> {ticket.status}</p>
          <p><strong>Priority:</strong> {ticket.priority}</p>
          <p>
            <strong>Created:</strong>{" "}
            {new Date(ticket.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Support;
