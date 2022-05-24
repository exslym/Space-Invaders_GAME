import playerSrc from '../../public/images/player.png';
import soundDeath from '../../public/sounds/enemy-death.wav';

export default class Player {
	constructor(canvas, velocity, bulletController, width, height) {
		this.canvas = canvas;
		this.velocity = velocity;
		this.bulletController = bulletController;

		this.x = this.canvas.width / 2 - width / 2;
		this.y = this.canvas.height - width * 2;
		if (this.y <= this.canvas.height - 75) {
			this.y = this.canvas.height - 75;
		}
		this.width = width;
		this.height = height;
		this.image = new Image();
		this.image.src = playerSrc;

		this.deathSound = new Audio(soundDeath);
		this.deathSound.volume = 0.5;

		document.addEventListener('keydown', this.keydown);
		document.addEventListener('keyup', this.keyup);
	}

	rightPressed = false;
	leftPressed = false;
	shootPressed = false;

	draw(ctx) {
		this.move();
		this.collideWidthWalls();
		if (this.shootPressed) {
			this.bulletController.shoot(this.x + this.width / 2, this.y, 4, 10);
		}
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
	}

	move() {
		if (this.rightPressed) {
			this.x += this.velocity;
		} else if (this.leftPressed) {
			this.x += -this.velocity;
		}
	}

	collideWidthWalls() {
		//left:
		if (this.x < 0) {
			this.x = 0;
		}

		//right:
		if (this.x > this.canvas.width - this.width) {
			this.x = this.canvas.width - this.width;
		}
	}

	keydown = e => {
		if (e.code == 'ArrowRight') {
			this.rightPressed = true;
		}
		if (e.code == 'ArrowLeft') {
			this.leftPressed = true;
		}
		if (e.code == 'Space') {
			this.shootPressed = true;
		}
	};

	keyup = e => {
		if (e.code == 'ArrowRight') {
			this.rightPressed = false;
		}
		if (e.code == 'ArrowLeft') {
			this.leftPressed = false;
		}
		if (e.code == 'Space') {
			this.shootPressed = false;
		}
	};
}
