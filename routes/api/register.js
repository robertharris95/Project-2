const router = require("express").Router();
const registerController = require("../../controllers/registerController");

router.route("/")
    .post(registerController.createCompany);

module.exports = router;