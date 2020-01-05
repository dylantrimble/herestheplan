var db = require("../models");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Friends.findAll({}).then(function(dbFriends) {
      res.json(dbFriends);
    });
  });

  app.get("/api/friends/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.Friends.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbFriends) {
      res.json(dbFriends);
    });
  });

  app.post("/api/friends", function(req, res) {
    db.Friends.create(req.body).then(function(dbFriends) {
      res.json(dbFriends);
    });
  });

  app.delete("/api/friends/:id", function(req, res) {
    db.Friends.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbFriends) {
      res.json(dbFriends);
    });
  });

};
