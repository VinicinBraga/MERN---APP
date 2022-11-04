require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3001;

const CustomerModel = require("./models/Customer");
const { updateOne } = require("./models/Customer");

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

app.put("/update", async (req, res) => {
  id = req.body.id;
  newName = req.body.newName;
  newPhone = req.body.newPhone;
  newEmail = req.body.newEmail;
  newZipCode = req.body.address.newZipCode;
  newStreet = req.body.address.newStreet;
  newNumber = req.body.address.newNumber;
  newDistrict = req.body.address.newDistrict;
  newCity = req.body.address.newCity;
  newState = req.body.address.newState;
  newCountry = req.body.address.newCountry;
  newDescription = req.body.newDescription;
  try {
    await CustomerModel.findById(id, (err, updateCustomer) => {
      updateCustomer.name = newName;
      updateCustomer.phone = newPhone;
      updateCustomer.email = newEmail;
      updateCustomer.zipCode = newZipCode;
      updateCustomer.street = newStreet;
      updateCustomer.number = newNumber;
      updateCustomer.district = newDistrict;
      updateCustomer.state = newState;
      updateCustomer.city = newCity;
      updateCustomer.country = newCountry;
      updateCustomer.description = newDescription;
      updateCustomer.save();
      res.send("updated");
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
