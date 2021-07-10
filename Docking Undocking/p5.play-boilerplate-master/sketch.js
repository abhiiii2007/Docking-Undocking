var astronaut; 
var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;

function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
 
  brush = loadAnimation("images/brush.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png")
  gym = loadAnimation("images/gym1.png","images/gym2.png")
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png","images/move1.png");


}

function setup() {
  createCanvas(800,600);
  createEdgeSprites();

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}


function draw() {
  background(bg);  

  
  textSize(20);
  fill("white");
  text('Instruction:\nUp Arrow = Brushing\nDown Arrow = Gymming\nLeft Arrow = Eating\nRight Arrow = Bathing\nm key = moving',50,50);
  drawSprites();
  

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
 /* astronaut.bounceOff(topEdge);
  astronaut.bounceOff(rightEdge);
  astronaut.bounceOff(leftEdge);
  astronaut.bounceOff(bottomEdge);
  */

  
  

}






