var jsonfile = require('jsonfile');

// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)
})
