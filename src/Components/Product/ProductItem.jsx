import React from "react";
import { FaStar } from "react-icons/fa";

const ProductItem = ({ product }) => {
  return (
    <div
      className="md:max-w-sm w-full overflow-hidden bg-white border-1  border-gray-500  rounded-lg shadow-lg hover:translate-y-[-5px]
     hover:shadow-xl  duration-500"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain p-4 hover:scale-110 transition-all "
      />
      <div className="p-5">
        <h2 className="text-lg font-bold text-primary truncate">
          {product.title}
        </h2>
        <p className="text-sm text-black mb-2">{product.category}</p>
        <p className="text-sm text-gray-600 mb-3 truncate">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold text-primary">${product.price}</p>
          <div className="flex items-center text-yellow-400">
            <span className="mr-1">{product.rating.rate}</span>
            <FaStar />
            <span className="ml-1 text-gray-600">({product.rating.count})</span>
          </div>
        </div>
        <button className="mt-4 w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
