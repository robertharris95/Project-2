const io = require("./server");

io.on("connection", function(socket) {
    socket.on("chat message", function() {
        $("#m").innerHTML("Register Success.");
        console.log("registration success");
    });
});