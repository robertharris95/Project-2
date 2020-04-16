const router = require("express").Router();
const registerRoutes = require("./register");
const logInRoutes = require("./login");
const registerController = require("../../controllers/registerController");
// const passport = require("../../config/passport");

router.use("/register", registerRoutes);

router.use("/login", logInRoutes);

router.route("/user_data")
    .get((req, res) => {
        // console.log("@@req.user (get route)", req.user); contains all the loging in user data.
        if (!req.user) {
            res.json({});
        } else {
            res.json({
                _id: req.user._id,
                email: req.user.email,
                companyId: req.user.companyId,
                admin: req.user.admin
            });
        }
    });

router.route("/company")
    .get(registerController.queryCompany)
    .post(registerController.saveContract);

module.exports = router;