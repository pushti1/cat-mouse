
function preload() {
    //load the images here

     catImage=loadAnimation("images/cat1.png");
     cat1Image=loadAnimation("images/cat2.png","images/cat3.png");
     cat2Image=loadAnimation("images/cat4.png");

     groundImage=loadImage("images/garden.png");

     mouseImage=loadAnimation("images/mouse1.png");
     mouse1Image=loadAnimation("images/mouse2.png","images/mouse3.png");
     mouse2Image=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     
     cat=createSprite(900,700);
     cat.addAnimation("qq",catImage);
     cat.scale=0.3

     mouse=createSprite(100,700);
     mouse.addAnimation("W",mouseImage);
     mouse.scale=0.3

}

function draw() {

    background(groundImage);
    //Write condition here to evalute if tom and jerry collide

     if (cat.x -mouse.x <(cat.width - mouse.width)/2 ){
         cat.velocityX=0;
         cat.addAnimation("D",cat2Image);
         cat.changeAnimation("D")
         cat.x=300

         mouse.addAnimation("k",mouse2Image);
         mouse.changeAnimation("k");
     }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if (keyCode === LEFT_ARROW){
     mouse.addAnimation("j",mouse1Image)
     mouse.changeAnimation("j")

     cat.addAnimation("S",cat1Image);
     cat.changeAnimation("S");
     cat.velocityX=-5;
 }

}
