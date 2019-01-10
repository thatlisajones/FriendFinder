// var friendsData = require("../data/friends");
// //GET route for url /api/friends -- displays a JSON of all possible friends

// module.exports = function(app) {
//     app.get("/api/friends", function(req, res) {
//         return res.json(friendsData);
//     });
//     //POST route /api/friends -- handles incoming survey results and compatibility logic
//     app.post("/api/friends", function(req, res) {
//         var newFriend = req.body;

//         console.log(newFriend);

//         //add code for the friend matching based on new friend details
//         newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
//         console.log(`${newFriend.name} has been added to FakeFriend Finder.`);
//         friends.push(newFriend);
//         res.json(newFriend);
//     })};
var friends = require("../data/friends");

module.exports = function(app) {
  // Return all friends found in friends.js as JSON
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.values);

    // Receive user details (name, photo, values)
    var user = req.body;

    // parseInt for values
    for(var i = 0; i < user.values.length; i++) {
      user.values[i] = parseInt(user.values[i]);
    }

    // default friend match is the first friend but result will be whoever has the minimum difference in values
    var compatibilityValue = 0;
    var minimumDifference = 40;

    // in this for-loop, start off with a zero difference and compare the user and the ith friend values, one set at a time
    //  whatever the difference is, add to the total difference
    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].values.length; j++) {
        var difference = Math.abs(user.values[j] - friends[i].values[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDifference < minimumDifference) {
        compatibilityValue = i;
        minimumDifference = totalDifference;
      }
    }

    // after finding match, add user to friend array
    friends.push(user);

    // send back to browser the best friend match
    res.json(friends[compatibilityValue]);
  });
};