import React from "react";

const Card = () => {
  return (
    <div className="max-w-xs w-[300px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          className="w-full h-50 object-cover object-center"
          src="https://via.placeholder.com/270x160"
          alt="Product"
        />
      </div>

      {/* Paisa */}
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-xl">₹10,000</h1>
      </div>

      {/* Category */}
      <div className="px-4 pb-2">
        <p className="text-gray-600 text-sm">Category</p>
      </div>

      {/* Description */}
      <div className="px-4 pb-2">
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    </div>
  );
};

export default Card;
