const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    message: {type: String, required: true},
    author: {type: String, required: true},
  },
  {timestamps: true}
);

module.exports = mongoose.model("Message", MessageSchema);
