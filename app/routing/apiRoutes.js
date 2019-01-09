var friendsData = require("../data/friends");
//GET route for url /api/friends -- displays a JSON of all possible friends

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friendsData);
    });
    //POST route /api/friends -- handles incoming survey results and compatibility logic
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;

        console.log(newFriend);

        //add code for the friend matching based on new friend details
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        console.log(`${newFriend.name} has been added to FakeFriend Finder.`);
        friends.push(newFriend);
        res.json(newFriend);
    })};
