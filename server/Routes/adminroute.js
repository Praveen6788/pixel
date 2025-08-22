const express = require("express")
const {verifyadmin} = require("../controllers/verifyadmin")
const route = express.Router()

route.post("/",verifyadmin)

module.exports =route