
function xValsClicked() {
 let xvals = document.getElementById("x-coord");
 console.log(xvals.value);

}
document.getElementById("x-coord").addEventListener('change', xValsClicked);


function yValsClicked() {
 let yvals = document.getElementById("y-coord");
 console.log(yvals.value);

}
document.getElementById("y-coord").addEventListener('change', yValsClicked);

function createNewPoint () {
	let x = xValsClicked;
	let y = yValsClicked;

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

