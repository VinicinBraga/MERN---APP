const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  phone: {
    type: Number,
  },

  email: {
    type: String,
    lowercase: true,
  },

  address: {
    zipcode: Number,
    street: String,
    number: Number,
    district: String,
    city: String,
    state: String,
    country: String,
  },

  details: {
    type: String,
  },
});

const Costumer = mongoose.model("Customer-Data", CustomerSchema);
module.exports = Costumer;
