var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.User.findAll({}).then(function(dbUser) {
      console.info('find user',dbUser);
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

  app.post("/api/newUsers", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/newUsers", async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      const newUser = { 
        fullName: req.body.fullName,
        username: req.body.username,
        password: hashedPassword 
      }
      users.push(user)
      res.status(201).send("User added.")
    } catch {
      res.status(500).send()
    }
  })

  /////////////////////////

  app.post("/api/newUsers", function (req, res) {

    console.log(req.body)

    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {

        newUser.save(function(err) {
          if(!err) {
            return res.send({ status: 'User created' });
          } else {
            if(err.name == 'ValidationError') {
              res.statusCode = 400;
              res.send({ error: 'Bad Request' });
            } else {
              res.statusCode = 500;
              res.send({ error: 'Internal Server Error' });
            }
          } 
        });
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
