console.log('working')
const canvas = document.querySelector('.canvas')
console.log(typeof canvas)

// define constant and variable
const cells = Array.from(document.querySelectorAll('.cell'))
const scoreDisplay = document.querySelector('.score')
const enemyCells = cells.slice(0, 33)
const playerCells = cells.slice(33)
console.log(cells)

let dropCount, speed, score

// add event listener
document.addEventListener('keydown', e => {
    if (!dropCount) {
        startGame()
    }
    const player = document.querySelector('.player')
    if (e.key == 'ArrowRight') {
        player.parentElement.nextElementSibling.appendChild(player)
    } 
    if (e.key == 'ArrowLeft') {
        player.parentElement.previousElementSibling.appendChild(player)
    }
})

init()
function init() {
    dropCount = 0
    speed = 1000
    score = 0
    scoreDisplay.innerHTML = '0'

    cells.forEach(cell => cell.innerHTML = '')
    playerCells[1].innerHTML = '<div class="player"></div>'
}

function startGame() {
    init()
    loop()
}

function loop() {
    let stopGame = false;

    // 

    if (stopGame) {
        alert(`Your score: ${score}. Close this window to play again.`) } else {
            dropCount ++
            setTimeout(loop, speed)
        }
}