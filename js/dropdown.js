function toggleNavPanel(x){
		var panel = document.getElementById(x); 
		var navarrow = document.getElementById("navarrow"); 
		var maxH="250px";
	if(panel.style.height == maxH){
		panel.style.height = "0px";
		navarrow.innerHTML = "&#9662;";
	} else {
		panel.style.height = maxH;
		navarrow.innerHTML = "&#9652;";
	}
}