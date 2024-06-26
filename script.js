const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const scale = 20;

function setup() {
    window.requestAnimationFrame(draw);
}

function draw(timeStamp) {
    displayMaze();
    window.requestAnimationFrame(draw);
}

function displayMaze() {
    for (i = 0; i <= (width / scale) - 1; i++) {
        for (j = 0; j <= (height / scale) - 1; j++) {
            context.strokeStyle = "black";
            context.strokeRect(i * scale, j * scale, scale, scale);
        }
    }
}

setup();




