function setup() { 
  createCanvas(400, 400);
  
  
} 

function mousePressed()
{
print("("+mouseX+","+mouseY+")");
}
var x = 3;
var x1 =100;
function draw()
{
	background(255);
	var y1 = 100;
	ellipse(x1,y1,50,50);
	x1 = x1 + x;
	if(x1 > 375)
	{
		x =-x;
	}
	if(x1<25)
	{
		x=-x;
	}
}
