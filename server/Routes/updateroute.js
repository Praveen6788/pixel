const express = require("express")
const { updating } = require("../controllers/update");
const {fetchupdates}=require("../controllers/fetcchupdates")
const router = express.Router();

router.post("/", updating);
router.get("/",fetchupdates)

module.exports = router;
