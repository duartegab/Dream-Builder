const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2D")

const size = 30

const snake = [
	{ x: 200, y: 200 },
	{ x: 230, y: 200 }
]

let direction = "right"

const drawSnake = () => {
    ctx.fillStyle = "red"
}

const moveSnake = () => {
    const head = snake[snake.length - 1]

    snake.shift()

    if (direction == "right"){
        snake.push({ x: head.x + size, y: head.y })
    }
}

setInterval(() => {
    moveSnake()
    drawSnake()
}, 300)