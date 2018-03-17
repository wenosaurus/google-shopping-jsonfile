// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {
  console.dir(obj)

  var resultFile = 'result.json'
  var result = {name: 'JP'}

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});
