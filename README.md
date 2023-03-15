### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Deployment on GitHub Pages (Optional)

```
npm run deploy
```

This adds gh-pages branch to your project github repository, deploys built project there, hosts the site via GitHub Pages.

### Features:

- `ES6` Support **via babel (v7)**
- `SASS` Support via **sass-loader**
- `Linting` via **eslint** & **@babel/eslint-parser**
- `Formatter` via **prettier**
- `Autoprefix` via **postcss-preset-env**
- `Image Optimization` via **image-minimizer-webpack-plugin** & **svgo**

### When you run `npm run build`:
- The css file moves to a separate bundle file and gets it included in the head of the `index.html`
<br />via [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin).
- All image files (svg, png, jpg/jpeg, webp) gets compressed with lossless quality
<br />via [image-minimizer-webpack-plugin](https://github.com/webpack-contrib/image-minimizer-webpack-plugin).

Place all external connected files (jQuery and others) in ./tools and provide them path in html file.
