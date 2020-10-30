var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 100, 50);
  movingRect=createSprite(500,100,50,100)
  movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
  movingRect.debug=true;
  fixedRect.debug=true;

}

function draw() {
  background(0);  
  movingRect.y=mouseY;
  movingRect.x=mouseX;
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2){
    movingRect.shapeColor="red"
  fixedRect.shapeColor="red"
  }
  else{
    movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
  }
  drawSprites();

}