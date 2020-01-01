
var colors = new Array(6);
var defaultColor = "steelblue";

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.getElementById("header");

var easyBtn = document.getElementById("easy_button");
var hardBtn = document.getElementById("hard_button");
var newColorBtn = document.getElementById("reset");

var pickedColor;

var testDisplay = document.getElementById("clickedColor");

var isHard;

// Button Event Listeners
//newColorBtn.addEventListener("click", resetColors, 6);

newColorBtn.addEventListener("click", function() {

    if (!isHard) {
        for (var i = squares.length/2; i < squares.length; i++) {
            squares[i].style.display = "none";
        }
        resetColors(3);
    } else {
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.display = "block";
        }
        resetColors(6);
    }

});

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    isHard = false;

    for (var i = squares.length/2; i < squares.length; i++) {
        squares[i].style.display = "none";
    }

    resetColors(3);
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    isHard = true;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.display = "block";
    }

    resetColors(6);
});

init();

/**
 * Initial Setup
 */
function init() {
    // Set colors into random colors
    for (var i = 0; i < colors.length; i++) {
        colors[i] = randomColor();
    }
    pickedColor = colors[Math.floor(Math.random() * 6)];
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function () {
            //alert(this.style.backgroundColor);
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
                message.textContent = "Correct!";
            } else {
                message.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

/**
 * Changes all squares to a particular color
 * @param {The color that all squares will change into when the correct color is guessed} color 
 */
function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

/**
 * Randomly generates and returns a color in rgb(r, g, b) string format
 */
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color;
}

/**
 * Each index of the color array becomes a new color
 */
function newColors() {
    for (var i = 0; i < colors.length; i++) {
        colors[i] = randomColor();
    }
}

/**
 * Resets the colors
 */
function resetColors(numOfColors) {
    h1.style.backgroundColor = defaultColor;
    newColors();

    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    pickedColor = colors[Math.floor(Math.random() * numOfColors)];
    colorDisplay.textContent = pickedColor;
    message.textContent = "Take a guess"
}