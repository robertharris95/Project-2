const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("./config/passport");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "we sail", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// require("./routes/html-routes")(app);    //GET NEW ROUTES.
// require("./routes/api-routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/contractbay");

app.listen(PORT, () => {
    console.log(`API server listening on PORT: ${PORT}.`);
});