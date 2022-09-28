import React from "react";
import CartItem from "../CartItem/CartItem";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let totalTax = 0;
  let grandTotal = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping * product.quantity;
    totalTax = parseFloat((totalPrice * 0.1).toFixed(2));
    grandTotal = totalPrice + totalShipping + totalTax;
  }

  return (
    <div className="p-5 ">
      <div className="text-left ">
        <h2 className="text-lg font-bold mt-5">Cart Summary</h2>
        {cart.map((cartItems) => (
          <CartItem cartItems={cartItems} key={cartItems.id}></CartItem>
        ))}

        <p>Total Added Products: {quantity}</p>
        <p>Sub-total Cost: ${totalPrice}</p>
        <p>Shipping Cost: ${totalShipping}</p>
        <p>Tax: ${totalTax}</p>
        <p>Total Cost: ${grandTotal}</p>
      </div>
    </div>
  );
};

export default Cart;
