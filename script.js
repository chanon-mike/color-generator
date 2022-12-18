// Direction
var left = document.querySelector(".left");
var up = document.querySelector(".up");
var right = document.querySelector(".right");
var down = document.querySelector(".down");
var direction = "to right";

// Gradient
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var cssCode = document.querySelector("#code");

function setGradient() {
	body.style.background = "linear-gradient(" + direction + ", " + color1.value + ", " + color2.value + ")";
	cssCode.textContent = body.style.background + ";";
}

// EventListener
setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

left.addEventListener("click", function(){
	direction = "to left";
	setGradient();
});
up.addEventListener("click", function(){
	direction = "to top";
	setGradient();
});
right.addEventListener("click", function(){
	direction = "to right";
	setGradient();
});
down.addEventListener("click", function(){
	direction = "to bottom";
	setGradient();
});

Coloris({
	format: 'hex',
	swatches: [
		'#264653',
		'#2a9d8f',
		'#e9c46a',
		'rgb(244,162,97)',
		'#e76f51',
		'#d62828',
		'navy',
		'#07b',
		'#0096c7',
		'#00b4d880',
		'rgba(0,119,182,0.8)'
	]
});