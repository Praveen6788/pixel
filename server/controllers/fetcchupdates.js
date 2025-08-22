const update = require("../models/updates");

const fetchupdates = async (req, res) => {
  try {
    const updates = await update.find();
    res.status(200).json({ success: true, data: updates });
  } catch (err) {
    console.error("Error fetching updates:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


module.exports={fetchupdates}