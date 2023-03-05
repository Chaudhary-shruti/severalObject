img=''
function preLoad(){
    img=loadImage("bottle.jfif")
}
function setup(){
canvas=createCanvas(640,420)
canvas.center()

}
function modelLoaded(){

}
function draw(){
image(img,0,0,640,420)
}