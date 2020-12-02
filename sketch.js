var fixRect,movingRect;
var object1,object2,object3,object4;
var number;

function setup() {
  createCanvas(1200,800);
  fixRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(600,400,80,30);
  object1 = createSprite(100,100,50,70);
  object2 = createSprite(200,150,100,100);
  object3 = createSprite(500,200,50,100);
  object4 = createSprite(300,200,40,90);

  fixRect.shapeColor = "green";
  movingRect.shapeColor ="green";
  object1.shapeColor = "green";
  object2.shapeColor = "green";
  object3.shapeColor = "green";
  object4.shapeColor = "green";

  fixRect.debug = true;
  movingRect.debug = true;

  fixRect.velocityY = 1;
  movingRect.velocityY = -1;
}

function draw() {
  background("pink");

  //var check = movingRect.x-fixRect.x;
  //var check1 = fixRect.x-movingRect.x;

  number = fixRect.width/2+movingRect.width/2;

  //console.log(number);
  //console.log("check"+check1);

  // movingRect.x = mouseX;
 // movingRect.y = mouseY;

 if ( isTouching(movingRect,object2)){
  movingRect.shapeColor = "purple";
  object2.shapeColor = "purple";
 }else {
  object2.shapeColor = "green";
  movingRect.shapeColor ="green";
 }

  bounceOff(movingRect,fixRect);

  drawSprites();
}

