const express = require("express")
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3002;

// Requiring our models for syncing
var db = require("./models");

console.info('after db initialization');

// Routes
// =============================================================
require("./routes/users")(app);
require("./routes/saved_places-routes")(app);
require("./routes/events-routes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
