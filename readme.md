# Google Shopping - Conditionals and Loops

We'll be using a file represented as **JSON** for this assignment. JSON is a standard for formatting data, and it's a common format you'll see throughout your web development career. Even more important will be parsing JSON.

We'll be writing the results of our work out to another JSON file, `results.json`

## Getting Started
* Fork and clone this repository to your computer
* Run `npm install` to install dependencies
* Look in the starter file called `google-shopping.js`. We'll be using Node to read the JSON file and access it as a JavaScript object
* Run the file by typing `node google-shopping.js` into the console. If you get items printing out, you're ready to start on the assignment.
* You will be storing results of running the file in `results.json`

## Deliverables

Use the product search result in your file to find the following results. Note that you may want to comment out your solutions as you solve them, to avoid a mess of output in the terminal.

Remember to type `node google-shopping.js` to run the file.

When you get to problem 2, you will need to change the way you store the results. Try making a key for each thing you are storing.

1.) Go through the `items` and find all results that have `kind` of `shopping#product`. Print the count of these results. Where else is this count information stored in the search results?

2.) Save the `title` of all items with a `backorder` availability in `inventories`.

3.) Save the `title` of all items with more than one image link.

4.) Save all "Canon" products in the items (careful with case sensitivity).

5.) Save all `items` that have an author name of "eBay" and are brand "Canon".

6.) Save all the products with their **brand**, **price**, and an **image link**


## Hints

* We'll be dealing with large JSON objects quite frequently throughout the course. Use a Chrome extension such as [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc) in order to easily collapse arrays and objects during this assignment. Once the extension is installed, access the JSON file via Github by going to **products.json**, then clicking **Raw** right above the file.
* When in doubt, think about the different functions available for **strings**, **objects**, and **arrays**.
* Double-check your results, especially with #5
* Documentation
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

## Extra:
Write the program so that it will take a command line argument that gets back out the value that you recorded in `results.json`

Example command where you have a key named `titleBackorderInventories`: `node google-shopping.js getkey titleBackorderInventories`

## Extra:
Take the google shopping functions exercise: [https://github.com/wdi-sg/google-shopping-functions](https://github.com/wdi-sg/google-shopping-functions) and store the info recorded there into a results.json file.

Make a key for storing the result of each function.

---

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
