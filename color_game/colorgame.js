var colors = new Array(6);
for (var i = 0; i < colors.length; i++) {
    colors[i] = randomColor();
}

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");

var pickedColor = colors[Math.floor(Math.random() * 6)];


var testDisplay = document.getElementById("clickedColor");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        //alert(this.style.backgroundColor);
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            alert("YOU WIN");
        } else {
            message.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    });
}


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color;
}

function createColorArray() {
    var arr = new Array(6);
    arr.forEach(element => {
        
    });
}

function randomNumber() {
    return Math.floor(Math.random() * 256);
}


