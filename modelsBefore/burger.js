// require connection.js
const connection = require("./connection");

// use the findAll function to retrieve all burgers currently in db
const findAll = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM burgers", function(err, dbBurgers) {
      if(err) {
        return reject(err);
      }
      return resolve(dbBurgers);
    });
  });
};

// use the create function to add a new burger
const create = burgerDataObj => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO burgers SET ?", [burgerDataObj], function(err, dbBurgers) {
      if(err) {
        return reject(err);
      }
      return resolve(dbBurgers);
    });
  });
};

// use the update function to change the devoured property to true when devoured 
const update = (devValue, burgerId) => {
  return new Promise((resolve, reject) => {
    devValue = (devValue === "true") ?
     true : false;

    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devValue, burgerId], function(err, dbBurgers) {
      if(err) {
        return reject(err);
      } else if (dbBurgers.affectedRows === 0) {
        return reject({
          message: "There was no burger by this ID... Enter a valid ID"
        })
      } else {
        return resolve(dbBurgers);
      }
    });
  });
};


module.exports = {
  findAll,
  create, 
  update
}