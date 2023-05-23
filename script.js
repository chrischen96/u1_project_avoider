console.log('working')
const canvas = document.querySelector('.canvas')
console.log(typeof canvas)

// define constant and variableN
for (let i = 0; i < 65; i++) {
    const cell = document.createElement('div')
    cell.className = 'cell'
    canvas.appendChild(cell)
}
const cells = Array.from(document.querySelectorAll('.cell'))
const enemyCells = cells.slice(0, 60)
const playerCells = cells.slice(60)
const scoreDisplay = document.querySelector('.score')
const levelDisplay = document.querySelector('.level span')
console.log(cells)

let dropCount, speed, score, stopGame, level

// add event listener
document.addEventListener('keydown', e => {
    if (stopGame) return
    if (!dropCount) {
        drop()
    }
    const player = document.querySelector('.player')
    if (e.key == 'ArrowRight' && player.parentElement != playerCells[-1]) {
        player.parentElement.nextElementSibling.appendChild(player)
    } 
    if (e.key == 'ArrowLeft' && player.parentElement != playerCells[0]) {
        player.parentElement.previousElementSibling.appendChild(player)
    }
})
document.querySelector('.reset').addEventListener('click', init)

init()
function init() {
    dropCount = 0
    speed = 1000
    score = 0
    level = 1
    stopGame = false
    scoreDisplay.innerHTML = '0000'
    cells.forEach(cell => cell.innerHTML = '')
    playerCells[2].innerHTML = '<div class="player"></div>'
}

function drop() {
    for (let i = enemyCells.length - 1; i >= 0; i--) {
        const cell = enemyCells[i]
        const nextCell = cells[i + 5]
        const enemy = cell.children[0]
        if (!enemy) continue
        nextCell.appendChild(enemy)
        // collide
        if (playerCells.includes(nextCell)) {
            if (nextCell.querySelector('.player')) {
                stopGame = true
            } else {
                score++
                scoreDisplay.innerHTML = score
                level = 1 + Math.floor(score / 10)
                levelDisplay.innerHTML = level
                speed = Math.max(200, 1000 - 100 * (level - 1))
                setTimeout(enemy.remove(), 2000)
            }
        }
    }

    if (dropCount % 2 === 0) {
        const position = Math.floor(Math.random() * 5)
        enemyCells[position].innerHTML = `<div class='enemy'></div>`
    }

    if (stopGame) {
        alert(`Your score: ${score}. Close this window to play again.`) 
        init()
    } else {
        dropCount ++
        console.log(dropCount)
        setTimeout(drop, speed)
    }
}