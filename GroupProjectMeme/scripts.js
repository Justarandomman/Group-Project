function myFunction() {
	var princessmemes = "https://sayingimages.com/wp-content/uploads/beast-disney-princess-memes.jpg";
	var childruining = "https://static.fjcdn.com/pictures/Childhood+ruined_db52c6_4049312.jpg";
	var nbuzz = "https://img.buzzfeed.com/buzzfeed-static/static/enhanced/terminal01/2011/2/22/15/enhanced-buzz-30302-1298404880-11.jpg";
	var newsfeed =  "https://i.kym-cdn.com/photos/images/newsfeed/000/229/161/fd5.jpg";
    var x = document.getElementById("changeImage");
    
	if (x.src == newsfeed)
	{
	 x.src = childruining;
	}
	else if(x.src == childruining)
	{
	 x.src = princessmemes;
	}
	else if (x.src == princessmemes)
	{
	 x.src = nbuzz;
	}
	else if (x.src == nbuzz)
	{
	 x.src = newsfeed;
	}
}

// Function that changes the quote comment in the text under the princesses.  Uses mouseover and mouseout, and puts ID's into variables to compare and 
// outputs corresponding saying based on IF loop.

function selectedPrincess(x) {
	var cinderella = document.getElementById("cinderellaID");
	var aurora = document.getElementById("auroraID");
	var belle = document.getElementById("belleID");
	var jasmine = document.getElementById("jasmineID");
	var ariel = document.getElementById("arielID");
	var snowWhite = document.getElementById("snowWhiteID");

	var cinderellaSays = "Cinderella married a man with a foot fetish.";
	var auroraSays = "Aurora married a creep who kissed her in her sleep."
	var belleSays = "Belle committed beasteality.";
	var jasmineSays = "Jasmine married a dirty homeless thief.";
	var arielSays = "Ariel risked her soul for a man she never met.";
	var snowWhiteSays = "Snow White lived alone with 7 men.";

	if (x == cinderella)
	{
		document.getElementById("quote").innerHTML = cinderellaSays;
	}
	else if (x == aurora)
	{
		document.getElementById("quote").innerHTML = auroraSays;
	}
	else if (x == belle)
	{
		document.getElementById("quote").innerHTML = belleSays;
	}
	else if	(x == jasmine)
	{
		document.getElementById("quote").innerHTML = jasmineSays;
	}
	else if	(x == ariel)
	{
		document.getElementById("quote").innerHTML = arielSays;
	}
	else if (x == snowWhite)
	{
		document.getElementById("quote").innerHTML = snowWhiteSays;
	}
}

function unSelectedPrincess()
{
	document.getElementById("quote").innerHTML = null;
}