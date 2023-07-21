const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");

router.post("/orderData", async (req, res) => {
  let data = req.body.order_data;
  console.log("data", data);
  await data.splice(0, 0, { Order_date: req.body.order_date });

  let eld = await Order.findOne({ email: req.body.email });
  console.log("eld", eld);
  if (eld === null) {
    try {
      await Order.create({
        email: req.body.email,
        order_data: [data],
      }).then(() => {
        res.json({ success: true });
      });
    } catch (err) {
      console.log("error", err.message);
      res.send("Server Error", err.message);
    }
  } else {
    try {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      ).then(() => {
        res.json({ success: true });
      });
    } catch (err) {
      res.send("Server Error", err.message);
    }
  }
});

router.post("/myorderData", async (req, res) => {
  try {
    let myData = await Order.findOne({ email: req.body.email });
    res.json({ orderData: myData });
  } catch (err) {
    res.status(400).send("Server Error", err.message);
  }
});
module.exports = router;
