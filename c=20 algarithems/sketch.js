var movingRect, fixedRect

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 100, 50);
  fixedRect = createSprite(400,200,50,100);
movingRect.shapeColor = "pink";
fixedRect.shapeColor = "pink"
}          

function draw() {
  background(0); 
  
  movingRect.y = mouseY;
movingRect.x = mouseX;
if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 &&
  movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.width/2) {
  movingRect.shapeColor = "white";
  fixedRect.shapeColor = "white"
}
else{
  movingRect.shapeColor = "pink";
  fixedRect.shapeColor = "pink"
}
  drawSprites();
}