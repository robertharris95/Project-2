// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    console.log(req);
    db.Product.findAll({
      include: [db.Company]
      // where: query
    }) 
    .then( (data) => { 
      console.log("Find all Data: @@@#@#@#@#@#@#@", data);   
      res.render("index", { product: data });
    });
  });

  app.get("/members/add", isAuthenticated, function(req, res) {
    if (!req.user) {
      res.redirect("/");
    }
    res.sendFile(path.join(__dirname, "../public/seller.html"));
  });
};