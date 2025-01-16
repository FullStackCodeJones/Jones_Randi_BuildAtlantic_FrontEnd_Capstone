// src/utils/Auth.js

// Check if the user has admin privileges
export const isAdmin = () => {
  // Mock authentication logic
  const user = { role: "admin" }; // Example user object
  return user.role === "admin"; // Returns true if the user is an admin
};

// Handle admin login logic
export const loginAdmin = (email, password) => {
  // Replace with actual validation logic
  const adminCredentials = {
    email: "admin@example.com",
    password: "BuildAtlantic2025!$",
  };

  return (
    email === adminCredentials.email && password === adminCredentials.password
  );
};
