var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

// data parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});
