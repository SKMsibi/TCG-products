var express = require("express");
//var bodyParser = require("body-parser");

var app = express();
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("testing");
});

app.listen(3003, () => {
  console.log("server running on localhost:3000 ");
});
