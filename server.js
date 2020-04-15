const express = require("express");
const routes = require("./routes");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("./config/passport");
// const io = require("socket.io")(app); @@todo.

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: "we sail", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/contractbay");

app.listen(PORT, () => {
    console.log(`API server listening on PORT: ${PORT}.`);
});

// module.exports = io; @@ todo.