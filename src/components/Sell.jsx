import React from "react";
import olx from "../assets/olx.png";

const Sell = ({setSell}) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
            <div className="absolute top-0 right-0 p-2">
              <button
                onClick={() => {
                  setSell(false);
                }}
                className="text-black text-[250x] py-1 px-3"
              >
                X
              </button>
            </div>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-11 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2">
                    <div className="flex justify-center items-center">
                      <img src={olx} alt="olx" className="h-8 w-15" />
                    </div>
                    <h1 className="text-center font-bold text-lg mt-5 text-black-500">
                      Post Your Ad
                    </h1>
                    <div className="flex flex-col items-center justify-center">
                      <form className="bg-white p-6 w-full max-w-sm">
                        <div className="mb-4">
                          <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Title
                          </label>
                          <input
                            type="text"
                            id="title"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter ad title"
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Description
                          </label>
                          <textarea
                            id="description"
                            rows="4"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter ad description"
                          ></textarea>
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="price"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Price
                          </label>
                          <input
                            type="text"
                            id="price"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter price"
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Image
                          </label>
                          <input
                            type="file"
                            id="image"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            accept="image/*"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-black border-4 text-white hover:text-black py-2 px-4 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                        >
                          Submit Ad
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
