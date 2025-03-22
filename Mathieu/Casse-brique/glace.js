let activeKeys = [];
let player1 = null;
let ball = null;
let img;
let blocks = [];
let paused = false;
let ballFalls = 0;
let fallingObjects = [];
let balls = []; // Liste des balles supplémentaires

class FallingObject {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 20;
		this.height = 20;
		this.speed = 1;
	}

	update() {
		this.y += this.speed;
	}

	draw() {
		fill(255, 0, 0);
		rect(this.x, this.y, this.width, this.height);
	}
}

function preload() {
	img = loadImage("images/glace.avif");
}
function pausemenu() {
	textAlign(CENTER);
	textSize(50);
	fill("white");
	text("PAUSE Restart = R", width / 2, height / 2, 300);
}

function displayScore() {
	textAlign(CENTER);
	textSize(50);
	fill(255);
	text("Score: " + player1.score, width / 2, height / 1.1);
}

function gameFinished() {
	for (let i = 0; i < blocks.length; i++) {
		if (!blocks[i].destroyed) {
			return false;
		}
	}
	return true;
}

function setup() {
	createCanvas(1000, 800);

	player1 = {
		x: width / 2,
		y: height / 1.2,
		height: 7,
		width: 110,
		score: 0,
		speed: 8,
	};

	ball = {
		diameter: 20,
		x: width / 2,
		y: height / 2,
		speed: 5,
		direction: {
			x: 0,
			y: 1,
		},

		reset() {
			ball.direction = {
				x: 0,
				y: 1,
			};
			ball.speed = 5;
			ball.x = width / 2;
			ball.y = height / 2;
			// player1.x = width / 2;
			// player1.y = height / 1.2;
		},
	};
	balls.push(ball); // Ajoutez la balle initiale à la liste des balles
	// les blocs bleu
	let rows = 5;
	let cols = 20;
	let blockWidth = (width - 400) / cols; // espacement sur la droite
	let blockHeight = 40;
	let spaceBetweenBlocks = 20;

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			blocks.push({
				x: j * (blockWidth + spaceBetweenBlocks) + spaceBetweenBlocks / 2,
				y: i * (blockHeight + spaceBetweenBlocks),
				width: blockWidth,
				height: blockHeight,
				destroyed: false,
			});
		}
	}
}

function draw() {
	if (paused) {
		return;
	}
	// Quand tout les blocs sont détruit
	if (gameFinished()) {
		textSize(32);
		fill(255);
		textAlign(CENTER);
		rectMode(CENTER);
		rect(500, 400, 500, 100);
		stroke(0);
		strokeWeight(3);
		fill("red");
		text("GG t'es trop fort", width / 2, height / 2);
		return;
	}

	background(0);
	image(img, 0, 0, 1000, 800);
	stroke(255);
	rectMode(CENTER);
	displayScore();

	// Met à jour et dessine toutes les balles
	for (let i = balls.length - 1; i >= 0; i--) {
		let b = balls[i];
		b.x += b.speed * b.direction.x;
		b.y += b.speed * b.direction.y;

		// Quand la balle tombe en bas = reset
		if (b.y + b.diameter / 2 > height) {
			balls.splice(i, 1);
			ballFalls++; // Augmente le nombre de chutes de la balle
			if (ballFalls >= 50000) {
				resetGame(); // Réinitialise le jeu si la balle est tombée x fois
				ballFalls = 0; // Réinitialise le compteur de chutes de la balle
			}
			continue;
		}

		// Collision bord de l'écran de la balle
		if (b.x + b.diameter / 2 > width || b.x - b.diameter / 2 < 0) {
			b.direction.x = -b.direction.x;
		}
		if (b.y - b.diameter / 2 < 0) {
			b.direction.y = -b.direction.y;
		}

		// Appeler la fonction collision
		collision(player1, b);

		noStroke();
		fill(224, 230, 13);
		circle(b.x, b.y, b.diameter);
	}

	// No outscreen de la raquette
	player1.x = constrain(
		player1.x,
		player1.width / 2,
		width - player1.width / 2
	);
	// Touche
	if (activeKeys.includes("q") || activeKeys.includes("Q")) {
		player1.x -= player1.speed;
	}

	if (activeKeys.includes("d") || activeKeys.includes("D")) {
		player1.x += player1.speed;
	}

	strokeWeight(2);
	stroke("rgba(50%, 150%, 40%,1)");
	fill(241, 58, 223);
	rect(player1.x, player1.y, player1.width, player1.height, 15);

	// Dessiner les blocs
	for (let i = 0; i < blocks.length; i++) {
		if (!blocks[i].destroyed) {
			rectMode(CORNER);
			fill(119, 192, 253);
			stroke("white");
			rect(blocks[i].x, blocks[i].y, blocks[i].width, blocks[i].height);
			// Vérifier les collisions avec la balle
			for (let j = balls.length - 1; j >= 0; j--) {
				let b = balls[j];
				if (collides(b, blocks[i])) {
					b.direction.y = -b.direction.y;
					blocks[i].destroyed = true;
					player1.score++;
					fallingObjects.push(
						new FallingObject(
							blocks[i].x + blocks[i].width / 2,
							blocks[i].y + blocks[i].height / 2
						)
					);
				}
			}
		}
	}

	// Mettre à jour et dessiner les objets tombants
	for (let i = fallingObjects.length - 1; i >= 0; i--) {
		fallingObjects[i].update();
		fallingObjects[i].draw();
		if (checkCollision(fallingObjects[i], player1)) {
			fallingObjects.splice(i, 1);
			// Ajouter une nouvelle balle
			addNewBall();
			addNewBall();
			addNewBall();
		}
	}
}

// Fonction pour ajouter une nouvelle balle
function addNewBall() {
	if (balls.length === 0) return;

	//new ball sur une ball existante
	let existingBall = balls[Math.floor(Math.random() * balls.length)];

	let angle = random(0, TWO_PI);
	let direction = {
		x: cos(angle),
		y: sin(angle),
	};

	let newBall = {
		diameter: 20,
		x: existingBall.x,
		y: existingBall.y,
		speed: 5,
		direction: direction,
		reset() {
			newBall.direction = {
				x: random(-1, 1),
				y: 1,
			};
			newBall.speed = 5;
			newBall.x = width / 2;
			newBall.y = height / 2;
		},
	};
	balls.push(newBall);
	console.log(newBall.speed);
}

// Collision balle/player
function collision(player, b) {
	const ballLeft = b.x - b.diameter / 2;
	const ballRight = b.x + b.diameter / 2;
	const ballTop = b.y - b.diameter / 2;
	const ballBottom = b.y + b.diameter / 2;

	const playerLeft = player.x - player.width / 2;
	const playerRight = player.x + player.width / 2;
	const playerTop = player.y - player.height / 2;
	const playerBottom = player.y + player.height / 2;

	if (
		ballRight > playerLeft &&
		ballLeft < playerRight &&
		ballBottom > playerTop &&
		ballTop < playerBottom
	) {
		b.direction.y = -b.direction.y;
		b.direction.x = (b.x - player.x) / (player.width / 2);
		b.speed += 0.1;
		player1.width += 1;
	}
}

function collides(ball, block) {
	const ballLeft = ball.x - ball.diameter / 2;
	const ballRight = ball.x + ball.diameter / 2;
	const ballTop = ball.y - ball.diameter / 2;
	const ballBottom = ball.y + ball.diameter / 2;

	const blockLeft = block.x;
	const blockRight = block.x + block.width;
	const blockTop = block.y;
	const blockBottom = block.y + block.height;

	return (
		ballRight > blockLeft &&
		ballLeft < blockRight &&
		ballBottom > blockTop &&
		ballTop < blockBottom
	);
}

// Faire vanish l'objet toucher par le joueur
function checkCollision(object, player) {
	const objectLeft = object.x - object.width / 2;
	const objectRight = object.x + object.width / 2;
	const objectTop = object.y - object.height / 2;
	const objectBottom = object.y + object.height / 2;

	const playerLeft = player.x - player.width / 2;
	const playerRight = player.x + player.width / 2;
	const playerTop = player.y - player.height / 2;
	const playerBottom = player.y + player.height / 2;

	return (
		objectRight > playerLeft &&
		objectLeft < playerRight &&
		objectBottom > playerTop &&
		objectTop < playerBottom
	);
}

// Touche fonctionne
function keyPressed() {
	if (!activeKeys.includes(key)) {
		activeKeys.push(key);
	}
	// Restart game when R pressed
	if (key === "r" || key === "R") {
		resetGame();
	}

	if (keyCode == ESCAPE) {
		pausemenu();
		paused = !paused;
	}
}

function keyReleased() {
	activeKeys.splice(
		activeKeys.findIndex((el) => el == key),
		1
	);
}

// Reset le jeu quand "R" ou balle tombe
function resetGame() {
	player1.score = 0;
	balls = [ball]; // Réinitialise les balles
	ball.reset();
	player1.x = width / 2;
	player1.y = height / 1.2;
	ballFalls = 0;
	player1.width = 110;
	ball.diameter = 20;
	for (let i = 0; i < blocks.length; i++) {
		blocks[i].destroyed = false;
	}
	for (let i = fallingObjects.length - 1; i >= 0; i--) {
		fallingObjects = false;
	}
}
