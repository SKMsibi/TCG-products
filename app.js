var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.get("/data", (req, res) => {
  console.log(req.body)
});


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));


app.post("/data", (req, res) => {
  res.send("Request success");
  console.log(req.body)
});

app.listen(3003, () => {
  console.log("server running on localhost:3003 ");
});