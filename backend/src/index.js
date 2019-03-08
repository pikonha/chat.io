const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const morgan = require("morgan");

app.use(morgan("dev"));

io.on("connection", function(socket) {
  socket.on("chat_msg", function(msg) {
    io.emit("chat_msg", msg);
  });

  socket.on("disconnect", function() {});
});

http.listen(8080);
