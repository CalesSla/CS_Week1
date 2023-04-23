function setup() {
	//create a large square canvas
	createCanvas(800, 800);
}

function draw() {
	fill(0, 250, 0);
	rect(0, 0, 800, 800);

	//set the fill colour to red
	fill(255, 0, 0);

	//draw the red rectangle
	rect(180, -10, 650, 650);

	// white rectangle
	fill(255, 255, 255);
	rect(0, 0, 180, 340);


	rect(0, 300, 180, 340);

	rect(180, 640, 530, 160);

	rect(710, 640, 90, 80);

	// blue rectangle
	fill(0, 0, 255);
	rect(0, 640, 180, 160);

	// yellow rectangle
	fill(255, 255, 0);
	rect(710, 720, 90, 80);

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
