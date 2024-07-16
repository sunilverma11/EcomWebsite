import NavBar from "./components/NavBar";
import Home from "./ages/Home";
import AddToCart from "./ages/AddToCart";
import Checkout from "./ages/Checkout";
import Product from "./ages/Product";
import SignupSignin from "./ages/SignupSignin";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Wishlist from "./ages/Wishlist";

function App() {
  return (
    <div style={{padding:'0',margin:'0'}}>
      <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/signin" element={<SignupSignin />} />
                    <Route exact path="/product" element={<Product />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route exact path="/add-to-cart" element={<AddToCart />} />
                    <Route exact path="/wishlist" element={<Wishlist />} />
                </Routes>
            </Router>
    </div>
  );
}
export default App;
