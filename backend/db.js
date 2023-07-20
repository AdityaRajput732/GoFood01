const mongoose = require("mongoose");

// const mongoURI =
//   "mongodb://aadi:SaVygwHoLUQzEfHP@ac-otxsgp4-shard-00-00.zv3hhvv.mongodb.net:27017,ac-otxsgp4-shard-00-01.zv3hhvv.mongodb.net:27017,ac-otxsgp4-shard-00-02.zv3hhvv.mongodb.net:27017/gofood?ssl=true&replicaSet=atlas-49iwsv-shard-0&authSource=admin&retryWrites=true&w=majority";
// const mongoURI =
//   "mongodb+srv://aadi:SaVygwHoLUQzEfHP@cluster0.zv3hhvv.mongodb.net/gofood?retryWrites=true&w=majority";

const mongoDB = () => {
  mongoose
    .connect(process.env.BACK_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected");
      const foodDataPromise = mongoose.connection.db
        .collection("foodData")
        .find({})
        .toArray();
      const foodCategoryPromise = mongoose.connection.db
        .collection("foodCategory")
        .find({})
        .toArray();
      Promise.all([foodDataPromise, foodCategoryPromise])
        .then(([foodData, foodCategory]) => {
          global.foodData = foodData;
          global.foodCategory = foodCategory;
          // console.log("Food data:", foodData);
          //   console.log("Food category:", global.foodCategory);
        })
        .catch((error) => {
          console.log("Error while fetching data:", error);
        });
    })
    .catch((err) => console.log(err));
};

module.exports = mongoDB;
