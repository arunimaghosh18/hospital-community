const express = require("express");
const router = express.Router();
const fs = require("fs");

// Load patient data
const patients = JSON.parse(fs.readFileSync("./models/patients.json"));

// Get all patients
router.get("/", (req, res) => {
    res.json(patients);
});

module.exports = router;
