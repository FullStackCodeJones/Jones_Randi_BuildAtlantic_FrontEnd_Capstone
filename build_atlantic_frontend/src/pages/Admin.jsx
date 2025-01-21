// src/pages/Admin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAdmin, loginAdmin } from "../utils/Auth";

const Admin = () => {
  if (!isAdmin()) {
    return (
      <div>Access Denied: You need admin privileges to access this page.</div>
    );
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    const success = loginAdmin(email, password);
    if (success) {
      navigate("/admin"); // Redirect to admin dashboard
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Admin Sign-In</button>
      </form>
    </div>
  );
};

export default Admin;
