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


var updateBackgroundColor = function(event, num) {
  event.preventDefault();
  if(num === 1) {
    document.getElementById("button1").style.backgroundColor = '#4A4453';
    document.getElementById("button2").style.backgroundColor = '#786E87';
    document.getElementById("button3").style.backgroundColor = '#786E87';
    document.getElementById("button4").style.backgroundColor = '#786E87';
  }
  if(num === 2) {
    document.getElementById("button2").style.backgroundColor = '#4A4453';
    document.getElementById("button1").style.backgroundColor = '#786E87';
    document.getElementById("button3").style.backgroundColor = '#786E87';
    document.getElementById("button4").style.backgroundColor = '#786E87';
  }
  if(num === 3) {
    document.getElementById("button3").style.backgroundColor = '#4A4453';
    document.getElementById("button1").style.backgroundColor = '#786E87';
    document.getElementById("button2").style.backgroundColor = '#786E87';
    document.getElementById("button4").style.backgroundColor = '#786E87';
  }
  if(num === 4) {
    document.getElementById("button4").style.backgroundColor = '#4A4453';
    document.getElementById("button1").style.backgroundColor = '#786E87';
    document.getElementById("button2").style.backgroundColor = '#786E87';
    document.getElementById("button3").style.backgroundColor = '#786E87';
  }

}


// button listeners
/*
document.getElementById("button1").addEventListener("click", function(event) {
	event.preventDefault();
	document.getElementById("images").style.columnCount = '1';
});
*/

document.getElementById("button1").addEventListener("click", function(event) {
	changeWidth(event, '1');
  updateBackgroundColor(event, 1);
});

document.getElementById("button2").addEventListener("click", function(event) {
	changeWidth(event, '2');
  updateBackgroundColor(event, 2);
});

document.getElementById("button3").addEventListener("click", function(event) {
	changeWidth(event, '3');
  updateBackgroundColor(event, 3);
});

document.getElementById("button4").addEventListener("click", function(event) {
	changeWidth(event, '4');
  updateBackgroundColor(event, 4);
});
