img="";
status="";
objects=[];
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetecter=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="status : detecting objects";
}
function modelloaded(){
    console.log("modelloaded");
    status="true";
    objectdetecter.detect(img,getresult);
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
    image(img,0,0,640,420);
    if(status!=""){
        for(var i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="status: Object Detecter"
        fill("red");
        percent=floor(objects[i].confidence*100);
        textSize(25);
        text(objects[i].label + " " + percent + "%", objects[i].x+10,objects[i].y+15);
        noFill();
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
 
        }
    }
}