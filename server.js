var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
//var home = require('./views/home.html');
var app = express();

app.use(express.static('public'));
// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send('./views/home.html');
});

app.get("/about", (req, res) => {
    res.send('./views/about.html');
});


// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, function(){
    console.log("Express http server listening on 8080");
});