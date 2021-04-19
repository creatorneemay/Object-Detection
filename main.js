img=""
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
}
function draw(){
    image(img,0,0,400,400)
    fill("red")
    text("dog", 50,60)
    text("cat", 300,120)
    textSize(15)
    noFill()
    rect(40,38,180,350)
    rect(190,100,170,200)
}