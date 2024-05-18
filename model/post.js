const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: Number,
  messages: Number,
  shares: Number,
  description: String,
  createdAt: String,
});

module.exports = mongoose.model("Post", postSchema);
