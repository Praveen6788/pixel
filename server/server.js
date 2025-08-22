const express = require("express");
const mongoos = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const app = express();


const a = async () => {
  try {
    const conn = await mongoos.connect(process.env.MANGO_URI);
    if (conn) {
      console.log("MongoDB connected successfully");
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

a()


app.listen(process.env.PORT, () => {
  console.log("running sucessfully ");
});
