const app = require("express")();
const http = require("http").Server(app);
const morgan = require("morgan");
const io = require("socket.io")(http);

app.use(morgan("dev"));

io.on("connection", function(socket) {
  socket.on("chat_msg", function(msg) {
    console.log("Msg receive:", msg);
  });
  socket.on("disconnect", function() {});

  socket.emit("hi", "everyone");
});

io.of("/room").on("connection", function(socket) {
  socket.emit("room_msg", "hi room");

  // socket.on("greet", msg => console.log(msg));
});

http.listen(8080);
