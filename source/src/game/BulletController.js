import Bullet from './Bullet';
import sound from '../../public/sounds/shoot.wav';

let w = window,
	d = document,
	g = d.getElementsByTagName('body')[0],
	xx = w.innerWidth || g.clientWidth;

let bulletWidth = 5;
let bulletHeight = 20;
let widthRatio = 1.36;
let heightRatio = 1.36;

if (xx < 1024) {
	bulletWidth = bulletWidth * 0.85;
	bulletHeight = bulletHeight * 0.85;
}

if (xx < 600) {
	bulletWidth = bulletWidth * 0.75;
	bulletHeight = bulletHeight * 0.75;
	widthRatio = widthRatio * 1.1;
	heightRatio = heightRatio * 1;
}
if (xx < 425) {
	bulletWidth = bulletWidth * 0.7;
	bulletHeight = bulletHeight * 0.7;
	widthRatio = widthRatio * 1.2;
	heightRatio = heightRatio * 1.1;
}

export default class BulletController {
	bullets = [];
	timeTillNextBulletAllowed = 0;

	constructor(canvas, maxBulletsAtATime, bulletColor, soundEnabled) {
		this.canvas = canvas;
		this.maxBulletsAtATime = maxBulletsAtATime;
		this.bulletColor = bulletColor;
		this.soundEnabled = soundEnabled;

		this.shootSound = new Audio(sound);
		this.shootSound.volume = 0.5;
	}

	draw(ctx) {
		this.bullets = this.bullets.filter(
			bullet => bullet.y + bullet.width > 0 && bullet.y <= this.canvas.height
		);
		this.bullets.forEach(bullet => bullet.draw(ctx));

		if (this.timeTillNextBulletAllowed > 0) {
			this.timeTillNextBulletAllowed--;
		}
	}

	collideWith(sprite) {
		const bulletThatHitSpriteIndex = this.bullets.findIndex(bullet =>
			bullet.collideWith(sprite)
		);

		if (bulletThatHitSpriteIndex >= 0) {
			this.bullets.splice(bulletThatHitSpriteIndex, 1);
			return true;
		}
	}

	shoot(x, y, velocity, timeTillNextBulletAllowed = 0) {
		if (
			this.timeTillNextBulletAllowed <= 0 &&
			this.bullets.length < this.maxBulletsAtATime
		) {
			const bullet = new Bullet(
				this.canvas,
				x,
				y,
				velocity,
				this.bulletColor,
				bulletWidth,
				bulletHeight
			);
			this.bullets.push(bullet);
			if (this.soundEnabled) {
				this.shootSound.currentTime = 0;
				this.shootSound.play();
			}
			this.timeTillNextBulletAllowed = timeTillNextBulletAllowed;
		}
	}
}
