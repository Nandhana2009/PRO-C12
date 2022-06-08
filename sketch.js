
var boy;
var path;
var leftBoundary,rightBoundary;
var boyImg;
var pathImg;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  boyImg = loadImage("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  //creating path
  path = createSprite(200,200,)
  path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;


//creating boy
boy = createSprite(200,50,20,20)
boy.addAnimation(boyImg)

//creating invisible boundaries
leftBoundary = createSprite(5,200,5,400)
leftBoundary.visible=false;

rightBoundary = createSprite(395,200,5,400)
rightBoundary.visible=false;


}

function draw() {
  background(0);
//making the boy move with the mouse
boy.x=World.mouse.x

//making the boy collide with the boundaries
boy.collide(leftBoundary);
boy.collide(rightBoundary);

if(path.y >400){
  path.y = height/2;
} 
}
