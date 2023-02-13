/*
function submitClicked() {
	let vals = document.getElementsByTagName("input");

	//console.log(vals.length);

	for (let i = 0; i < vals.length; i++) {
		if(vals[i].checked) {
			//console.log(vals[i].value); //resolves to either bar/line chart

			let newText = "Selected Vis: " + vals[i].value;
			document.getElementById("selected-vis").innerHTML = newText;
		}
	}
}

document.getElementById("subButton").addEventListener('click', submitClicked);
*/

function circleHover() {
	let maxPt = document.getElementById("circle1");

	maxPt.classList.add("orange");
}

document.getElementById("circle1").addEventListener('click', circleHover);




