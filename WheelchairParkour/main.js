import Building from './classes/Building.js'

const canv1 = document.getElementById("canv1")
const ctx = canv1.getContext("2d")
const CW = canv1.width = 800
const CH = canv1.height = 800

let b1 = new Building(12,8,0)
let x = CW/2

setInterval(()=>{
    ctx.clearRect(0,0,CW,CH)
    b1.draw(ctx,CH,CW/2+x)
    checkKeys()
},0)

let keyMap = {}
let speed = 4

document.addEventListener('keydown',(event)=>{
    keyMap[event.key] = 1
})

document.addEventListener('keyup',(event)=>{
    keyMap[event.key] = 0
})

function checkKeys(){
    if(keyMap['w'] === 1 || keyMap['ArrowUp']) moveH(1)
    if(keyMap['a'] === 1 || keyMap['ArrowLeft']) moveW(1)
    if(keyMap['s'] === 1 || keyMap['ArrowDown']) moveH(-1)
    if(keyMap['d'] === 1 || keyMap['ArrowRight']) moveW(-1)
}

function moveH(ver){
    y += speed * ver 
}
function moveW(ver){
    x += speed * ver 
}