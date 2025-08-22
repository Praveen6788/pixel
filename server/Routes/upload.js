// routes/upload.js
const express = require("express");
const { createimg } = require("../controllers/upload"); // ✅ Correct import

const router = express.Router();

router.post("/", createimg); // ✅ This is a valid function

module.exports = router;
