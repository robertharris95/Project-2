const db = require("../models");
const passport = require("../config/passport");

module.exports = {
    logIn: function(req, res) {
        const { email, password } = req.body;

        passport.authenticate("local", function(req, res))
    }
}