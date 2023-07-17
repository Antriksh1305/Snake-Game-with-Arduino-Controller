let gameBoardSize = 40;
let gamePoints = 0;
let gameSpeed = 100;

console.log("Ready Player One!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("Ready Player One!");
    createBoard();
    document.querySelector(".btn").addEventListener("click", function () {
        startGame();
    });
});

let Snake = {
    position: [[20, 20], [20, 19], [20, 18]],
    size: 3,
    direction: "r",
    alive: true
};

let Food = {
    position: [],
    present: false
};

function createBoard() {
    let gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = "";

    let size = gameBoardSize;

    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        gameBoard.appendChild(row);

        for (let j = 0; j < size; j++) {
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            row.appendChild(pixel);
        }
    }
}

function moveSnake() {
    let head = Snake.position[0].slice();

    switch (Snake.direction) {
        case 'r':
            head[1] += 1;
            break;
        case 'l':
            head[1] -= 1;
            break;
        case 'u':
            head[0] -= 1;
            break;
        case 'd':
            head[0] += 1;
            break;
    }

    if (alive(head)) {
        let headPixel = document.querySelector(`.row:nth-child(${head[0]}) > .pixel:nth-child(${head[1]})`);
        headPixel.classList.add("snakePixel");

        for (let i = 0; i < Snake.size; i++) {
            let snakePixel = document.querySelector(`.row:nth-child(${Snake.position[i][0]}) > .pixel:nth-child(${Snake.position[i][1]})`);
            snakePixel.classList.add("snakePixel");
        }

        if (head.every(function (e, i) {
            return e === Food.position[i];
        })) {
            Snake.size++;
            Food.present = false;
            gamePoints += 5;
            let foodPixel = document.querySelector(`.row:nth-child(${Food.position[0]}) > .pixel:nth-child(${Food.position[1]})`);
            foodPixel.classList.remove("foodPixel");
            document.getElementById("score").innerHTML = "Score: " + gamePoints;
            if (gamePoints % 16 === 0 && gameSpeed > 10) {
                gameSpeed -= 5;
            }
        } else {
            let tailPixel = document.querySelector(`.row:nth-child(${Snake.position[Snake.size - 1][0]}) > .pixel:nth-child(${Snake.position[Snake.size - 1][1]})`);
            tailPixel.classList.remove("snakePixel");
            Snake.position.pop();
        }
        Snake.position.unshift(head);
    } else {
        gameOver();
    }
}

function generateFood() {
    if (Food.present === false) {
        Food.position = [Math.floor((Math.random() * 40) + 1), Math.floor((Math.random() * 40) + 1)];
        Food.present = true;
        console.log("Food at: " + Food.position);
        let foodPixel = document.querySelector(`.row:nth-child(${Food.position[0]}) > .pixel:nth-child(${Food.position[1]})`);
        foodPixel.classList.add("foodPixel");
    }
}

function keyPress(event) {
    document.addEventListener("keydown", function (event) {
        switch (event.which) {
            case 37:
                if (Snake.direction !== "r") {
                    Snake.direction = "l";
                }
                break;
            case 38:
                if (Snake.direction !== "d") {
                    Snake.direction = "u";
                }
                break;
            case 39:
                if (Snake.direction !== "l") {
                    Snake.direction = "r";
                }
                break;
            case 40:
                if (Snake.direction !== "u") {
                    Snake.direction = "d";
                }
                break;
        }
    });
}

function gameLoop() {
    setTimeout(function () {
        keyPress();
        generateFood();
        moveSnake();
        if (Snake.alive) {
            gameLoop();
        }
    }, gameSpeed);
}

function alive(head) {
    if (head[0] < 1 || head[0] > 40 || head[1] < 1 || head[1] > 40) {
        return false;
    }

    if (Snake.position[0][0] < 1 || Snake.position[0][0] > 40 || Snake.position[0][1] < 1 || Snake.position[0][1] > 40) {
        return false;
    }

    for (let i = 1; i < Snake.size; i++) {
        if (Snake.position[0].every(function (element, index) {
            return element === Snake.position[i][index];
        })) {
            return false;
        }
    }
    return true;
}

function gameOver() {
    Snake.alive = false;
    console.log("Game Over!");
    document.getElementsByClassName("overlay")[0].style.display = "";
    document.getElementById("gameOver").style.display = "";
    let blink = function () {
        let headPixel = document.querySelector(`.row:nth-child(${Snake.position[0][0]}) > .pixel:nth-child(${Snake.position[0][1]})`);
        headPixel.classList.toggle("snakePixel");
    };

    let i = 0;
    function blinkLoop() {
        blink();
        setTimeout(function () {
            i++;
            if (i < 10) {
                blinkLoop();
            }
        }, 400);
    }
    blinkLoop();
}

function startGame() {
    Snake.size = 3;
    Snake.position = [[20, 20], [20, 19], [20, 18]];
    Snake.direction = "r";
    Snake.alive = true;
    gameSpeed = 100;
    gamePoints = 0;
    Food.present = false;

    createBoard();
    document.getElementsByClassName("overlay")[0].style.display = "none";
    gameLoop();
}
