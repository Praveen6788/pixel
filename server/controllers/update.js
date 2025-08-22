const Update = require("../models/updates");

const updating = async (req, res) => {
  const data = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ 
      success: false, 
      message: "Data is required" 
    });
  }

  try {
    const newData = await Update.create(data);
    console.log("Inserted:", newData);

    return res.status(201).json({   // 201 Created is better for insert
      success: true,
      data: newData
    });
  } catch (e) {
    console.error("Error inserting update:", e.message);

    return res.status(500).json({
      success: false,
      message: "Failed to insert data into DB",
      error: e.message
    });
  }
};

module.exports = { updating };
