var wall, thickness, bullet, speed, weight;
var deformation;


function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);

  thickness = random(22,83);

  bullet = createSprite(50,200,50,40);
  bullet.shapeColor = (255);
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80);
}

function draw() {
  background(0);

    if(keyWentDown("SPACE")){

    car.velocityX = speed; 
    }



    if(w.x - car.x < (car.width + w.width)/2)
    {
      car.velocityX = 0;
      var deformation = 0.5* weight* speed * speed/22509;

      if(deformation> 180)
      {
        car.shapeColor = color(255,0,0);
      }

      if(deformation<180 && deformation>100)
      {
        car.shapeColor = color(230,230,0);
      }

      if(deformation<100)
      {
        car.shapeColor = color(0,255,0);
      }
    }

    if(hasCollided(bullet,wall))
    {
      bullet.veloxityX = 0;
      var deformation = 0.5*weight*speed*speed/ (thickness*thickness*thickness);

      if(deformation>10)
      {
        wall.shapeColor = color(255,0,0);
      }

      if(deformation<10)
      {
        wall.shapeColor= color(0,255,0);
      }
    }

  drawSprites();
  hasCollided();
}


function hasCollided(lbullet,lwall)
{
bulletRightEdge= lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}