let bullets = [];
let player1 = [];
let paused = false;
let activeKeys = [];

let backGroundMusic;
let bossMusic;

let enemySpawnInterval;
let bulletSpawnInterval;
let bulletSpawnGinterval;
let megaBossShootInterval;

let fallingBoss = [];
let enemyBullets = [];
let fallingEnemies = [];
let bonusIntervals = [];
let fallingBonuses = [];
let bossSpawned = false;
let fallingMegaBoss = [];
let megaBossSpawned = false;

let img,
	imgAst,
	imgAst1,
	imgAst2,
	imgAst3,
	imgBack,
	imgBoss,
	imgLaser,
	imgEnemyLaser,
	imgMegaBoss;

function preload() {
	soundFormats("wav", "mp3");
	backGroundMusic = loadSound("assets/musics/musicStage1.mp3");
	bossMusic = loadSound("assets/musics/bossMusic.wav");
	img = loadImage("assets/images/ship2.png");
	imgBoss = loadImage("assets/images/boss2.png");
	imgAst = loadImage("assets/images/asteroide.png");
	imgBack = loadImage("assets/images/pixelSpace.jpg");
	imgAst1 = loadImage("assets/images/asteroide1.png");
	imgAst2 = loadImage("assets/images/asteroide2.png");
	imgAst3 = loadImage("assets/images/asteroide3.png");
	imgMegaBoss = loadImage("assets/images/megaBoss.png");
	imgLaser = loadImage("assets/images/laseryellow.png");
	imgEnemyLaser = loadImage("assets/images/enemylaser.png");
}

function gameFinished() {
	return (
		fallingMegaBoss.length > 0 &&
		fallingMegaBoss.every((boss) => boss.isDestroyed())
	);
}

function win() {
	textSize(32);
	fill(255);
	textAlign(CENTER);
	rectMode(CENTER);
	rect(width / 2, height / 2, 800, 100);
	stroke(0);
	strokeWeight(3);
	fill("red");
	text(
		"GG t'as gagné (F5 si tu veux rejouer)! Score :" + player1.score,
		width / 2,
		height / 2
	);
	noLoop(); // Stop le draw loop
}

function gameOver() {
	textSize(32);
	fill(255);
	textAlign(CENTER);
	rectMode(CENTER);
	rect(width / 2, height / 2, 800, 100);
	stroke(0);
	strokeWeight(3);
	fill("red");
	text(
		"Perdu (F5 si tu veux rejouer) ! Score :" + player1.score,
		width / 2,
		height / 2
	);
	noLoop(); // Stop le draw loop

	clearInterval(enemySpawnInterval);
	clearInterval(bulletSpawnGinterval);
	clearInterval(bulletSpawnInterval);
	stopMegaBossShooting();
}

function displayScore() {
	textAlign(RIGHT);
	textSize(50);
	fill(255);
	text("Score :" + player1.score, width / 1.5, height / 1.01);
}

class Bonus {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 30;
		this.height = 30;
		this.speed = 2;
		this.type = random(["MORE", "AS"]);
	}

	update() {
		this.y += this.speed;
	}

	draw() {
		fill(0, 255, 0);
		rect(this.x, this.y, this.width, this.height);
	}

	applyEffect(player1) {
		if (this.type === "AS") {
			if (!paused) {
				const interval1 = setInterval(() => {
					let newBullet = new Bullet(
						player1.x1 + img.width / 9,
						player1.y1 / 1.03
					);
					bullets.push(newBullet);
				}, 100); // Balle de gauche

				const interval2 = setInterval(() => {
					let newBullet = new Bullet(
						player1.x1 + img.width / 1.25,
						player1.y1 / 1.03
					);
					bullets.push(newBullet);
				}, 100); // Balle de droite

				bonusIntervals.push(interval1, interval2);
			}
		} else if (this.type === "MORE") {
			if (!paused) {
				clearInterval(bulletSpawnInterval);
				clearInterval(bulletSpawnGinterval);

				//balle du centre
				const interval1 = setInterval(() => {
					let newBullet = new Bullet(
						player1.x1 + img.width / 2.1,
						player1.y1 / 1.1
					);
					bullets.push(newBullet);
				}, 500);
				// double la balle du centre
				const interval2 = setInterval(() => {
					let newBullet = new Bullet(
						player1.x1 + img.width / 2.5,
						player1.y1 / 1.1
					);
					bullets.push(newBullet);
				}, 500);

				// balle de gauche
				const interval3 = setInterval(() => {
					let newBullet = new Bullet(
						player1.x1 + img.width / 9,
						player1.y1 / 1.03
					);
					bullets.push(newBullet);
				}, 500);

				// double la balle de Gauche
				const interval4 = setInterval(() => {
					let newBullet = new Bullet(
						player1.x1 + img.width / 20,
						player1.y1 / 1.03
					);
					bullets.push(newBullet);
				}, 500);

				// balle de droite
				const interval5 = setInterval(() => {
					let newBullet = new Bullet(
						player1.x1 + img.width / 1.25,
						player1.y1 / 1.03
					);
					bullets.push(newBullet);
				}, 500);

				//double la balle de droite
				const interval6 = setInterval(() => {
					let newBullet = new Bullet(
						player1.x1 + img.width / 1.15,
						player1.y1 / 1.03
					);
					bullets.push(newBullet);
				}, 500);

				bonusIntervals.push(
					interval1,
					interval2,
					interval3,
					interval4,
					interval5,
					interval6
				);
			}
		}
	}
}

class EnemyBullet {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.speed = 3;
		this.width = 50;
		this.height = 100;
	}

	update() {
		this.y += this.speed;
	}

	draw() {
		if (imgEnemyLaser) {
			image(imgEnemyLaser, this.x, this.y, this.width, this.height);
		} else {
			fill(255, 0, 0);
		}
	}
}

class Bullet {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.speed = 30;
		this.radius = 10;
	}

	update() {
		this.y -= this.speed; // Les balles montent, donc on diminue la valeur de y
	}

	draw() {
		fill(255, 255, 0);
		image(imgLaser, this.x, this.y, this.radius, 100);
	}
}

class FallingMegaBoss {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 350;
		this.height = 500;
		this.speed = 0.15;
		this.health = 150; // Vie du boss, 1 bullet = 1vie

		// Définir les marges de la hitbox
		this.hitboxOffsetX = 60; // définit la distance horizontale entre le côté gauche de l'image du boss et le côté gauche de sa hitbox.
		this.hitboxOffsetY = 10;
		this.hitboxWidth = this.width - 110; // Réduire la taille du côté droit, définit la largeur de la hitbox.
		this.hitboxHeight = this.height - 50; //définit la hauteur de la hitbox.
	}

	update() {
		this.y += this.speed;
	}

	draw() {
		if (imgMegaBoss) {
			image(imgMegaBoss, this.x, this.y, this.width, this.height);
		} else {
			fill(255);
			rect(this.x, this.y, this.width, this.height);
		}
	}

	shoot() {
		// Tire trois balles : une au centre et deux sur les côtés
		let centerBullet = new EnemyBullet(
			this.x + this.width / 2.3,
			this.y + this.height
		);
		let leftBullet = new EnemyBullet(
			this.x + this.width / 10,
			this.y + this.height / 2
		);
		let rightBullet = new EnemyBullet(
			this.x + this.width / 1.35,
			this.y + this.height / 2
		);
		enemyBullets.push(centerBullet, leftBullet, rightBullet);
	}

	// réduire la santé du boss
	reduceHealth(amount) {
		this.health -= amount;
	}

	// bien vérifier si le boss est KC
	isDestroyed() {
		return this.health <= 0;
	}
}

class FallingBoss {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 250;
		this.height = 400;
		this.speed = 0.5;
		this.health = 20; // Vie du boss, 1 bullet = 1vie

		this.hitboxOffsetX = 60;
		this.hitboxOffsetY = 10;
		this.hitboxWidth = this.width - 140;
		this.hitboxHeight = this.height - 100;
	}

	update() {
		this.y += this.speed;
	}

	draw() {
		if (imgBoss) {
			image(imgBoss, this.x, this.y, this.width, this.height);
		} else {
			fill(255);
			rect(this.x, this.y, this.width, this.height);
		}
	}

	// réduire la santé du boss
	reduceHealth(amount) {
		this.health -= amount;
	}

	// bien vérifier si le boss est KC
	isDestroyed() {
		return this.health <= 0;
	}
}

class FallingEnemies {
	constructor(x, y, imageIndex, asteroidImages) {
		this.x = x;
		this.y = y;
		this.width = 90;
		this.height = 90;
		this.speed = 1;
		this.imageIndex = imageIndex;
		this.asteroidImages = asteroidImages;
		let selectedImage = asteroidImages[imageIndex];
		image(selectedImage, this.x, this.y, this.width, this.height);
	}

	update() {
		this.y += this.speed;
	}

	draw() {
		let selectedImage = this.asteroidImages[this.imageIndex];
		image(selectedImage, this.x, this.y, this.width, this.height);
	}
}

function pausemenu() {
	textAlign(CENTER);
	textSize(80);
	fill("red");
	text("PAUSE Restart = R", width / 4, height / 3, 500);
}

function setup() {
	backGroundMusic.play();
	backGroundMusic.setVolume(0.1);

	createCanvas(800, 1200);
	player1 = {
		x1: width / 2.4,
		y1: height - 150,
		speed: 8,
		score: 0,

		reset() {
			this.x1 = width / 2.4;
			this.y1 = height - 150;
		},
	};
}

// Position aléatoire en x
// un ennemi en haut du canvas
// ennemi toutes les secondes
function manageIntervals() {
	clearInterval(enemySpawnInterval);
	clearInterval(bulletSpawnInterval);
	clearInterval(bulletSpawnGinterval);

	if (!paused) {
		// Commencer les intervalles seulement si le jeu n'est pas en pause
		enemySpawnInterval = setInterval(() => {
			let x = random(50, width - 70);
			fallingEnemies.push(
				new FallingEnemies(x, 0, floor(random(4)), [
					imgAst,
					imgAst1,
					imgAst2,
					imgAst3,
				])
			);
		}, 500);
		bulletSpawnGinterval = setInterval(() => {
			let newBullet = new Bullet(player1.x1 + img.width / 9, player1.y1 / 1.03);
			bullets.push(newBullet);
		}, 500); // Balle de gauche

		bulletSpawnInterval = setInterval(() => {
			let newBullet = new Bullet(
				player1.x1 + img.width / 1.25,
				player1.y1 / 1.03
			);
			bullets.push(newBullet);
		}, 500); // vitesse des bullets, balle de droite
	}
	// Arrêter les intervalles si le jeu est en pause
}

function startMegaBossShooting() {
	if (fallingMegaBoss.length > 0) {
		clearInterval(megaBossShootInterval);
		megaBossShootInterval = setInterval(() => {
			fallingMegaBoss.forEach((boss) => {
				boss.shoot();
			});
		}, 5000);
	}
}

function stopMegaBossShooting() {
	clearInterval(megaBossShootInterval);
}

function draw() {
	if (paused) {
		return;
	}

	if (gameFinished()) {
		win();
		return;
	}

	let bossesToRemove = [];
	let bulletsToRemove = [];
	let enemiesToRemove = [];
	let bonusesToRemove = [];
	let megaBossesToRemove = [];
	let enemyBulletsToRemove = [];

	// Score du joueur  = invoc boss
	if (player1.score >= 50 && !bossSpawned) {
		let x = width / 3;
		fallingBoss.push(new FallingBoss(x, 0));
		bossSpawned = true;
	}

	// Score du joueur = invoc MegaBoss
	if (player1.score >= 200 && !megaBossSpawned) {
		let x = width / 3;
		bossMusic.play();
		backGroundMusic.pause();
		clearInterval(enemySpawnInterval);
		fallingMegaBoss.push(new FallingMegaBoss(x, 0));
		megaBossSpawned = true;
		startMegaBossShooting();
	}

	if (imgBack) {
		image(imgBack, 0, 0, width, height);
	} else {
		background(0);
	}

	noFill();
	displayScore(); // afficher le score sur l'écran

	image(img, player1.x1, player1.y1); // image du vaisseau/joueur

	for (let i = fallingBoss.length - 1; i >= 0; i--) {
		if (!fallingBoss[i]) continue;
		fallingBoss[i].update();
		fallingBoss[i].draw();

		if (checkCollision(fallingBoss[i], player1)) {
			console.log("Collision BOSS");
			gameOver();
			fallingBoss.splice(i, 1);
		}
	}

	for (let i = fallingMegaBoss.length - 1; i >= 0; i--) {
		if (!fallingMegaBoss[i]) continue;
		fallingMegaBoss[i].update();
		fallingMegaBoss[i].draw();

		if (checkCollision(fallingMegaBoss[i], player1)) {
			console.log("Collision MEGABOSS");
			gameOver();
			fallingMegaBoss.splice(i, 1);
		}
	}

	// Mettre à jour et dessiner les ennemis
	for (let i = fallingEnemies.length - 1; i >= 0; i--) {
		if (!fallingEnemies[i]) continue;
		fallingEnemies[i].update();
		fallingEnemies[i].draw();

		// Vérifier les collisions avec le joueur
		if (checkCollision(fallingEnemies[i], player1)) {
			console.log("Collision TRASH");
			gameOver();
			fallingEnemies.splice(i, 1);
		}
	}

	for (let i = bullets.length - 1; i >= 0; i--) {
		bullets[i].update();
		bullets[i].draw();

		for (let j = fallingEnemies.length - 1; j >= 0; j--) {
			if (checkBulletCollision(bullets[i], fallingEnemies[j])) {
				bulletsToRemove.push(i);
				enemiesToRemove.push(j);
				player1.score++;
				// ajoute ce que tu veux quand les mobs meurt
				break;
			}
		}

		for (let j = fallingBoss.length - 1; j >= 0; j--) {
			if (checkBulletCollision(bullets[i], fallingBoss[j])) {
				bullets.splice(i, 1);
				fallingBoss[j].reduceHealth(1);
				if (fallingBoss[j].isDestroyed()) {
					bossesToRemove.push(j); // Supprimer le boss s'il est détruit
					player1.score += 10;

					// Ajoute un bonus lorsque le boss est détruit
					let bonus = new Bonus(
						fallingBoss[j].x + fallingBoss[j].width / 2,
						fallingBoss[j].y + fallingBoss[j].height
					);
					fallingBonuses.push(bonus);
					// ajoute ce que tu veux quand le boss est mort
				}
				break;
			}
		}

		for (let j = fallingMegaBoss.length - 1; j >= 0; j--) {
			if (checkBulletCollision(bullets[i], fallingMegaBoss[j])) {
				bullets.splice(i, 1);
				fallingMegaBoss[j].reduceHealth(1);
				if (fallingMegaBoss[j].isDestroyed()) {
					megaBossesToRemove.push(j); // Supprimer le boss s'il est détruit
					if (gameFinished()) {
						win();
					}
				}
				break;
			}
		}
	}

	for (let i = enemyBullets.length - 1; i >= 0; i--) {
		if (!enemyBullets[i]) continue;
		enemyBullets[i].update();
		enemyBullets[i].draw();
		if (checkCollision(enemyBullets[i], player1)) {
			console.log("Collision avec une balle ennemie");
			gameOver();
			enemyBullets.splice(i, 1);
		}
	}

	// Mettre à jour et dessiner les bonus
	for (let i = fallingBonuses.length - 1; i >= 0; i--) {
		fallingBonuses[i].update();
		fallingBonuses[i].draw();

		if (checkCollision(fallingBonuses[i], player1)) {
			fallingBonuses[i].applyEffect(player1);
			bonusesToRemove.push(i);
		}
	}

	// Supprimer les bonus récupérés, enlever les bullets, enemies, et les bosses
	bulletsToRemove.forEach((index) => bullets.splice(index, 1));
	bossesToRemove.forEach((index) => fallingBoss.splice(index, 1));
	bonusesToRemove.forEach((index) => fallingBonuses.splice(index, 1));
	enemiesToRemove.forEach((index) => fallingEnemies.splice(index, 1));
	enemyBulletsToRemove.forEach((index) => enemyBullets.splice(index, 1));
	megaBossesToRemove.forEach((index) => fallingMegaBoss.splice(index, 1));

	// Déplacer le joueur
	if (activeKeys.includes("q") || activeKeys.includes("Q")) {
		if (player1.x1 > 0) {
			player1.x1 -= player1.speed;
		}
	}

	if (activeKeys.includes("d") || activeKeys.includes("D")) {
		if (player1.x1 + img.width < width) {
			// Vérifiez si le côté droit du joueur 2 reste dans la toile
			player1.x1 += player1.speed;
		}
	}

	if (activeKeys.includes("z") || activeKeys.includes("Z")) {
		if (player1.y1 > 0) {
			player1.y1 -= player1.speed;
		}
	}

	if (activeKeys.includes("s") || activeKeys.includes("S")) {
		if (player1.y1 + img.height < height) {
			// Vérifiez si le bas du joueur 2 reste dans la toile
			player1.y1 += player1.speed;
		}
	}
}

function keyPressed() {
	if (!activeKeys.includes(key)) {
		activeKeys.push(key);
	}
	if (keyCode == ESCAPE) {
		pausemenu();
		paused = !paused;
		manageIntervals();
		if (paused) {
			pausemenu();
		}
	}
	if (key === "r" || key === "R") {
		resetGame();
	}

	if (keyCode === 32) {
		// Barre espace
		if (backGroundMusic.isPlaying()) {
			backGroundMusic.pause();
		} else {
			backGroundMusic.play();
		}
	}

	if (key === "+") {
		backGroundMusic.setVolume(backGroundMusic.getVolume() + 0.1);
		bossMusic.setVolume(bossMusic.getVolume() + 0.1);
	} else if (key === "-") {
		backGroundMusic.setVolume(backGroundMusic.getVolume() - 0.1);
		bossMusic.setVolume(bossMusic.getVolume() - 0.1);
	}
}

function keyReleased() {
	activeKeys.splice(
		activeKeys.findIndex((el) => el == key),
		1
	);
}

function checkCollision(enemy, player) {
	// Calcul des coordonnées du joueur
	const playerMinX = player.x1;
	const playerMaxX = player.x1 + img.width;
	const playerMinY = player.y1;
	const playerMaxY = player.y1 + img.height;

	let enemyMinX, enemyMaxX, enemyMinY, enemyMaxY;

	if (enemy instanceof FallingBoss) {
		enemyMinX = enemy.x + enemy.hitboxOffsetX;
		enemyMaxX = enemy.x + enemy.hitboxOffsetX + enemy.hitboxWidth;
		enemyMinY = enemy.y + enemy.hitboxOffsetY;
		enemyMaxY = enemy.y + enemy.hitboxOffsetY + enemy.hitboxHeight;
	} else {
		enemyMinX = enemy.x;
		enemyMaxX = enemy.x + enemy.width;
		enemyMinY = enemy.y;
		enemyMaxY = enemy.y + enemy.height;
	}

	return (
		enemyMinX < playerMaxX &&
		enemyMaxX > playerMinX &&
		enemyMinY < playerMaxY &&
		enemyMaxY > playerMinY
	);
}

function checkBulletCollision(bullet, enemy) {
	let enemyMinX, enemyMaxX, enemyMinY, enemyMaxY;

	if (enemy instanceof FallingBoss || enemy instanceof FallingMegaBoss) {
		enemyMinX = enemy.x + enemy.hitboxOffsetX;
		enemyMaxX = enemy.x + enemy.hitboxOffsetX + enemy.hitboxWidth;
		enemyMinY = enemy.y + enemy.hitboxOffsetY;
		enemyMaxY = enemy.y + enemy.hitboxOffsetY + enemy.hitboxHeight;
	} else {
		enemyMinX = enemy.x;
		enemyMaxX = enemy.x + enemy.width;
		enemyMinY = enemy.y;
		enemyMaxY = enemy.y + enemy.height;
	}

	// Vérifier la collision entre une balle et un ennemi
	return (
		bullet.x + bullet.radius > enemyMinX &&
		bullet.x - bullet.radius < enemyMaxX &&
		bullet.y + bullet.radius > enemyMinY &&
		bullet.y - bullet.radius < enemyMaxY
	);
}

function checkCollision(object, player) {
	const playerMinX = player.x1;
	const playerMaxX = player.x1 + img.width;
	const playerMinY = player.y1;
	const playerMaxY = player.y1 + img.height;

	let objectMinX = object.x;
	let objectMaxX = object.x + object.width;
	let objectMinY = object.y;
	let objectMaxY = object.y + object.height;

	return (
		objectMinX < playerMaxX &&
		objectMaxX > playerMinX &&
		objectMinY < playerMaxY &&
		objectMaxY > playerMinY
	);
}

function resetGame() {
	bullets = [];
	paused = false;
	player1.reset();
	activeKeys = [];
	fallingBoss = [];
	enemyBullets = [];
	player1.score = 0;
	bossSpawned = false;
	fallingEnemies = [];
	fallingBonuses = [];
	fallingMegaBoss = [];
	megaBossSpawned = false;

	clearInterval(enemySpawnInterval);
	clearInterval(bulletSpawnGinterval);
	clearInterval(bulletSpawnInterval);
	stopMegaBossShooting();

	bonusIntervals.forEach(clearInterval);
	bonusIntervals = [];

	manageIntervals();
}
