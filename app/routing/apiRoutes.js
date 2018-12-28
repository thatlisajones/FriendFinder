var path = require("path");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json("../data/friends.js");
  });

  app.post("/api/friends", function(req, res) {
      friends.push(req.body);
    //   compare friends function here res.json here
  });}
