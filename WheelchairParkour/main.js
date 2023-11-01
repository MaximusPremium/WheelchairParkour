import Building from './classes/Building.js'

const canv1 = document.getElementById("canv1")
const ctx = canv1.getContext("2d")
const CW = canv1.width = 800
const CH = canv1.height = 800

let b1 = new Building(5,3,0)
setInterval(()=>{
    b1.draw(ctx,CH,CW/2)
},0)
