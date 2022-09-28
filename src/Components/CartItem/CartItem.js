import React from "react";

const CartItem = ({ cartItems }) => {
  const { name, img, quantity, price, category } = cartItems;

  const lowerCaseName = name.toLowerCase();
  return (
    <div>
      <div className="mx-2  my-6 divide-y divide-gray-200 flex">
        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img src={img} alt="" />
        </div>

        <div class="ml-4 flex flex-1 flex-col text-left">
          <div>
            <div class="flex justify-between text-base font-medium text-black">
              <h3>{name.toLocaleLowerCase()}</h3>
              <p class="ml-4">${price}</p>
            </div>
            <p class="mt-1 text-sm text-black">{category}</p>
          </div>
          <div class="flex flex-1 items-end justify-between text-sm">
            <p class="text-black">Qty {quantity}</p>

            <div class="flex">
              <p class="text-black">Total ${price * quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
