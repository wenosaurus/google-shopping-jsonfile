// Write your solutions below
const jsonfile = require('jsonfile');

const file = 'products.json'

jsonfile.readFile(file, function(err, obj) {

  var resultFile = 'result.json';
  var result = {};
  var count = 0;

  // QUESTION 1

  for(i = 0 ; i < obj.items.length ; i++){
    if(obj.items[i].kind === 'shopping#product'){
      count += 1;
    }

    // console.log(count);

  };

  // QUESTION 2

  var inventories = [];

  for(i = 0 ; i < obj.items.length ; i++){
    if(obj.items[i].product.inventories[0].availability === 'backorder'){
      inventories.push(obj.items[i].product.title);
      // console.log(inventories);
    }
  };

  // QUESTION 3

  var images = [];

  for(i = 0 ; i < obj.items.length ; i++){
    if(obj.items[i].product.images.length > 1){
      images.push(obj.items[i].product.title);
      // console.log(images);
    }
  };

  // QUESTION 4

  var canon = [];

  for(i = 0 ; i < obj.items.length ; i++){
    if(obj.items[i].product.brand === 'Canon'){
      canon.push(obj.items[i].product.brand);
      // console.log(canon);
    }
  };

    // QUESTION 4

  var ebay = [];

  for(i = 0 ; i < obj.items.length ; i++){
    if(obj.items[i].product.brand === 'Canon' && obj.items[i].product.author.name.startsWith('eBay')){
      ebay.push(obj.items[i].product.author.name);
      // console.log(ebay);
    }
  };

  for(i = 0 ; i < obj.items.length ; i++){
      console.log('Brand: ' + obj.items[i].product.brand);
      console.log('Price: ' + obj.items[i].product.inventories[0].price);
      console.log('Image: ' + obj.items[i].product.images[0].link);
  };

  result["count"] = count;
  result["inventories"] = inventories;
  result["images"] = images;
  result["canon"] = canon.length;
  result["ebay"] = ebay;

  jsonfile.writeFile(resultFile, result, function (err) {
    console.error(err)
  });

});

