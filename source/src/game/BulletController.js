import Bullet from './Bullet';
import sound from '../../public/sounds/shoot.wav';
/* // for iOS:
import sound1 from '../../public/sounds/shoot1.wav';
import sound2 from '../../public/sounds/shoot2.wav';
import sound3 from '../../public/sounds/shoot3.wav';
import sound4 from '../../public/sounds/shoot4.wav';
import sound5 from '../../public/sounds/shoot5.wav';
import sound6 from '../../public/sounds/shoot6.wav';
import sound7 from '../../public/sounds/shoot7.wav';
import sound8 from '../../public/sounds/shoot8.wav';
import sound9 from '../../public/sounds/shoot9.wav';
import sound10 from '../../public/sounds/shoot10.wav'; */

let w = window,
	d = document,
	g = d.getElementsByTagName('body')[0],
	xx = w.innerWidth || g.clientWidth;

let bulletWidth = 5;
let bulletHeight = 20;
let widthRatio = 1.36;
let heightRatio = 1.36;

if (xx <= 1024) {
	bulletWidth = bulletWidth * 0.85;
	bulletHeight = bulletHeight * 0.85;
}

if (xx <= 600) {
	bulletWidth = bulletWidth * 0.75;
	bulletHeight = bulletHeight * 0.75;
	widthRatio = widthRatio * 1.1;
	heightRatio = heightRatio * 1;
}
if (xx <= 425) {
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

		/* 		this.shootSound1 = new Audio(sound1);
		this.shootSound2 = new Audio(sound2);
		this.shootSound3 = new Audio(sound3);
		this.shootSound4 = new Audio(sound4);
		this.shootSound5 = new Audio(sound5);
		this.shootSound6 = new Audio(sound6);
		this.shootSound7 = new Audio(sound7);
		this.shootSound8 = new Audio(sound8);
		this.shootSound9 = new Audio(sound9);
		this.shootSound10 = new Audio(sound10);

		this.sounds = [
			this.shootSound1,
			this.shootSound2,
			this.shootSound3,
			this.shootSound4,
			this.shootSound5,
			this.shootSound6,
			this.shootSound7,
			this.shootSound8,
			this.shootSound9,
			this.shootSound10,
		];

		this.sounds.forEach(function (item) {
			item.volume = 0.5;
		}); */
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

	/* 	copyArray = [];
	getRandomItem(array) {
	// Random:
	// this.randomIndex = Math.floor(Math.random() * array.length);
	// this.item = array[this.randomIndex];
	// return this.item;

	// Random with no repeat:
	if (this.copyArray.length === 0) {
		for (let i = 0; i < array.length; i++) this.copyArray.push(i);
	}
	let randomIndexCopyArray = Math.floor(
		Math.random() * this.copyArray.length
	);
	let randomIndexOriginalArray = this.copyArray[randomIndexCopyArray];

	this.copyArray.splice(randomIndexCopyArray, 1);
	this.item = array[randomIndexOriginalArray];

	return this.item;
	} */

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
				console.log(this.shootSound);

				/* 	// for random sounds:
				let shootSound = this.getRandomItem(this.sounds);
				shootSound.currentTime = 0;
				shootSound.play();
				// console.log(shootSound); */
			}
			this.timeTillNextBulletAllowed = timeTillNextBulletAllowed;
		}
	}
}
