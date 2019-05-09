// require model functions
var db = require("../models");

// exports routes to be used in server.js
module.exports = app => {

  // route to pull all info 
  app.get("/api/burgers", function (req, res) {
    db.Burgers.findAll({})
      .then(dbBurgers => res.json(dbBurgers))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // route to add new burgers
  app.post("/api/burgers", function (req, res) {
    db.Burgers.create(req.body)
      .then(dbBurgers => res.json(dbBurgers))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  })
  // route to update exsisting burgers
  app.put("/api/burgers/:id", function (req, res) {
    db.Burgers.update( {devoured: req.body.devoured}, {
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

