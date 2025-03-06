import { useState } from "react";

function Appointments({ user }) {
  const [appointments, setAppointments] = useState([]);

  const appointmentStyle = {
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


  const addAppointment = () => {
    const newAppointment = {
      doctor: user.role === "doctor" ? user.username : "Dr. Smith",
      patient: user.role === "patient" ? user.username : "John Doe",
      date: new Date().toLocaleDateString(),
    };
    setAppointments([...appointments, newAppointment]);
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

        {appointments.map((appt, index) => (
          <li key={index} style={{ margin: '10px 0' }}>

            {appt.patient} has an appointment with {appt.doctor} on {appt.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appointments;
