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

function viewCart() {
  output = {};
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have
  }
      
    }
  }
    
  
  
  
  return "In your cart," + output
}