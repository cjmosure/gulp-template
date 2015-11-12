Gulp Template
=============

[![Build Status](https://travis-ci.org/cjmosure/gulp-template.svg?branch=master)](https://travis-ci.org/cjmosure/gulp-template)

A Gulp template to:

1. Watch & compile SASS
2. Customizable Bootstrap-SASS
3. jQuery, Angular, Bootstrap JS included and concatenated

### Setup

1. You need to have node.js & npm installed on your local machine ([Download Here](https://nodejs.org))
2. Clone this repo: `git clone https://github.com/cjmosure/gulp-template.git`
3. Run `npm install` or `sudo npm install` if it barks errors at you
4. Run `bower install` to get dependencies (jquery, angular, bootstrap - see the bower.json file) 
5. Run `gulp` to run the gulp tasks
6. Add your development url to the `./assets/manifest.json` devUrl to use BrowserSync 
7. Run `gulp watch` to watch for SASS changes and compile automatically (control+C to stop watching)

### Compiled Assets

By default, all styles compile to `dist/app.css` and all javascript to `dist/main.js`. Additionally the `app/app.js` file is your Angular app.

### Bootstrap & Variables

See the `assets/sass/_bootstrap.scss` file - that includes all of the bootstrap sass components  (you may choose to comment out ones you aren't using for a small performance increase). The `assets/sass/_variables.scss` file declares any Bootstrap variables so you can make your own customizations directly out of the box.

### Roadmap

- [x] BrowserSync
- [ ] asset builder for scripts
- [ ] lazypipe for css and script tasks
- [ ] add banners to minified files
- [ ] asset builder for sass + bootstrap
- [ ] compress images and add to dist
- [ ] karma tests for scripts
- [ ] gulp server
- [ ] github page