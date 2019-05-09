// require model functions
var db = require("../models");

// exports routes to be used in server.js
module.exports = app => {

  // route to pull all info 
  app.get("/api/burgers", function (req, res) {
    db.Burger.findAll({})
      .then(dbBurgers => res.json(dbBurgers))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // route to add new burgers
  app.post("/api/burgers", function (req, res) {
    db.Burger.create(req.body)
      .then(dbBurgers => res.json(dbBurgers))
      .catch(err => {
        console.log(err);
        res.jason(err);
      });
  })
  // route to update exsisting burgers
  app.put("/api/burgers/:id", function (req, res) {
    db.Burger.update( {devoured: req.body.devoured}, {
        where: {
          id: req.params.id
        }
      })
      .then(dbBurgers => res.json(dbBurgers))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

}

