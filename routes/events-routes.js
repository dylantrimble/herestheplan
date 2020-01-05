var db = require("../models");

module.exports = function(app) {
  app.get("/api/events", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Events.findAll({}).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  app.get("/api/events/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.Events.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  app.post("/api/events", function(req, res) {
    db.Events.create(req.body).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

  app.delete("/api/events/:id", function(req, res) {
    db.Events.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvents) {
      res.json(dbEvents);
    });
  });

};
