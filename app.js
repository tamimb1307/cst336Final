const express = require("express");
const app = express();
const request = require("request");
const pool = require("./dbPool.js");

//express setup
app.set("view engine", "ejs");
app.use(express.static("public"));

//declares the port and IP for localhost and global
var port = process.env.PORT || 8080;
var ip = process.env.IP || "127.0.0.1";

//default route
app.get("/", function (req, res) {
    res.render("index");
});

app.get("/login", function (req, res) {
    res.render("login")
})

app.get("/adminMenu", function (req, res){
    res.render("adminMenu");
})


//Starting the web server
//NOte can't put in other info or heroku won't work
app.listen(port, ip,
    function () {
        console.log("Express server is running");
    });

/* app.listen(process.env.PORT, process.env.IP,
    function () {
        console.log("Express server is running");
    }); */