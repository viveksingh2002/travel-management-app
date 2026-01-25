import React, { useEffect, useState } from "react";
import axios from "axios";

const Support = () => {
  // ⚠️ TEMP: later replace with logged-in user id
  const userId = 1;

  // -------------------- STATE --------------------
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    subject: "",
    description: "",
    priority: "LOW",
  });

  // -------------------- FETCH USER TICKETS --------------------
  const fetchTickets = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:8080/api/support/user/${userId}`
      );
      setTickets(response.data);
      setError("");
    } catch (err) {
      setError("Failed to load support tickets");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  // -------------------- HANDLE FORM CHANGE --------------------
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // -------------------- RAISE TICKET --------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/support", null, {
        params: {
          userId: userId,
          subject: formData.subject,
          description: formData.description,
          priority: formData.priority,
        },
      });

      setFormData({
        subject: "",
        description: "",
        priority: "LOW",
      });

      fetchTickets();
      alert("Support ticket raised successfully!");
    } catch (err) {
      alert("Failed to raise ticket");
    }
  };

  // -------------------- UI --------------------
  return (
    <div style={{ padding: "20px" }}>
      <h2>User Support</h2>

      {/* -------- Raise Ticket Form -------- */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <div>
          <label>Subject</label>
          <br />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Description</label>
          <br />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Priority</label>
          <br />
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            style={{ padding: "8px" }}
          >
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Raise Ticket
        </button>
      </form>

      {/* -------- Ticket List -------- */}
      <h3>Your Tickets</h3>

      {loading && <p>Loading tickets...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && tickets.length === 0 && <p>No tickets found.</p>}

      {!loading &&
        tickets.map((ticket) => (
          <div
            key={ticket.ticketId}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <p>
              <strong>Subject:</strong> {ticket.subject}
            </p>
            <p>
              <strong>Description:</strong> {ticket.description}
            </p>
            <p>
              <strong>Status:</strong> {ticket.status}
            </p>
            <p>
              <strong>Priority:</strong> {ticket.priority}
            </p>
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
