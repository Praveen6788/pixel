const Admin = require("../models/admin");

const verifyadmin = async (req, res) => {
  const { data } = req.body;
  if (!data) {
    console.log("data is empty");
    return res.status(400).json({ success: false, message: "data required" });
  }
  
  try {
    const ad = await Admin.findOne({ email: data.email });
    if (!ad) {
      console.log("admin user not found");
      return res.status(404).json({ success: false, message: "admin user not found" });
    }

    const match = ad.password === data.password;
    console.log("verified");

    if (!match) {
      return res.status(401).json({ success: false, message: "incorrect password" });
    }

    return res.status(200).json({ success: true, message: "admin verified" });
    
  } catch (e) {
    console.log(e);
    return res.status(500).json({ success: false, message: "server error" });
  }
};

module.exports = { verifyadmin };
