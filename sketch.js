var object1,object2;

function setup() {
  createCanvas(1200,800);
  object1=createSprite(200, 200, 50, 50);
  object2=createSprite(600,400,80,30);
}

function draw() {
  background("white");  

object2.y=World.mouseY
object2.x=World.mouseX
if(object2.x-object1.x<object2.width/2+object1.width/2 && object1.x-object2.x<object2.width/2+object1.width/2 && object2.y-object1.y<object2.height/2+object1.height/2 && object1.y-object2.y<object2.height/2+object1.height/2){
object2.shapeColor="red"
object1.shapeColor="red"
} 
else {
object1.shapeColor="blue"
object2.shapeColor="blue"
}


  drawSprites();
}