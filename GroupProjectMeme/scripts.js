//Worked on by Brenton and Tyler
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

//Worked on by Mehala Keller and Cam
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

var setOne = ["Dank: anything “dank” is accepted as good, funny, important, and smart. Qualities which, in the meme scene, strongly correlate to obscurity , not uncommonly, sheer incomprehensibility.", 'Fire: Probably the closest analogue to the overplayed “viral” right now, though it also refers to a particular conflagration of “dankness.” The fire emoji is a customary equivalent. To be fire is what it once colloquially meant to be on fire. N.B. that any fire preceded by “dumpster” or “trash” is what we once called a “cluster.”', 'Lit: If music and memes can be fire, then parties and communities can be “lit,” which is to say marked by boisterous, enjoyable, and sometimes outlandish activity.', 'No Chill: Though one cannot exactly possess “chill,” the aspect of unruffled, ambivalent calm, one can be said to have “no chill” if one persists in endless trolling, antagonism, or other malicious endeavors. In other words, you can’t leave well enough alone.', 'Meme: A meme is a virally-transmitted photograph that is embellished with text that pokes fun at a cultural symbol or social idea.', "Cool Beans: A slang term that actually began it's use in the late 60's/early 70's. Popularized by the pop culture of the time. Used to describe something very favorable or pleasing. Great. Very nice.", "Ghad: having god-like qualities on either the internet, computer programming or networking", "Internet Bats: When your computer or laptop begins to malfunction whilst on the internet, rather by strange and unusual noises, popups, or just turning off. All the work of the dreaded Internet Bats.", "Wirate: Getting really angry when your WIFI internet connection is slow."];
/*var setTwo = [];
var setThree = []; */



			//tylers work below
			var paragraph1 = new Array("Dank: anything “dank” is accepted as good, funny, important, and smart. Qualities which, in the meme scene, strongly correlate to obscurity , not uncommonly, sheer incomprehensibility.", 'Fire: Probably the closest analogue to the overplayed “viral” right now, though it also refers to a particular conflagration of “dankness.” The fire emoji is a customary equivalent. To be fire is what it once colloquially meant to be on fire. N.B. that any fire preceded by “dumpster” or “trash” is what we once called a “cluster.”', 'Lit: If music and memes can be fire, then parties and communities can be “lit,” which is to say marked by boisterous, enjoyable, and sometimes outlandish activity.', 'No Chill: Though one cannot exactly possess “chill,” the aspect of unruffled, ambivalent calm, one can be said to have “no chill” if one persists in endless trolling, antagonism, or other malicious endeavors. In other words, you can’t leave well enough alone.', 'Meme: A meme is a virally-transmitted photograph that is embellished with text that pokes fun at a cultural symbol or social idea.', "Cool Beans: A slang term that actually began it's use in the late 60's/early 70's. Popularized by the pop culture of the time. Used to describe something very favorable or pleasing. Great. Very nice.", "Ghad: having god-like qualities on either the internet, computer programming or networking", "Internet Bats: When your computer or laptop begins to malfunction whilst on the internet, rather by strange and unusual noises, popups, or just turning off. All the work of the dreaded Internet Bats.", "Wirate: Getting really angry when your WIFI internet connection is slow.");
			var paragraph2 = new Array ("@harryseaton 'Boy: Daddy how did you meet Mummy?' Father: 'Well child I first @'d sadhatcher69 in 2015 with a dank meme and the rest is on my timehop'", "@fillegrossiere 'If the video for a rap song includes a corner store then the track is fire, flat out.'", "@kaleya_daniel 'New menu, uniforms, AND chairs. Applebee's is lit.'", "@britneyvibes 'I'M SCREAMING MARIAH LITERALLY HAS NO CHILL ?????? '", "The majority of modern memes are captioned photos that are intended to be funny, often as a way to publicly ridicule human behavior. Other memes can be videos and verbal expressions. Some memes have heavier and more philosophical content.");
			var paragraph3 = "The world of memes (which rhymes with 'teams') is noteworthy for two reasons: it is a worldwide social phenomenon, and memes behave like a mass of infectious flu and cold viruses, traveling from person to person quickly through social media.";
			var counter1 = 0;
			var counter2 = 1;
			var counter3 = 2;
			function upDate(){
				/*section 1*/
				counter1++;
				if(counter1 == 4){
					document.getElementById("p3").innerHTML = paragraph3;
				}
				else if(counter1 !=4){
					document.getElementById("p3").innerHTML = " ";
				}
				
				if(counter1 > 4){
					counter1 = 0;
				}
				document.getElementById("p1").innerHTML = paragraph1[counter1];
				document.getElementById("p2").innerHTML = paragraph2[counter1];
				
				/*section 2*/
				counter2++;
				if(counter2 == 4){
					document.getElementById("pC").innerHTML = paragraph3;
				}
				else if(counter2 != 4){
					document.getElementById("pC").innerHTML = " ";
				}
				
				if(counter2 > 4){
					counter2 = 0;
				}
				document.getElementById("pA").innerHTML = paragraph1[counter2];
				document.getElementById("pB").innerHTML = paragraph2[counter2];
				
				/*section 3*/
				counter3++;
				if(counter3 == 4){
					document.getElementById("para3").innerHTML = paragraph3;
				}
				else if(counter2 != 4){
					document.getElementById("para3").innerHTML = " ";
				}
				
				if(counter3 > 4){
					counter3 = 0;
				}
				document.getElementById("para1").innerHTML = paragraph1[counter3];
				document.getElementById("para2").innerHTML = paragraph2[counter3];
			}


