// pull in required dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// configure the express application
var app = express();
var PORT = process.env.PORT;

// expose the public directory to acess CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// add the application routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// start listening on PORT
app.listen(PORT, function() {
    console.log('Friend Finder app is listening on PORT: ' + PORT);
});