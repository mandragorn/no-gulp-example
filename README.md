# no-gulp-example

Basic project with some random app and server code that showcases a full build process with NO gulp/grunt/etc.  Insteal the direct CLI is used for each build process:
* Linting - (js and soon to have scss linting)
* Browserified Browser code.
* Sass compiled css
* karma run jasmine tests
* nodemon for server dev
* browser-sync for live reload when server code, css or browser code changes.
* yuidoc js doc build.
* Static resource copying.
* Watch mode for every process above that provides quick dev rebuilds.
* Minimal glue to get the CLIs to play well together:
  * rimraf - OS independent directory cleaning.
  * onchange - to support watch for CLIs that don't support it out of the box.
  * npm-run-all - to support enhanced parallel & sequential execution of npm scripts.

## Install:

```
npm install
```

## Dev build:

```
npm run dev
```

## Just Build:

```
npm run build
```

