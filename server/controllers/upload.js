// controllers/upload.js
const Image = require("../models/image");

const createimg = async (req, res) => {
  const { imgUrl } = req.body;

  if (!imgUrl) {
    return res.status(400).json({ success: false, message: "imgUrl is required" });
  }

  try {
    const newImage = await Image.create({ imgUrl });
    res.status(201).json({ success: true, image: newImage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { createimg }; // ✅ Export as an object
