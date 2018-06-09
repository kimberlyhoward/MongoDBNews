var express = require("express");
var exphandle = require("express-handlebars");
var mongoose = require("mongoose");
var bodyparse = require("body-parser");

// call express and init.
var app = express();

app.listen (3000, function(){
    console.log("listen");
});

app.get ("/", (req, res) => {res.send ("Hello")}
);

