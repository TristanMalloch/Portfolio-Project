let dogFightName = document.getElementById('dogFightName');
let dogFightDetails = document.getElementById('dogFightDetails');
let mobileNav = document.getElementById('smallNav');
let hMenuIcon = document.getElementById('hMenuIcon');

dogFightName.onmouseover

let showDogFight = function() {
	if (dogFightDetails.style.display == "block") {
		dogFightDetails.style.display = "none";
	} else {
		dogFightDetails.style.display = "block";
	}
};

dogFightName.onclick = showDogFight;

let showMobileNav = function() {
	if (mobileNav.style.display == "inline-block") {
		mobileNav.style.display = "none";
	} else {
		mobileNav.style.display = "inline-block";
	}
};

hMenuIcon.onclick = showMobileNav;