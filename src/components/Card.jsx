import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({product}) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate('productdetails', {
      state:{
        product: product
      }
    }) }
     className="mt-5 max-w-xs w-[300px] mx-auto shadow-md bg-slate-50 border-gray-800 border-[1px] border-opacity-20 rounded-[5px] overflow-hidden">
      {/* Image */}
      <div className="flex items-center justify-center h-40">
        <img
          className="w-full rounded-md h-full object-cover"
          src={product.image}
          alt="Product"
          style={{ maxWidth: "95%", maxHeight: "90%" }}
        />
      </div>

      {/* Paisa */}
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-xl">₹{product.price}</h1>
      </div>

      {/* Category */}
      <div className="px-4 pb-2">
        <p className="text-gray-600 text-sm font-bold">{product.productname}</p>
      </div>

      {/* Description */}
      <div className="px-4 pb-2">
        <p className="text-gray-700 text-base">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
