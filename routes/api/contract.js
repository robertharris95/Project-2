const router = require("express").Router();
const registerController = require("../../controllers/registerController");


router.route("/")
    .get(registerController.getCompanyContracts);

router.route("/:id")
    .delete(registerController.removeContract);

module.exports = router;