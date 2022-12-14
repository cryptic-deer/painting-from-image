let img;
let posX, posY;
let cnv;
let c;

function preload() {
	img = loadImage(
		"https://images.unsplash.com/photo-1524255684952-d7185b509571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
	);
}

function setup() {
	cnv = createCanvas(img.width, img.height);
	cnv.position((windowWidth - img.width) / 2, (windowHeight - img.height) / 2);

	background("lightgrey");
	for (let gridX = 0; gridX < img.width; gridX += 2) {
		for (let gridY = 0; gridY < img.height; gridY += 2) {
			push();
			let tileX = 1;
			let tileY = 1;
			posX = tileX * gridX;
			posY = tileY * gridY;

			//get color
			c = img.get(posX, posY);
			stroke(color(c));
			translate(posX, posY);
			rotate(radians(random(360)));
			noFill();

			strokeWeight(random(5));
			line(0, 0, 8, 8);
			pop();
		}
	}
}

function keyPressed() {
	if (key === "s") {
		saveCanvas("portrait.jpg");
	}
}
