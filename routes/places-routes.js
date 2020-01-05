var db = require("../models");

module.exports = function(app) {
  app.get("/api/places", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Places.findAll({}).then(function(dbPlaces) {
      res.json(dbPlaces);
    });
  });

  app.get("/api/places/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.Places.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbPlaces) {
      res.json(dbPlaces);
    });
  });

  app.post("/api/places", function(req, res) {
    db.Places.create(req.body).then(function(dbPlaces) {
      res.json(dbPlaces);
    });
  });

  app.delete("/api/places/:id", function(req, res) {
    db.Places.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPlaces) {
      res.json(dbPlaces);
    });
  });

};
