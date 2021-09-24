var S1,S2,S3,S4;
var S5 = []
function setup() 
{
  createCanvas(400,400);
  S1 = createSprite (200,200,13,13);
  S2 = createSprite (100,200,13,13);
  S3 = createSprite (300,200,13,13);
  S4 = createSprite (400,200,13,13);
  S5 = [S1,S2,S3,S4]
  console.log(S5[3].position.x)
  console.log(S5[3].position.y)
}

function draw() 
{
background(51);
drawSprites();
}

