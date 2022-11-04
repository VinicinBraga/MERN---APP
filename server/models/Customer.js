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
    zipCode: {
      type: Number,
    },

    street: {
      type: String,
    },

    number: {
      type: Number,
    },

    district: {
      type: String,
    },

    city: {
      type: String,
    },
    state: {
      type: String,
    },

    country: {
      type: String,
    },
  },

  description: {
    type: String,
  },
});

const Costumer = mongoose.model("Customer-Data", CustomerSchema);
module.exports = Costumer;
