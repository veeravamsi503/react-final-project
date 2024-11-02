import { BrowserRouter as Router, Routes, Route, Link, useActionData } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";
import PurchaseHistory from "./PurchaseHistory";
import './App.css';
import Nonvej from "./Nonvej";
import Addcart from "./AddToCart";
import Vej from "./Vej";
import { useSelector } from "react-redux";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";



function App() {
    const cart=useSelector((state)=>state.cart);
    const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);



  return (
    <>
    

    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/veg">Veg items</Link>
        <Link to="/non-veg">Non-Veg items</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
        <Link to="/purchasehistory">Purchase History</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="/aboutus">About Us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Addcart />} />
        <Route path="/purchasehistory" element={<PurchaseHistory />} />
        <Route path="/veg" element={<Vej />} />
        <Route path="/non-veg" element={<Nonvej />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
    <GoogleOAuthProvider clientId="933415793745-ar3j8601557v8ht3udhhf2f1fr1fvqkc.apps.googleusercontent.com">
    <GoogleLoginComponent />
    </GoogleOAuthProvider>


    </>
    
  )
}

export default App;