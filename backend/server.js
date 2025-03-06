const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

let users = [
  { id: 1, username: "doctor", password: "doc123", role: "doctor" },
  { id: 2, username: "patient", password: "pat123", role: "patient" },
];

let appointments = [];

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    res.json({ message: "Login successful", user });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.post("/api/appointments", (req, res) => {
  const { patientName, doctorName, date, time } = req.body;
  const newAppointment = { id: appointments.length + 1, patientName, doctorName, date, time };
  appointments.push(newAppointment);
  res.json({ message: "Appointment added successfully", appointment: newAppointment });
});

app.get("/api/appointments", (req, res) => {
  res.json(appointments);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
