//FIXME custom width + height
const height = 500;
const width = 500;
const numImages = 30;
const url = "https://picsum.photos/" + height.toString() + "/" + width.toString();

// add an image to the images div
function addImage(url) {
	document.getElementById("images").innerHTML += '<div class="image"><img src="' + url + '" /></div>';
}

// fetch images
for (let i = 0; i < numImages; i++) {
	fetch(url)
		.then(function(response) {
			addImage(response.url);
		});
}

// called by button handlers to change column count
var changeWidth = function(event, width) {
	event.preventDefault();
	document.getElementById("images").style.columnCount = width;
};

// button listeners
/*
document.getElementById("button1").addEventListener("click", function(event) {
	event.preventDefault();
	document.getElementById("images").style.columnCount = '1';
});
*/

document.getElementById("button1").addEventListener("click", function(event) {
	changeWidth(event, '1');
});

document.getElementById("button2").addEventListener("click", function(event) {
	changeWidth(event, '2');
});

document.getElementById("button3").addEventListener("click", function(event) {
	changeWidth(event, '3');
});

document.getElementById("button4").addEventListener("click", function(event) {
	changeWidth(event, '4');
});