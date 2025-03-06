import { getPatients } from "../api/patientAPI"; // ✅ Correct path

import { useEffect, useState } from "react";

function PatientList() {
  const [patients, setPatients] = useState([]);

  const patientListStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };


  useEffect(() => {
    async function fetchPatients() {
      const data = await getPatients();
      setPatients(data);
    }
    fetchPatients();
  }, []);

  return (
    <div>
      <h2 style={{ color: '#282c34' }}>Patients List</h2>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {patients.map((patient) => (
          <li key={patient.id} style={{ margin: '10px 0' }}>
            {patient.name}
          </li>
        ))}
      </ul>



    </div>
  );
}

export default PatientList;
