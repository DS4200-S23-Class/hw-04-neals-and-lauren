function clickButton() {

	// getting a selected x value 
	let xvals = document.getElementById("x-coord");
 	let xselected = xvals.options[xvals.selectedIndex].value;
// document.getElementById("x-coord").addEventListener('change', xValsClicked);


	// getting a selected y value
 	let yvals = document.getElementById("y-coord");
 	let yselected = yvals.options[yvals.selectedIndex].value;

	// calling function to create new point 
	createNewPoint(xselected,yselected);
}

function createNewPoint(x, y) {
	let xPlot = (30 * x) + 100;
	let yPlot = 300 - (30 * y);

	let frame = document.getElementById("frame");

	let point = document.createElementNS("http://www.w3.org/2000/svg", "circle")
	point.setAttribute("cx", xPlot);
	point.setAttribute("cy", yPlot);
	point.setAttribute("r", "10");

	let id = "(" + x + "," + y + ")";
	point.setAttribute("id", id);
	point.setAttribute("onclick", 'clickPoint(id)');

	frame.appendChild(point);

}

document.getElementById("subButton").addEventListener('click', clickButton);


function clickPoint(id) {
	let point = document.getElementById(id);

	let newText = id;
	let lastPoint = document.getElementById("button-div");

	lastPoint.innerHTML = newText;

	console.log("textChanged");

	// add border 

	if (point.classList.contains("circleBorder")) {
		point.classList.remove("circleBorder");
	} else {
		point.classList.toggle("circleBorder");
	}
}


