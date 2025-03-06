import { useState, useEffect } from "react";

function Appointments({ user }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Load appointments from localStorage on component mount
    const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(savedAppointments);
  }, []);

  const saveAppointments = (newAppointments) => {
    setAppointments(newAppointments);
    localStorage.setItem("appointments", JSON.stringify(newAppointments)); // Persist appointments
  };

  const addAppointment = () => {
    if (!user || !user.username || !user.role) {
      alert("User is not logged in!");
      return;
    }

    const newAppointment = {
      doctor: user.role === "doctor" ? user.username : "Dr. Smith",
      patient: user.role === "patient" ? user.username : "John Doe",
      date: new Date().toLocaleDateString(),
    };

    const updatedAppointments = [...appointments, newAppointment];
    saveAppointments(updatedAppointments);
  };

  return (
    <div>
      <h2 style={{ color: '#282c34' }}>Appointments</h2>

      <button
        onClick={addAppointment}
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#61dafb',
          color: '#fff',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#21a1f1')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#61dafb')}
      >
        Book Appointment
      </button>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {appointments.length === 0 ? (
          <p>No appointments booked yet.</p>
        ) : (
          appointments.map((appt, index) => (
            <li key={index} style={{ margin: '10px 0' }}>
              {appt.patient} has an appointment with {appt.doctor} on {appt.date}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Appointments;
