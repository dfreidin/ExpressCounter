const express = require("express");
const session = require("express-session");
const app = express();
app.use(session({secret: "swordfish", resave: true, saveUninitialized: true}));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.get("/", function(req, res){
    if(!req.session["count"]) {
        req.session["count"] = 0;
    }
    req.session.count++;
    res.render("index", {count: req.session.count})
});
app.get("/plus2", function(req, res){
    if(!req.session["count"]) {
        req.session["count"] = 0;
    }
    req.session.count++;
    res.redirect("/");
});
app.get("/reset", function(req, res){
    req.session.count = 0;
    res.redirect("/");
});
app.listen(8000);