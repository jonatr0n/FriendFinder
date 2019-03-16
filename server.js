// Server is where we push node / express commands

// Require express and run through local port 3000
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

// data parser
// connects middleware here, removed .apply, was causing issues
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing for the html and api
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Console.log the port number in terminal
app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});
