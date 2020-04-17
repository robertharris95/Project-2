const router = require("express").Router();
const registerRoutes = require("./register");
const logInRoutes = require("./login");
const registerController = require("../../controllers/registerController");

router.use("/register", registerRoutes);

router.use("/login", logInRoutes);

router.route("/user_data")
    .get((req, res) => {
        if (!req.user) {
            res.json({});
        } else {
            res.json({
                _id: req.user._id,
                name: req.user.firstName + " " + req.user.lastName,
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

router.route("/my_users")
    .get(registerController.getCompanyUsers);

router.route("/my_contracts")
    .get(registerController.getCompanyContracts);

module.exports = router;