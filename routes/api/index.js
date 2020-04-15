const router = require("express").Router();
const registerRoutes = require("./register");
const logInRoutes = require("./login");
// const passport = require("../../config/passport");

router.use("/register", registerRoutes);

router.use("/login", logInRoutes);

// router.route("/login")
//     .post(passport.authenticate("local"), function(req, res) {
//         res.json(req.user);
//     });

module.exports = router;