function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{
	// Long vertical
	//set the fill colour to red
	fill(0, 0, 0);
	//set a thick stroke weight for the black lines
	strokeWeight(12);
	//draw the red rectangle 
	rect(180, -10, 10, 1000);

	// Long horizontal
	fill(0, 0, 0);
	strokeWeight(12);
	rect(-10, 600, 1000, 10);

	// Top left horizontal
	fill(0, 0, 0);
	strokeWeight(12);
	rect(-10, 240, 180, 25);

	// Bottom right horizontal
	fill(0, 0, 0);
	strokeWeight(12);
	rect(700, 700, 180, 25);

	// Bottom right vertical
	fill(0, 0, 0);
	strokeWeight(12);
	rect(700, 600, 10, 200);

}