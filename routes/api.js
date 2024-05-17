const express = require("express");
const router = express.Router();
const data = require("../data");
const Post = require("../model/post.js");

// desc        GET posts
// route       http://localhost:5000/api/posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err);
  }
});

// desc        GET  single post
// route       http://localhost:5000/api/posts/id
router.get("/posts/:id", (req, res) => {
  try {
    const { id } = req.params;
    const post = data.find((post, i) => i === Number(id));

    if (post) {
      res.json(post);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.error(err);
  }
});

// desc        POST  add post
// route       http://localhost:5000/api/posts/newPost
router.post("/posts/newPost", async (req, res) => {
  try {
    const newPost = req.body;
    await Post.create(newPost);

    console.log("Created new Post successfully");
    res.send("Created new Post successfully");
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

module.exports = router;
