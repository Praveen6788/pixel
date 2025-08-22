const mongoose = require("mongoose"); // ✅ Fixed typo

const imgSchema = new mongoose.Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    }
  },
  {
    collection: "Gallery" // ✅ Optional: forces collection name if you don't want "pixeliares"
  }
);

module.exports = mongoose.model("Gallery", imgSchema); // ✅ CommonJS export
