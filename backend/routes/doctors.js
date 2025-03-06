const express = require("express");
const router = express.Router();
const fs = require("fs");

// Load doctor data
const doctors = JSON.parse(fs.readFileSync("./models/doctors.json"));

// Get all doctors
router.get("/", (req, res) => {
    res.json(doctors);
});

module.exports = router;
