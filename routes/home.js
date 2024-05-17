const express = require("express");
const router = express.Router();

// desc        GET Homepage
// route       http://localhost:5000/
router.get("/", (req, res) => {
  try {
    res.send(
      "<div><h1>Hello World!</h1><p> Welcome to <strong>ReelRush</strong></p></div>"
    );
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
