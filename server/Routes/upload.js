// routes/upload.js
const express = require("express");
const { createimg } = require("../controllers/upload"); // ✅ Correct import
const {fetchimg}=require("../controllers/fetchimg")
const router = express.Router();

router.post("/", createimg); // ✅ This is a valid function


router.get("/",fetchimg)

module.exports = router;
