const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  url: {
    type: String,
    required: [true, "URL cannot be empty!"],
  },
  slug: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Url", urlSchema);
