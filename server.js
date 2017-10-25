// require express, body-parser and path
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var jquery = require("jquery");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set up routes
var htmlRoutes = require("./app/routing/htmlRoutes.js")
var apiRoutes = require("./app/routing/apiRoutes.js")

htmlRoutes.routeToHome(app);
htmlRoutes.routeToSurvey(app);

apiRoutes(app);

// import data from friends.js
var friends = require('./app/data/friends.js')








// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});