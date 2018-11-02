const router = require("express").Router()
const path = require("path");

router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// All other paths serve the home.html page
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// export router 
module.exports = router;