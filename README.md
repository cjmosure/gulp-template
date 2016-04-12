# Gulp Template

[![Build Status](https://travis-ci.org/cjmosure/gulp-template.svg?branch=master)](https://travis-ci.org/cjmosure/gulp-template) [![devDependency Status](https://david-dm.org/cjmosure/gulp-template/dev-status.svg)](https://david-dm.org/cjmosure/gulp-template#info=devDependencies)

For examples and more information, see the github page at [cjmosure.github.io/gulp-template](http://cjmosure.github.io/gulp-template/). There is also a react.js version of this as a branch: [github.com/cjmosure/gulp-template/tree/react](https://github.com/cjmosure/gulp-template/tree/react).

### A Gulp boilerplate to:

1. Use Bower for front-end package management
2. Compile SASS & Integrate frameworks (Bootstrap 4 included)
3. Concatenate and minify CSS with sourcemaps
4. Concatenate and minify Javascript plugins
5. Create a lightweight webserver for local development
6. Generally make your development experience more streamlined and productive! :)


## Setup

1. You need to have node.js & npm installed on your local machine ([Download Here](https://nodejs.org))
2. Clone this repo: `git clone https://github.com/cjmosure/gulp-template.git`
3. Run `npm install` or `sudo npm install` if it barks errors at you
4. Run `bower install` to get dependencies (jquery, angular, bootstrap - see the bower.json file) 
5. Run `gulp` to run the gulp tasks
6. Webserver: Run `gulp serve` to open a light webserver and watch for CSS or Javascript changes. URL will automatically open, usually as http://localhost:8000
7. Browsersync (using another webserver: docker, vagrant, mamp, etc): Add your development url to the `./assets/manifest.json` devUrl to use BrowserSync. Run `gulp watch` to watch for CSS or Javascript changes and compile automatically (control+C to stop watching)


## History

Not popular enough to warrant releases, but maybe in the future. See the [commits](https://github.com/cjmosure/gulp-template/commits/master) for history of changes / additions.

## Credits

Christopher J. Mosure <cj@webmachine.io>

## Roadmap

- [x] BrowserSync
- [x] asset builder for scripts
- [x] asset builder for sass + bootstrap
- [x] wiredep bower packages
- [x] lazypipes for css and script tasks
- [x] lazypipes for js tasks
- [x] variable declaration for styles files and paths
- [x] add banners to minified files
- [x] separate main.css (with source maps), main.min.css 
- [ ] compress images and add to dist
- [ ] karma tests for scripts
- [x] gulp server
- [x] github page

## License

Do whatever you'd like...
