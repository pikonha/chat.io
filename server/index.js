const app = require("express")();
const morgan = require("morgan");

app.use(morgan("dev"));

const server = app.listen(3000, () => console.log("Server bound to port 3000"));
const io = require("socket.io")(server);

io.on("connection", function(socket) {
  socket.on("send_msg", function(msg) {
    // socket.emit("chat_msg", msg);
  });
});

io.of("/room").on("connection", function(socket) {
  socket.emit("room_msg", "hi room");

  // socket.on("greet", msg => console.log(msg));
});
