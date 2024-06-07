import React, { useState, useContext } from "react";
import olx from "../assets/olx.png";
import { AuthContext, FirebaseContext } from "../../src/store/Context";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const Sell = ({ setSell }) => {
  const [image, setImage] = useState(null);
  const [productname, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");

  const { user } = useContext(AuthContext);
  const { storage } = useContext(FirebaseContext);
  const { app } = useContext(FirebaseContext);

  const handleSubmit = () => {
    if (user) {
      if (image) {
        const storageRef = ref(storage, `/images/${image.name}`);
        uploadBytes(storageRef, image)
          .then((snapshot) => {
            return getDownloadURL(snapshot.ref);
          })
          .then((url) => {
            const firestore = getFirestore(app); // Get Firestore instance
            addDoc(collection(firestore, "products"), {
              // Add user data to 'users' collection
              id: uuidv4(),
              productname: productname,
              description: description,
              price: price,
              image: url,
            }).then(() => {
              toast.success("Product added successfully");
              setImage(null);
              setDescription("");
              setPrice("");
              setProductName("");
              setSell(false);
              window.location.reload();
            });
          })
          .catch((error) => {
            console.error("Error uploading image:", error);
          });
      }
    } else {
      toast.info("Please Login");
    }
  };
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
                      {/* <form className="bg-white p-6 w-full max-w-sm"> */}
                      <div className="mb-4 w-full">
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          value={productname}
                          onChange={(e) => setProductName(e.target.value)}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Enter ad title"
                        />
                      </div>

                      <div className="mb-4 w-full">
                        <label
                          htmlFor="description"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Description
                        </label>
                        <textarea
                          id="description"
                          rows="4"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Enter ad description"
                        ></textarea>
                      </div>

                      <div className="mb-4 w-full">
                        <label
                          htmlFor="price"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Price
                        </label>
                        <input
                          type="number"
                          id="price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Enter price"
                        />
                      </div>

                      <div className="mb-4 w-full">
                        <label
                          htmlFor="image"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Image
                        </label>
                        <input
                          type="file"
                          id="image"
                          onChange={(e) => {
                            setImage(e.target.files[0]);
                          }}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          accept="image/*"
                        />
                      </div>
                      {image ? (
                        <img
                          className="w-full mt-2"
                          src={image ? URL.createObjectURL(image) : ""}
                          width="150px"
                          height="150px"
                          alt="Post"
                        />
                      ) : (
                        ""
                      )}
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full bg-black border-4 text-white hover:text-black py-2 px-4 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                      >
                        Submit Ad
                      </button>
                      {/* </form> */}
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
