// require model functions
var db = require("../models");

// exports for use in server.js
module.exports = (app) => {
  
  app.get("/", function(req, res){

    db.Burgers.findAll()
      .then(dbBurgers => {
        res.render("index", {burgerData: dbBurgers})
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}