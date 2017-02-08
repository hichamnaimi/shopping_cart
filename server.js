/**
 * Created by naimi on 2/8/17.
 */

var express = require("express");
var path = require("path");
var APIv1 = require("./routes/APIv1");

var app  = express();

app.set("views", path.join(__dirname,"view"));
app.set("view engine", "ejs");

//use the APIv1 routes
app.use("/api/v1", APIv1);

app.get("/", function (req, res) {
   res.render("index");
});

app.listen(3000);
