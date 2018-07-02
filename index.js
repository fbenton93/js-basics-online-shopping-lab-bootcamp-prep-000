var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newObject = {};
  newObject['itemName'] = item;
  newObject['itemPrice'] = Math.floor(Math.random() * 100);
  
  cart.push(newObject);
  
  return `${newObject.itemName} has been added to your cart.`
}

function viewCart() {
  var output = {};
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length - 1) {
        output += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      } else {
        output += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
    }
  
  }
  
  return "In your cart, you have " + output
  
}