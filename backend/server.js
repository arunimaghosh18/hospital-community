const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Patients Route
app.get("/api/patients", (req, res) => {
    res.json([{ id: 1, name: "John Doe", age: 30 }]);
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
