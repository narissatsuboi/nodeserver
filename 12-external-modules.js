// NPM 
// npm - global command, comes with node
// npm --version

// local dependency - use package on certain project only
// npm i <packageName>

// global dependency - use it on any project 
// npm install -g <packageName> 
// sudo npm install -g <packageName> (linux)

// package.json - manifest file (stores important info about project/package)
// method 1 - manual approach (create package.json in the root, create properties etc)
// method 2 - npm init (step by step, press enter to skip)
// method 3 - npm init -y (download everything by default)

// use external package, save to var 
const _ = require('lodash')
const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);
console.log('helloworld');