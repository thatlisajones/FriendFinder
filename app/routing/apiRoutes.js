var path = require("path");
var friends = require("../data/friends")

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log("req.body in api routes",req.body);
    
      // friends.push(req.body);
    //   compare friends function here res.json here
  });}
