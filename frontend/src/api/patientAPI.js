import axios from "axios";

const API_URL = "http://localhost:5000/api/patients"; // Backend API endpoint

export const getPatients = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching patients:", error);
    return [];
  }
};
