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
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: {
      zipCode: req.body.zipCode,
      street: req.body.street,
      number: req.body.number,
      district: req.body.district,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
    },
    description: req.body.description,
  });
  try {
    await customer.save();
    res.send("insert data");
  } catch (err) {
    console.log(err);
  }
});

app.get("/read", async (req, res) => {
  CustomerModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
