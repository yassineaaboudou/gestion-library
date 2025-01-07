const mongoose = require("mongoose");

const livre = mongoose.model("livre", {
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  stock: {
    type: Number,
    required: true,
    min : 0
  },
});

module.exports = livre;
