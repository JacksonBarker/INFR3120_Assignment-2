var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { "title": "Portfolio Home" });
});

router.get("/about", function (req, res, next) {
  res.render("about", { "title": "About Me" });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { "title": "Contact Me" });
});

router.get("/projects", function (req, res, next) {
  res.render("projects", { "title": "My Projects" });
});

module.exports = router;
