import NavBar from "./components/NavBar";
import AddToCart from "./pages/AddToCart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import SignupSignin from "./pages/SignupSignin";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Wishlist from "./pages/Wishlist";

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
                {/* <div className="list">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="page1">Page 1</Link></li>
                        <li><Link to="page2">Page 2</Link></li>
                        <li><Link to="page3">Page 3</Link></li>
                    </ul>
                </div> */}
            </Router>
        {/* <SignupSignin/> */}
    </div>
  );
}
export default App;
