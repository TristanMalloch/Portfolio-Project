let dogFightName = document.getElementById('dogFightName');
let dogFightDetails = document.getElementById('dogFightDetails');

dogFightName.onmouseover

let showDogFight = function() {
	if (dogFightDetails.style.display == "block") {
		dogFightDetails.style.display = "none";
	} else {
		dogFightDetails.style.display = "block";
	}
};

dogFightName.onclick = showDogFight;