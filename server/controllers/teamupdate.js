const team = require("../models/team");

const createteam = async (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({
      success: false,
      message: "Data is required",
    });
  }

  try {
    const newdata = await team.create(data);
    console.log(newdata,"sucess")

    res.status(201).json({
      success: true,
      data: newdata,
    });
  } catch (error) {
    console.error("Error in createteam:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = { createteam };
