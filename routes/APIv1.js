/**
 * Created by naimi on 2/8/17.
 */
var express = require("express");
var jsonStream = require("express-jsonstream");
var fs = require("fs");
var path = require("path");


var APIv1 = express.Router();
const DATA = path.join(__dirname,"../data/products.json");
var stream = "";


//Promise on reading file asynchronously
var readFilePromise = new Promise(function (resolve, reject) {
    fs.readFile(DATA,'utf8',function (err,data) {
        if(err)
            reject(err);
        else{
            resolve(data);
        }
    });
});


APIv1.get("/produits", function (req, res) {
    //read data asynchronously with a promise
    res.format({

        "application/json": function () {
            readFilePromise.then(
                function (data) {
                    res.json(data);
                },
                function (err) {
                    res.json(err);
                });

            },
            "application/octet-stream": function () {
                readFilePromise.then(
                    function (data) {
                        stream = fs.createReadStream(DATA);
                        stream.on('data', function(data) {
                            res.write(data);
                        });

                        stream.on('end', function() {
                            res.end();
                        });
                    },
                    function (err) {
                        res.send(err);
                    }
                )
            }
    });

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