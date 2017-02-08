/**
 * Created by naimi on 2/8/17.
 */
var express = require("express");

var APIv1 = express.Router();

APIv1.get("/produits", function (req, res) {
    //get the product
    res.render("showProducts");
});

APIv1.post("/addProduct", function (req, res) {
   // add the product in db
});

APIv1.put("/modifyProduct", function (req, res) {
   // modify the product
});

APIv1.delete("/deleteProduct", function (req,res) {
    // delete the product
});

module.exports = APIv1;