//require the data file here
var friendsData = require("../data/friends.js");

module.exports = function(app) {
	
	// A GET route with the url /api/friends. 
	//		This will be used to display a JSON of all possible friends.
	app.get('/api/friends', function(req, res) {
		console.log("display all friends now");

			console.log(friendsData);
			return res.json(friendsData);
		
	});

	// A POST routes /api/friends. This will be used to handle incoming survey results. 
	//		-- Takes in JSON input
	//		This route will also be used to handle the compatibility logic.
	app.post("/api/friends", function(req, res) {
		var newFriend = req.body;
		console.log(newFriend);
		
		// console.log(friendsData);

		// compatibility logic HERE
		//=========================
			//closestMatch is a object with personobj and totalDifference
		var closestMatch = {
			// person: null,
			"person": {"name": "Andrew", "photo": "", "scores": [1,1,1,1,1,1,1,1,1,1]},
			"totalDifference": 1000
		};
		// run through each person in data file
		friendsData.forEach(person => {
			var totalDifference = 0;
			console.log(`${person.name}'s scores: ${person.scores}`);
			console.log(`${newFriend.name}'s scores: ${newFriend.scores}`);
			
			// and calculate total difference between newFriends scores and person's scores
			for (var i = 0; i < 10; i++) {
				totalDifference += Math.abs(person.scores[i]-newFriend.scores[i]);
			}
			console.log(totalDifference);
			// if this person is more compatible, replace closestMatch with this person
			if(totalDifference < closestMatch.totalDifference) {
				closestMatch.person = person;
				closestMatch.totalDifference = totalDifference;
			}

		})

		console.log(closestMatch);
		// push to the imported data file HERE
		friendsData.push(newFriend);	
		// return JSON obj of closestMatch person to the front end
		res.json("hi im an returned");
	});
}
