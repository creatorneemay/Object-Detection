img="";
status="";
objects=[];
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    objectdetecter=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="status : detecting objects";
}
function modelloaded(){
    console.log("modelloaded");
    status="true";
}
function getresult(error ,results){
    if(error){
        console.log("error");
    }
    else {
        console.log(results);
        objects=results;
    }
}
function draw(){
    image(img,0,0,400,400);
    fill("red");
    if(status!=""){
        objectdetecter.detect(img,getresult);
    text("dog", 45,60);
    text("cat", 300,120);
    textSize(15);
    noFill();
    rect(40,38,180,350);
    rect(190,100,170,200);
}
}