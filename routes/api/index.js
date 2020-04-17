const router = require("express").Router();
const registerRoutes = require("./register");
const logInRoutes = require("./login");
const registerController = require("../../controllers/registerController");
// const passport = require("../../config/passport");

router.use("/register", registerRoutes);

router.use("/login", logInRoutes);

router.route("/user_data")
    .get((req, res) => {
        if (!req.user) {
            res.json({});
        } else {
            res.json({
                _id: req.user._id,
                email: req.user.email,
                companyId: req.user.companyId,
                admin: req.user.admin,
                companyName: req.user.companyName
            });
        }
    });

router.route("/company")
    .get(registerController.queryCompany)
    .post(registerController.saveContract);

router.route("/contract_data")
    .get(registerController.getContracts);

module.exports = router;