import Card from "./Card";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import { db } from "../firebase/config";
import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../../src/store/Context";
import { collection, getDocs } from "firebase/firestore";
import Loader from "./Loader";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  // const { db } = useContext(FirebaseContext);
  useEffect(() => {
    setLoader(true);
    const fetchProducts = async () => {
      const productsCollection = collection(db, "products");
      try {
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setLoader(false);
      }
    };

    fetchProducts();
  }, [db]);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="mainParenDiv">
          <Navbar />
          <Banner />

          {products.length > 0 ? (<div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-[1300px] max-sm:grid-cols-1  xl:grid-cols-4">
            {products.map((product, index) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
) : <div className="mx-auto flex items-center text-sm text-gray-400 justify-center h-[400px] max-w-[1300px]">
  No products found
  </div>}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Main;
