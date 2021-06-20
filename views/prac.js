const fetch = require("node-fetch");


fetch("https://rapidapi.p.rapidapi.com/video_formats?video=edPREMPZ5RA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "58a1c4567emsh8149e5018703d4cp1a1c01jsn8326688978d2",
		"x-rapidapi-host": "youtube-video-info.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});