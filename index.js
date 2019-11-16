var express = require("express");
var emproutes = require("./emp");
var adminroutes = require("./admin");
var app = new express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use("/employees",emproutes);
app.use("/admins",adminroutes);


app.listen(9000,function(){
    console.log("server started");
})
