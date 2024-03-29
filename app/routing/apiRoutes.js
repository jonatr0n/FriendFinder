var friendData = require('../data/friends.js');
var newUser;

module.exports = function (app) {
    app.get('/api', function (req, res) {
        res.json(friendData);
    });

    app.post('/newUser', function (req, res) {
        newUser = req.body;
        getMatch(newUser);
        friendData.push(newUser);
        //display this in the modal
        res.json(bestMatch);
    });
};

//setting a constructor to act as the current best match
var bestMatch = {
    name: "name",
    photo: "photo",
    compatibility: 1000
};

function getMatch(userData) {
    //variables for incoming data from ajax post for parsing
    var userScores = userData['answers'];

    //global var to calc difference between user points and each user in DB
    var totalDifference = 0;
    for (var i = 0; i < friendData.length; i++) {
        totalDifference = 0;
        for (var j = 0; j < friendData[i].answers[j]; j++) {
            //taking the dif between the scores and sets it as total dif
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].answers[j]));

            //doing the comparison to see if it is the best match
            if (totalDifference <= bestMatch.compatibility) {
                //setting the best match info from new constructor information
                bestMatch.name = friendData[i].name;
                bestMatch.photo = friendData[i].image;
                bestMatch.compatibility = totalDifference;
            }
        }
    }
} 