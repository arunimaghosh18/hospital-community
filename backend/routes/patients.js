import axios from 'axios';

const API_URL = 'http://localhost:5000/api/patients'; // Backend URL

// Function to fetch all patients
export const fetchPatients = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching patients:", error);
        return [];
    }
};

// Function to add a new patient
export const addPatient = async (patientData) => {
    try {
        const response = await axios.post(API_URL, patientData);
        return response.data;
    } catch (error) {
        console.error("Error adding patient:", error);
    }
};
