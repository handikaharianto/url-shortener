const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  url: {
    type: String,
    required: [true, "URL cannot be empty!"],
    trim: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Url", urlSchema);
