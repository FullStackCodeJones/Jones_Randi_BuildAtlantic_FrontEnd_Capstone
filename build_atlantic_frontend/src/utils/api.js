import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Function to handle POST requests (Registration)
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data; // return data from backend
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: "Something went wrong" };
  }
};

// Function to handle POST requests (Login)
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data; // return data from backend
  } catch (error) {
    throw error.response
      ? error.response.data
      : { message: "Something went wrong" };
  }
};

// Default export for the module
export default {
  register,
  login,
};
