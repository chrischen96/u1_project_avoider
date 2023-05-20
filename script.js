console.log('working')
const canvas = document.querySelector('.canvas')
console.log(typeof canvas)
for (let i = 0; i < 150; i++) {
    let block = document.createElement('div')
    block.innerText = i
    canvas.appendChild(block)
}