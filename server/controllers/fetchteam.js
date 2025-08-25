const team = require("../models/team");

const fetchteam = async (req, res) => {
  try {
    const data = await team.find();
    console.log(data);
    res.status(200).json({ success: true, data: data });
  } catch (e) {
    console.log(e);
    res
      .status(400)
      .json({ success: false, message: "erroe with controller code" });
  }
};
module.exports = { fetchteam };
