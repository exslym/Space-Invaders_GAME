import '../styles/index.scss';
import Game from '../game/main';

if (process.env.NODE_ENV === 'development') {
	require('../index.html');
}

window.addEventListener('DOMContentLoaded', function () {
	'use strict';
	Game();
});
