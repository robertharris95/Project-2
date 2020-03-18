const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const passport = require("./config/passport");

const app = express();
const db = require("./models");

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(session({ secret: "we sail", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

// require("ROUTES")

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, () => {
        console.log(`Server listening on: http://localhost:${PORT}`);
    });
});