var db = require("../models");
var bcrypt = require('bcrypt')
const saltRounds = 10;

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.User.findAll({}).then(function(dbUser) {
      console.info("find user", dbUser);
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });


  app.post("/api/newUser", function(req, res) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      db.User.create({
        fullName: req.body.fullName,
        username: req.body.username,
        password: hash
      }).then(function(dbUser) {
        res.json(dbUser);
      });
    });
  });

  /////////////////////////

  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
