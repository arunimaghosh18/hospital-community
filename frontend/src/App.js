import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/patients")
            .then(response => {
                setPatients(response.data);
            })
            .catch(error => {
                console.error("Error fetching patients:", error);
            });
    }, []);

    return (
        <div>
            <h1>Hospital Community</h1>
            <ul>
                {patients.map((patient) => (
                    <li key={patient.id}>{patient.name} (Age: {patient.age})</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
