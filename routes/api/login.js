const router = require("express").Router();
const passport = require("../../config/passport");
// const logInController = require("../../controllers/")

router.route("/")
    .post(
        passport.authenticate("local"), function(req ,res) {
        res.json(req.user);
    });

module.exports = router;

// (req, res) => {
//     console.log("logIn");
//     // req.session.username = req.body.email;
//     // res.end();
    
// }