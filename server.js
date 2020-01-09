const express = require("express")
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("/client/build"));

const PORT = process.env.PORT || 3002;

// Requiring our models for syncing
var db = require("./models");

console.info('after db initialization');

// Routes
// =============================================================
require("./routes/users")(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));

});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
