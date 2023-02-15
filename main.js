function submitClicked() {

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


// document.getElementById("y-coord").addEventListener('change', yValsClicked);

function createNewPoint () {

	let xPlot = (30 * x) + 100;
	let yPlot = 300 - (30 * y);

	let point = document.getElementById

}

document.getElementById("subBotton").addEventListener('click', createNewPoint);






function submit2Clicked() {
    let maxPnt = document.getElementById("circle1"); 
    
    maxPnt.classList.add("borderChange"); // also check out remove() and toggle() 
}

// Add event handler to button 
document.getElementById("circle1").addEventListener('click', submit2Clicked);

function clickButton() {

}

