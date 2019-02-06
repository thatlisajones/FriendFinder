// var express = require("express");
// var bodyParser = require("body-parser");

// var apiRoutes = require("./app/routing/apiRoutes");
// var htmlRoutes = require("./app/routing/htmlRoutes");

// var app = express();
// var PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// apiRoutes(app);
// htmlRoutes(app);

// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });



var express = require("express");

var app = express();


var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
