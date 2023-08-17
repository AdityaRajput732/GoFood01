const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const mongoDB = require("./db");
mongoDB();
const port = process.env.PORT;

// const dotenv = require("dotenv");

// dotenv.config();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));
// app.use("/api", require("./Routes/foodData"));
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
