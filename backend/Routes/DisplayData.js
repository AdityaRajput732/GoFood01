const express = require("express");
const router = express.Router();

router.get("/foodData", (req, res) => {
  try {
    // console.log(global.foodData);
    // console.log(global.foodCategory);
    res.send([global.foodData, global.foodCategory]);
  } catch (err) {
    console.error(err.message);
    res.send("Server Error");
  }
});
module.exports = router;
