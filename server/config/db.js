const mongoose = require("mongoose");
require("dotenv").config(); // ✅ MUST come before accessing process.env

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.name}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // stop server if DB fails
  }
};

module.exports = connectdb;
