const express = require("express");
const connectdb = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const adminroute = require("./Routes/adminroute")
const uploadRoute = require("./Routes/upload"); // ✅ Correct path and name
const teamroute =require("./Routes/teamupdate")
const updateroute =require("./Routes/updateroute")
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/image", uploadRoute); // ✅ Mount the route
app.use("/api/team",teamroute); // ✅ Mount the route
app.use("/api/admin",adminroute)
app.use("/api/updates",updateroute)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectdb();
  console.log(`Server running on port ${PORT}`);
});
