module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jquery: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		parser: '@babel/eslint-parser',
		sourceType: 'module',
		ecmaVersion: 'latest',
		requireConfigFile: false,
		babelOptions: {
			babelrc: false,
			configFile: false,
			presets: ['@babel/preset-env'],
		},
	},
	plugins: ['import'],
	rules: {
		'no-unused-vars': ['off', { caughtErrorsIgnorePattern: '^ignore' }],
		'linebreak-style': [
			'error',
			process.platform === 'win32' ? 'windows' : 'unix',
		],
	},
};
