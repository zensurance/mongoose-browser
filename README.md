# mongoose-browser

Compiled browser version of mongoose.

`import mongoose from "mongoose"` will import the precompiled *browser* library.

## Why this exists

["As of version 5.x, Mongoose no longer has an officially supported pre-built browser bundle, you need to compile the browser library yourself."](http://mongoosejs.com/docs/browser.html)

## To compile a new version:

* clone the repo and `npm i`
*  build browser bundle (this will replace the main index.js with new version)
  * `./node_modules/.bin/webpack-cli`

## What we did to mongo fork:
  * added deps: `webpack webpack-cli "babel-loader@^8.0.0-beta" @babel/core @babel/preset-env uglifyjs-webpack-plugin`
  * added config: `webpack.config.js`
  * replaced index.js with compiled version
  
