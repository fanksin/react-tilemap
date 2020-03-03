# Webpack Project Template
Write applications with ES6 (to ES5) JavaScript transpilation and Sass support.

## Requirements
* Node.js & npm

## Getting Started
* Run `npm install`

Write your styles in `src/scss/` using Sass (.scss) and your ES6 JavaScript in `src/js/`. To transpile your code to CSS and ES5 JavaScript, see the **Commands** section below. 

### Commands
`npm start` 
*Starts Webpack development server and watches files in development mode (uncompressed JS & CSS webpack bundle). This does not build any files to the `dist/` directory but injects changes from `src/` into the live environment.

`npm run build`
*Builds `src/` files and outputs to `dist/` in production mode (compressed JS & CSS webpack bundle).