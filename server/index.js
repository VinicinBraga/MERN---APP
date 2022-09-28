require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001;

const FoodModel = require("./models/Food");

app.use(express.json());

mongoose.connect(
  `mongodb+srv://vinicin:${process.env.DB_PASSWORD}@mern.dtjgsbz.mongodb.net/food?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  const food = new FoodModel({ foodName: "Apple", daysSinceIAte: 3 });
  try {
    await food.save();
    res.send("insert data");
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
