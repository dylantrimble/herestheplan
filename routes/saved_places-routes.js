var db = require("../models");

module.exports = function(app) {
  app.get("/api/saved_places", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.SavedPlaces.findAll({}).then(function(dbSavedPlaces) {
      res.json(dbSavedPlaces);
    });
  });

  app.get("/api/saved_places/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.SavedPlaces.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbSavedPlaces) {
      res.json(dbSavedPlaces);
    });
  });

  app.post("/api/saved_places", function(req, res) {
    db.SavedPlaces.create({
      name: req.body.name,
      location: req.body.location
    }).then(function(dbSavedPlaces) {
      res.json(dbSavedPlaces);
    });
  });

  app.delete("/api/saved_places/:id", function(req, res) {
    db.SavedPlaces.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSavedPlaces) {
      res.json(dbSavedPlaces);
    });
  });

};
