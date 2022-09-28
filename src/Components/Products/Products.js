import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { getStoredData } from "../../utilities/SaveToLs";

const Products = ({ increaseCartCount }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedData = getStoredData();
    const savedCart = [];
    for (const id in storedData) {
      const addedProductsInCart = products.find((product) => product.id === id);
      if (addedProductsInCart) {
        const qty = storedData[id];
        addedProductsInCart.quantity = qty;
        savedCart.push(addedProductsInCart);
      }
    }
    setCart(savedCart);
  }, [products]);

  const addToCart = (selectedProduct) => {
    let itemAdded;

    const existingCart = cart.find((product) => product.id === selectedProduct.id);
    if (!existingCart) {
      selectedProduct.quantity = 1;
      itemAdded = [...cart, selectedProduct];
    } else {
      existingCart.quantity = existingCart.quantity + 1;
      const rest = cart.filter((product) => product.id !== existingCart.id);
      itemAdded = [...rest, existingCart];
    }
    console.table(existingCart);

    setCart(itemAdded);
  };

  return (
    <div className="shop-container my-10 flex sm:flex-row flex-col  mx-10">
      {/* products */}
      <div className="products basis-full	 lg:basis-3/4">
        <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-4  mx-10">
          {products.map((product) => (
            <Product
              products={product}
              key={product.id}
              increaseCartCount={increaseCartCount}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
      </div>

      {/* cart */}
      <div className="cart basis-full lg:basis-1/4 bg-orange-400 rounded">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Products;
