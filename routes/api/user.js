const router = require("express").Router();
const registerController = require("../../controllers/registerController");

router.route("/")
    .get(registerController.getCompanyUsers);

router.route("/:id")
    .delete(registerController.removeUser);

module.exports = router;