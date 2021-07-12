function preload(){

}
function setup(){
   
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    

    video.hide();
    tint_color="";
}
function draw(){
    image(video,150,150,300,200);
    tint(tint_color);
    fill(255,51,153);
    stroke(255,255,255);
    circle(50,50,90);
    fill(102,255,255);
    rect(90, 30, 500, 50);
     
    fill(255,51,153);
    stroke(255,255,255);
    circle(570,50,90);
    fill(102,255,255);
    rect(30, 90, 50, 300);
    fill(255,51,153);
    stroke(255,255,255);
    circle(50,400,90);

    fill(102,255,255);
    rect(90, 380, 450, 50);
    fill(255,51,153);
    stroke(255,255,255);
    circle(570,400,90);
    fill(102,255,255);
    rect(550, 90, 50, 270);
}
function take_snapshot(){
    save("studen_name.png");

}
function apply_filter(){
    tint_color=document.getElementById("color_name").value;
}
