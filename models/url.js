const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  url: {
    type: String,
    required: [true, "URL cannot be empty!"],
    trim: true,
    validate: {
      validator: (v) => {
        const regex =
          /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
        return regex.test(v);
      },
    },
  },
  slug: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Url", urlSchema);
