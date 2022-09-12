//var url = window.location.href;
//var index = url.includes("index.html");
//var attribute = element.getAttribute(attributeName);
var section_id = document.querySelector("section").id;
var navmenu = document.getElementsByClassName("nav")[0]
var navlist = navmenu.getElementsByTagName("li");
var headtext = document.getElementById("headname");
var menuelem;
var alerttext = "";

switch(section_id) {
	case 'home':
		menuelem = navlist[0];
		break;
	case 'contact':
		menuelem = navlist[5];
		break;
	default:
		menuelem = navlist[0];
}
headtext.innerHTML = menuelem.firstChild.innerHTML;
menuelem.classList.add("active");

for (i = 0; i < navlist.length; i++) {
	if (navlist[i].innerHTML) alerttext += navlist[i].innerHTML + "\n";
}

$(document).ready(function() {
	$(".hidebox p").hide();
	$(".hidebox h3").css("background-color", "red");
});
$(".hidebox h3").click(function () {
	$(this).next("p").hide("slow");
	$(this).css("background-color", "red");
});
$(".hidebox h3").dblclick(function () {
	$(this).next("p").show("slow");
	$(this).css("background-color", "#616060");
});

/*function setHeaderText(elem) {
	var newheadtext = elem.innerHTML;
	var headtext = document.getElementById("headname");
	headtext.innerHTML = newheadtext;
	elem.parentNode.classList.add("active");
}*/