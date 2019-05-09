// require model functions 
const burger = require("../models/burger");

// export routes
module.exports = app => {
  
  // GET route to retrieve all burgers in db 
  app.get("/api/burgers", function(req, res) {
    burger.findAll()
    .then(dbBurgers => res.json(dbBurgers))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

  // POST route to add new burgers 
  app.post("/api/burgers", function(req, res) {
    burger.create(req.body)
    .then(dbBurgers => res.json(dbBurgers))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

  // PUT route to update devoured property in existing burgers 
  app.put("/api/burgers/:id", function(req, res) {
    burger.update(req.body.devoured, req.params.id)
    .then(dbBurgers => res.json(dbBurgers))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });
}