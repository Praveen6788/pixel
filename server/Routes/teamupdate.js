const express = require("express");
const { createteam } = require("../controllers/teamupdate");

const router = express.Router();

// Route to create a new team member
router.post("/", createteam);

module.exports = router;






// // teamupdate.js
// const express = require('express');
// const router = express.Router();

// // Route handler must be a function
// router.post('/api/image', (req, res) => {
//   const { imgUrl } = req.body;

//   if (!imgUrl) {
//     return res.status(400).json({ error: 'Image URL is required' });
//   }

//   // Mock save logic here (replace with DB logic if needed)
//   console.log('Received image URL:', imgUrl);

//   res.status(201).json({ message: 'Image saved successfully' });
// });

// module.exports = router;
