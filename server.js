/**
 * Created by naimi on 2/8/17.
 */

var express = require("express");
var path = require("path");

var app  = express();

app.set("views", path.join(__dirname,"view"));
app.set("view engine", "ejs");
+
app.get("/", function (req, res) {
   res.render("index");
});

app.listen(3000);
