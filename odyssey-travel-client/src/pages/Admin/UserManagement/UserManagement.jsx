import React, { useState, useEffect } from "react";


async function fetchUsers() {
  return [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", blocked: false },
    { id: 2, name: "Bob Smith", email: "bob@example.com", blocked: false },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", blocked: true },
  ];
}

async function blockUserApi(userId) {
  console.log(`User ${userId} blocked`);
  return true;
}

async function unblockUserApi(userId) {
  console.log(`User ${userId} unblocked`);
  return true;
}

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
      } catch {
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  const toggleBlockUser = async (userId, currentlyBlocked) => {
    try {
      setLoading(true);
      if (currentlyBlocked) {
        await unblockUserApi(userId);
      } else {
        await blockUserApi(userId);
      }
      setUsers((prev) =>
        prev.map((user) =>
          user.id === userId ? { ...user, blocked: !currentlyBlocked } : user
        )
      );
    } catch {
      setError("Failed to update user status");
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status" />
        <div>Loading users...</div>
      </div>
    );

  if (error)
    return (
      <div className="alert alert-danger text-center my-5" role="alert">
        {error}
      </div>
    );

  return (
    <div className="container my-4" style={{ maxWidth: "900px" }}>
      <h2 className="mb-4 text-center">User Management</h2>
      <table className="table table-striped table-hover shadow-sm">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center py-3">
                No users found.
              </td>
            </tr>
          ) : (
            users.map(({ id, name, email, blocked }) => (
              <tr key={id} className={blocked ? "table-danger" : ""}>
                <td>{id}</td>
                <td className="fw-semibold">{name}</td>
                <td>{email}</td>
                <td className={blocked ? "text-danger fw-bold" : "text-success fw-bold"}>
                  {blocked ? "Blocked" : "Active"}
                </td>
                <td>
                  <button
                    className={`btn btn-sm ${
                      blocked ? "btn-success" : "btn-danger"
                    }`}
                    onClick={() => toggleBlockUser(id, blocked)}
                    disabled={loading}
                  >
                    {blocked ? "Unblock" : "Block"}
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}