var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObject = new Object();
  newObject['itemName'] = item;
  newObject['itemPrice'] = Math.floor(Math.random() * 100);
  
  cart.push(newObject);
  
  return `${newObject.itemName} has been added to your cart.`
}