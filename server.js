// const express = require("express")
// const app = express()
// const bcrypt = require("bcrypt")
// const cors = require('cors')
// const axios = require('axios');

// app.use(cors())
// app.use(express.json())

// const users = [{ name: "name" }]

// app.get('/users', (req, res) => {
//     res.json(users)
// })

// app.post('/users', async (req, res) => {

// })

// app.listen(4440)

const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3002;
const app = express();

// Requiring our models for syncing
var db = require("./models");

// Routes
// =============================================================
require("./routes/events-routes")(app);
require("./routes/friends-routes")(app);
require("./routes/places-routes")(app);
require("./routes/saved_places-routes")(app);
require("./routes/users")(app);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
const express = require("express")
const app = express()
const bcrypt = require("bcrypt")

app.use(express.json())

// store users in db
const users = []

// create route that does not expose ps info
app.get("/users", (req, res) => {
  res.json(users)
})

app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = { name: req.body.name, password: hashedPassword }
    users.push(user)
    res.status(201).send("User added.")
  } catch {
    res.status(500).send()
  }
})

app.post("/users/login", async (req, res) => {
  const user = users.find(user => user.name = req.body.name)
  if (user == null) {
    return res.status(400).send("Cannot find user")
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("Success")
    } else {
      res.send("Not Allowed")
    }
  } catch {
    res.status(500).send()
  }
})

app.listen(3002)
