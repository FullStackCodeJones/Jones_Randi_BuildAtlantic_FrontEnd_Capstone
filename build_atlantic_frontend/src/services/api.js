import axios from "axios";

const API_URL = "http://localhost:5000";

export const getData = async () => {
    try {
        const response = await axios.get(`${API_URL}/data`);
        return response.data;
    } catch (error); {
    console.error("Error Fetching Data:", error);
    throw error;
}
};
const API_URL = import.meta.env.VITE_API_URL;

export const fetchPrograms = async () => {
  try {
    const response = await fetch(`${API_URL}/programs`);
    if (!response.ok) {
      throw new Error("Failed to fetch programs");
    }
    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
