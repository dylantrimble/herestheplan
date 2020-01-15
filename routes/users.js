var db = require("../models");
var bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.User.findAll({}).then(function(dbUser) {
      console.info("find user", dbUser);
      res.json(dbUser);
    });
  });

  app.get("/api/user/:username/:password", function(req, res) {
    db.User.findOne({
      where: {
        username: req.params.username
      }
    }).then(function(user) {
      console.log(user);
      if (user == null) {
        res.json(user);
      } else {
        bcrypt.compare(req.params.password, user.password, function(
          err,
          result
        ) {
          if (result == true) {
            res.json(user);
            console.log("Success");
          } else {
            res.json(result);
            console.log("Incorrect password");
          }
        });
      }
    });
  });

  app.get("api/users/events/:id", function(req, res) {
    db.User.findOne({
      include: [db.Events],
      where: { id: req.params.id }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users/savedPlaces/:id", function(req, res) {
    db.User.findOne({
      include: [db.SavedPlaces],
      where: { id: req.params.id }
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
