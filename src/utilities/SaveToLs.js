// database in  local storage

const addToDb = (id) => {
  // increase quantity
  let cartItems = getStoredData();

  const quantity = cartItems[id];
  if (quantity) {
    cartItems[id] = quantity + 1;
  } else {
    cartItems[id] = 1;
  }

  localStorage.setItem("cart-items", JSON.stringify(cartItems));
};

const getStoredData = () => {
  let cartItems = {};

  //get old data
  const savedData = localStorage.getItem("cart-items");
  if (savedData) {
    cartItems = JSON.parse(savedData);
  }
  return cartItems;
};

export { addToDb, getStoredData };
