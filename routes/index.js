const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// redirection after sign up. 
// router.route("/")
//     .get(function(req, res) {

//         if (req.user) {
//             res.redirect("/members");
//         }
//     });

module.exports = router;