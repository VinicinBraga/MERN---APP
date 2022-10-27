const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  phone: {
    type: Number,
    require: true,
  },

  email: {
    type: String,
    lowercase: true,
    required: true,
  },

  address: {
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
