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
  "mongodb+srv://vinicin:0800Vbnm@custumers-data.efxekgr.mongodb.net/customers?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  const customer = new CustomerModel({
    name: "Vinícius Braga Matta",
    phone: 0000 - 0000,
    email: "vini@teste.com",
    address: {
      street: "street teste",
      number: 00,
      district: "district teste",
      city: "city teste",
      state: "state teste",
      country: "country teste",
    },
    details: "datails teste",
  });
  try {
    await customer.save();
  } catch (err) {
    console.log(err);
  }
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
