import React from "react";

const Card = () => {
  return (
    <div className="mt-5 max-w-xs w-[300px] mx-auto bg-white border-black border-[1px] rounded-[5px] overflow-hidden">
      {/* Image */}
      <div className="flex items-center justify-center h-40">
  <img
    className="w-full h-full object-cover"
    src="https://via.placeholder.com/270x160"
    alt="Product"
    style={{ maxWidth: "95%", maxHeight: "90%" }}
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
