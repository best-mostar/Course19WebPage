document.getElementById("sticky").addEventListener("mouseenter", ShowSticky);
document.getElementById("sticky").addEventListener("mouseleave", HideSticky);
function ShowSticky() {

	var list = document.getElementsByClassName("homeListText");
	for (let index = 0; index < list.length; index++) {
		list[index].style.display = "block";
	}
}

function HideSticky() {

	var list = document.getElementsByClassName("homeListText");
	for (let index = 0; index < list.length; index++) {
		list[index].style.display = "none";
	}
}
function OpenLink(link){
	var win = window.open(link, '_blank');
	win.focus();
}