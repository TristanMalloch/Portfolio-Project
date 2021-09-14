let dogFightName = document.getElementById('dogFightName');
let dogFightDetails = document.getElementById('dogFightDetails');
let mobileNav = document.getElementById('smallNav');
let hMenuIcon = document.getElementById('hMenuIcon');

let showMobileNav = function() {
	if (mobileNav.style.display == "block") {
		mobileNav.style.display = "none";
	} else {
		mobileNav.style.display = "block";
	}
};

hMenuIcon.onclick = showMobileNav;

let showDogFight = function() {
	if (dogFightDetails.style.display == "block") {
		dogFightDetails.style.display = "none";
	} else {
		dogFightDetails.style.display = "block";
	}
};

dogFightName.onclick = showDogFight;