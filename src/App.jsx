import React, {useContext, useEffect} from 'react';
import Main from './components/Main.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext, FirebaseContext } from './store/Context.jsx';
import Sell from './components/Sell.jsx';
import ProductDetails from './components/ProductDetails.jsx';

const App = () => {
  const {user, setUser} = useContext(AuthContext)
  const {auth} = useContext(FirebaseContext)
  useEffect(() => {
    if (auth) {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
      });
      return () => unsubscribe();
    }
  }, [auth, setUser]);
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/productdetails" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
