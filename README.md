# mongoose-browser

Compiled browser version of mongoose.

`import mongoose from "mongoose"` will import the precompiled *browser* library.

## Why this exists

["As of version 5.x, Mongoose no longer has an officially supported pre-built browser bundle, you need to compile the browser library yourself."](http://mongoosejs.com/docs/browser.html)

## To compile a new version:

* clone the repo and `npm install`
* build browser bundle (this will replace /index.js)
  * `npm run build`

## What we did to mongo fork:
  * added deps: `webpack "babel-loader@^8.0.0-beta" @babel/core @babel/preset-env uglifyjs-webpack-plugin`
  * added config: `webpack.config.js`
  * moved all dependencies to `devDependencies`
  * replaced `index.js` with compiled version
  * added `.npmignore` so only `package.json` and `index.js` get published to npm
  * added `npm build` script
