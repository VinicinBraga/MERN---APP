require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3001;

const CustomerModel = require("./models/Customer");

app.use(express.json());
app.use(cors());

mongoose.connect(
  `mongodb+srv://vinicin:${process.env.DB_PASSWORD}@custumers-data.efxekgr.mongodb.net/customers?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {
  const customer = new CustomerModel({
    name: "Vinícius Braga Matta",
    phone: 99999999,
    email: "vini@teste.com",
    address: {
      street: "street teste",
      number: 20,
      district: "district teste",
      city: "city teste",
      state: "state teste",
      country: "country teste",
    },
  });
  try {
    await customer.save();
    res.send("insert data");
  } catch (err) {
    console.log(err);
  }
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
