const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  createdAt: String,
});

module.exports = mongoose.model("Post", postSchema);
