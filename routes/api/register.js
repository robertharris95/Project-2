const router = require("express").Router();
const registerController = require("../../controllers/registerController");

router.route("/company")
    .post(registerController.createCompany);

router.route("/user")
    .post(registerController.createUser);

module.exports = router;