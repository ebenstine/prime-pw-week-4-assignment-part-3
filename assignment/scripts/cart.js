console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Creating global array, constant max value of 5, and function to add items
let basket = [];
const maxItems = 5;


function addItem(item) {
  while (isFull() === false) {
    basket.push(item);
    return true
  }
}
//Testing that all my items have been added
console.log('** Test for adding items**');
addItem('Shishitos');
addItem('Halloumi cheese');
addItem('Zucchini');
addItem('Sungolds');
addItem('Basil');
//Logging the array to see that all my items have been added.
console.log('Planning a summer mixed grill:', basket);

//Creating a loop to check through all my items and a function to list them.
function listItems() {
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);

  }
}
//Calling the function
console.log('**Test for listing the shopping cart contents**');
listItems();

//Creating function to empty the shopping cart.
function empty() {
  basket = [];
}

//Testing empty function
console.log('**Test for emptying the shopping cart**');
empty();
console.log('The peppers are browning - changing the plan and putting everything back', basket);

//Creating isFull function and a conditional with outputs according to whether the cart is full.
function isFull() {
  if (basket.length < maxItems) {
    return false
  } else {
    return true
  }
}

//Testing the isFull function
console.log('**Test for whether I made sure to make room for new stuff**');
console.log('Is the cart full?', isFull());
//adding new items so I can test the updated isFullfunction
addItem('red onions');
addItem('lemons');
addItem('pecorino');
addItem('fancy salt');
addItem('lots of arugula');
addItem('the expensive olive oil');

//Logging my new array
console.log('OK decided on a salad instead, so going with:', basket);

//Testing my updated isFull function
console.log('**Test for whether an addition to the cart was blocked**');
console.log('Was the cart too small for that giant bottle of EVOO?', isFull(), basket);

//The function checks the cart for the item in the argument.  If it is not present, the function returns null.
function removeItem(item) {
  if (basket.indexOf(item) === -1) {
    return null;
    console.log('Item not found');
  }
  //Otherwise, the function removes the first matching item?
  else {
    basket.splice(item, 1);
    return item;
  }
}

//Testing whether the remove function removed the correct item
console.log('**Test for removing the first item**');
console.log('I forgot Anna hates', removeItem('red onions'),'so cancel that shiiiit', basket);
