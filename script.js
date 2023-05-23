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
    if (e.key == 'ArrowRight' && player.parentElement != playerCells[playerCells.length - 1]) {
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
    playerCells[2].innerHTML = `<div class="player"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-airplane-engines-fill" viewBox="0 0 16 16">
    <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0Z"/>
  </svg></div>`
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
                level = 1 + Math.floor(score / 5)
                levelDisplay.innerHTML = level
                speed = Math.max(200, 1000 - 100 * (level - 1))
                setTimeout(enemy.remove(), 2000)
            }
        }
    }

    if (dropCount % 2 === 0) {
        const position = Math.floor(Math.random() * 5)
        enemyCells[position].innerHTML = `<div class='enemy'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-airplane-engines" viewBox="0 0 16 16">
        <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z"/>
      </svg></div>`
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