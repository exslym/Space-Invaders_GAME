import Enemy from './Enemy';
import MovingDirection from './MovingDirection';
import soundDeath from '../../public/sounds/enemy-death.wav';

let w = window,
	d = document,
	g = d.getElementsByTagName('body')[0],
	xx = w.innerWidth || g.clientWidth;

let enemyWidth = 44;
let enemyHeight = 32;
let widthRatio = 1.36;
let heightRatio = 1.36;
let defaultXVelocityRatio = 1.6;
let defaultYVelocityRatio = 1;

if (xx < 1024) {
	enemyWidth = enemyWidth * 0.85;
	enemyHeight = enemyHeight * 0.85;
}

if (xx < 600) {
	enemyWidth = enemyWidth * 0.7;
	enemyHeight = enemyHeight * 0.7;
	widthRatio = widthRatio * 1.1;
	heightRatio = heightRatio * 1;
	defaultXVelocityRatio = 1;
	defaultYVelocityRatio = 0.7;
}
if (xx < 425) {
	enemyWidth = enemyWidth * 0.55;
	enemyHeight = enemyHeight * 0.55;
	widthRatio = widthRatio * 1.2;
	heightRatio = heightRatio * 1.1;
	defaultXVelocityRatio = 0.9;
	defaultYVelocityRatio = 0.6;
}

export default class EnemyController {
	enemyMap = [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
		[2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	];
	enemyRows = [];

	currentDirection = MovingDirection.right;
	xVelocity = 0;
	yVelocity = 0;
	defaultXVelocity = defaultXVelocityRatio;
	defaultYVelocity = defaultYVelocityRatio;
	moveDownTimerDefault = 32;
	moveDownTimer = this.moveDownTimerDefault;
	fireBulletTimerDefault = 100;
	fireBulletTimer = this.fireBulletTimerDefault;

	constructor(canvas, enemyBulletController, playerBulletController) {
		this.canvas = canvas;
		this.enemyBulletController = enemyBulletController;
		this.playerBulletController = playerBulletController;
		this.enemyDeathSound = new Audio(soundDeath);
		this.enemyDeathSound.volume = 0.5;

		this.createEnemies();
	}

	draw(ctx) {
		this.decrementMoveDownTimer();
		this.updateVelocityAndDirection();
		this.collisionDetection();
		this.drawEnemies(ctx);
		this.resetMoveDownTimer();
		this.fireBullet();
	}

	collisionDetection() {
		this.enemyRows.forEach(enemyRow => {
			enemyRow.forEach((enemy, enemyIndex) => {
				if (this.playerBulletController.collideWith(enemy)) {
					this.enemyDeathSound.currentTime = 0;
					this.enemyDeathSound.play();
					enemyRow.splice(enemyIndex, 1);
				}
			});
		});
		this.enemyRows = this.enemyRows.filter(enemyRow => enemyRow.length > 0);
	}

	fireBullet() {
		this.fireBulletTimer--;
		if (this.fireBulletTimer <= 0) {
			this.fireBulletTimer = this.fireBulletTimerDefault;
			const allEnemies = this.enemyRows.flat();
			const enemyIndex = Math.floor(Math.random() * allEnemies.length);
			const enemy = allEnemies[enemyIndex];
			this.enemyBulletController.shoot(enemy.x, enemy.y, -4);
			// console.log(enemyIndex);
		}
	}

	decrementMoveDownTimer() {
		if (
			this.currentDirection === MovingDirection.downLeft ||
			this.currentDirection === MovingDirection.downRight
		) {
			this.moveDownTimer--;
		}
	}

	resetMoveDownTimer() {
		if (this.moveDownTimer <= 0) {
			this.moveDownTimer = this.moveDownTimerDefault;
		}
	}

	updateVelocityAndDirection() {
		for (const enemyRow of this.enemyRows) {
			if (this.currentDirection === MovingDirection.right) {
				this.xVelocity = this.defaultXVelocity;
				this.yVelocity = 0;
				const rightMostEnemy = enemyRow[enemyRow.length - 1];
				if (
					rightMostEnemy.x &&
					rightMostEnemy.x + rightMostEnemy.width >= this.canvas.width
				) {
					this.currentDirection = MovingDirection.downLeft;
					break;
				}
			} else if (this.currentDirection === MovingDirection.downLeft) {
				if (this.moveDown(MovingDirection.left)) {
					break;
				}
			} else if (this.currentDirection === MovingDirection.left) {
				this.xVelocity = -this.defaultXVelocity;
				this.yVelocity = 0;
				const leftMostEnemy = enemyRow[0];
				if (leftMostEnemy.x && leftMostEnemy.x <= 0) {
					this.currentDirection = MovingDirection.downRight;
					break;
				}
			} else if (this.currentDirection === MovingDirection.downRight) {
				if (this.moveDown(MovingDirection.right)) {
					break;
				}
			}
		}
	}

	moveDown(newDirection) {
		this.xVelocity = 0;
		this.yVelocity = this.defaultYVelocity;
		if (this.moveDownTimer <= 0) {
			this.currentDirection = newDirection;
			return true;
		}
		return false;
	}

	drawEnemies(ctx) {
		this.enemyRows.flat().forEach(enemy => {
			enemy.move(this.xVelocity, this.yVelocity);
			enemy.draw(ctx);
		});
	}

	createEnemies() {
		this.enemyMap.forEach((row, rowIndex) => {
			this.enemyRows[rowIndex] = [];
			row.forEach((enemyNumber, enemyIndex) => {
				if (enemyNumber > 0) {
					this.enemyRows[rowIndex].push(
						new Enemy(
							enemyIndex * enemyWidth * widthRatio,
							rowIndex * enemyHeight * heightRatio,
							enemyNumber,
							enemyWidth,
							enemyHeight
						)
					);
				}
			});
		});
	}

	collideWith(sprite) {
		return this.enemyRows.flat().some(enemy => enemy.collideWith(sprite));
	}
}
