const mongoose = require("mongoose");

const emprunt = mongoose.model( "emprunt",{

  livre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Livre",
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  date_emprunt: {
    type: Date,
    default: Date.now,
  },
  date_retour: {
    type: Date,
  },
});

module.exports = emprunt
