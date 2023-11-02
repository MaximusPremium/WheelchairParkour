export default class Building {
    constructor(floors,windows,roofslope){
        this.floors = floors
        this.windows = windows
        this.roofslope = roofslope
        this.imgWindow = new Image(25,30)
        this.imgWindow.src = '../imgs/window1.png'
        this.imgWall = new Image(50,50)
        this.imgWall.src = '../imgs/wall1.png'

    }
    draw(ctx,CH,x){
        function drawWall(img,i,j){
            ctx.drawImage(img,x+img.width*i,CH-img.height*j,img.width,img.height)
        }
        function drawWindow(img,imgW,i,j){
            ctx.drawImage(img,x+imgW.width*i+imgW.width/2-img.width/2,CH-imgW.height*j+imgW.height/2-img.height/2,img.width,img.height)
        }
        function drawBox(img,i,j){
            ctx.beginPath()
            ctx.rect(img,x+img.width*i,CH-img.height*j,100,100)
            ctx.fillStyle = 'black'
            ctx.fill()
            ctx.stroke()
        }
        for(let i=0;i<this.windows;i++){
            for(let j=0;j<this.floors+1;j++){
                
                drawWall(this.imgWall,i,j)
                drawWindow(this.imgWindow,this.imgWall,i,j)
                //drawBox(this.imgWall,i,j)
                
            }
        }
    }
}