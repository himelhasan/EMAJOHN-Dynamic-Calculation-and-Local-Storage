import React from "react";
import { addToDb } from "../../utilities/SaveToLs";

const Product = ({ products, increaseCartCount, addToCart }) => {
  const {
    category,
    id,
    img,
    name,
    price,
    quantity,
    ratings,
    ratingsCount,
    seller,
    shipping,
    stock,
  } = products;
  return (
    <div>
      <div className="relative block border border-gray-100">
        <button
          type="button"
          className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>

        <img alt="Toy" src={img} className="object-contain w-full h-56 lg:h-72" />

        <div className="p-6">
          <strong className="inline-block px-3 py-1 text-xs font-medium bg-orange-400">
            {category}
          </strong>

          <h5 className="mt-4 text-lg font-bold">{name}</h5>

          <p className="mt-2 text-sm text-gray-700">${price}</p>

          <button
            type="button"
            className="block w-full p-4 mt-4 text-sm font-medium bg-orange-500 rounded-sm"
            onClick={() => {
              increaseCartCount();
              addToCart(products);
              addToDb(id);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
