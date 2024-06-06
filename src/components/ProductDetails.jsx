import React, { useEffect, useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ProductDetails() {
  const [detail, setDetail] = useState("");
  const [products, setProducts] = useState({})
  const location = useLocation();
  const { product } = location.state;
  useEffect(() => {
    setProducts(product);
  },[])
  console.log(product);
  return (
    <>
    <Navbar />
      <div className="w-full py-4 xl:h-[750px] h-[1300px] grid xl:flex md:justify-center  bg-gray-200">
        <div className=" lg:w-[830px]   h-[670px] rounded-md">
          <img
            className="h-[450px]   max-lg:w-full object-cover lg:w-[830px] rounded-md bg-white"
            src={products?.image}
            alt=""
          />
          <div className="description rounded-md   mt-1 p-4 h-[280px] bg-white xl:h-[230px] border">
            <div className="text-xl font-bold">Details</div>
            <div className="text-md py-3 lg:w-[50%] w-[100%]">
              <span className="text-gray-500">Name</span>
              <span className="float-right">{products?.productname}</span>
            </div>
            <hr className="text-gray-500 mt-2" />
            <div className="text-xl font-bold mt-4">Description</div>
            <div className="text-sm py-3 ">{products?.description}</div>
          </div>
        </div>
        <div className=" xl:ml-4  xl:w-[400px]  h-[400px] rounded-md max-sm:w-full">
          <div className=" h-[160px] p-5 border bg-white  rounded-md">
            <div className="font-bold text-3xl">
              <span>₹{products?.price}</span>
              <span className="float-end flex">
                <AiOutlineShareAlt size={24} />
                <IoMdHeartEmpty size={24} className="ml-2" />
              </span>
            </div>
            <div className='px-2 py-2 border border-black cursor-pointer flex justify-center font-bold mt-10 rounded-md'>Chat with Seller</div>
          </div>
          {/* <div className='h-[160px]  border bg-white   rounded-md mt-4  flex flex-col justify-between p-4'>
        <div className='flex items-center'>
          <img className='w-[45px] rounded-[100px]' src={avtar} alt="" />
          <span className='ml-2 font-bold w-full'>{sellerDetail.username}</span>

        </div>
        <span className='font-semibold text-sm'>Email: {sellerDetail.email}</span>
        <div className='px-2 py-2 border border-black cursor-pointer flex justify-center font-bold mt-1 rounded-md'>Chat with Seller</div>
        </div> */}

          {/* <div className=" h-[100px] border bg-white   rounded-md mt-4  p-4">
            <div className="font-bold text-2xl">
              <span>Posted In</span>
            </div>
            <div className="text-xs mt-4">
              <span>{detail.location}</span>{" "}
              <span className="float-right">{detail.date}</span>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
