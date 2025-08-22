const express = require("express")
const { updating } = require("../controllers/update");

const router = express.Router();

router.post("/", updating);

module.exports = router;
