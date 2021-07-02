console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//creating global array, constant max value of 5, and function to add items
let basket = [];
const maxItems = 5;


function addItem(item) {
  while (isFull() === false) {
    basket.push(item);
    return true
  }
}
//Testing that all my shit has been added
console.log('** Test for adding items');
addItem('Shishitos');
addItem('Halloumi cheese');
addItem('Zucchini');
addItem('Sungolds');
addItem('Basil');
//logging the array to see that all my shit has been added.
console.log('Craving a mess of summer grilled stuff:', basket);

//creating a loop to check through all my items and a function to list them.
function listItems() {
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);

  }
}
//calling the function
console.log('**Test for listing the contents of the shopping cart');
listItems();
//creating function to empty basket
function empty() {
  basket = [];

}
//test empty function
console.log('**Test for emptying the shopping cart');
empty();
console.log('Actually these peppers are browning, bummer', basket);
//creating isFull function and a conditional with two outcomes according to whether the cart is full.
function isFull() {
  if (basket.length < maxItems) {
    return false
  } else {
    return true
  }
}
//testing the isFull function
console.log('**Test for whether I can add something else');
console.log('Is the cart full?', isFull());
//adding new items so I can test the updated isFullfunction
addItem('Lots of arugula');
addItem('lemons');
addItem('pecorino');
addItem('shallots');
addItem('pine nuts');
addItem('the expensive olive oil');
//logging my new array
console.log('OK decided on a salad instead, so going with', basket);
//Testing my updated isFull function
console.log('**Test for whether an addition to the cart was blocked');
console.log('Was the cart too small for that giant bottle of EVOO?', isFull(), basket);
