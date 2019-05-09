// import dependencies 
const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;

// db for sequelize
var db = require("./models");

// set up necessarily middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// tell server to ignore any requests being made to anything in the "public" folder
app.use(express.static("public"));

// set up templating engine
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// turn on routes
require("./routes/htmlRoutes")(app);
require("./routes/burgerRoutes")(app);

// set up 404 error route
app.get("*", function(req, res) {
  res.json({
    status: 404,
    message: "User Error!"
  });
});

app.listen(PORT, function () {
  console.log("Listening on PORT: " + PORT);
});

// initialize server
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});