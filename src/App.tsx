import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/homepage/Home";
import About from "./components/aboutus/AboutUs";
import Cart from "./components/cartpage/Cart";
import Collections from "./components/collections/Collections";
import Contact from "./components/contact/Contact";
import Shop from "./components/shoppage/Shop";
import Signup from "./components/signup/Signup";
import Profile from "./components/profilepage/Profile";
import Signin from "./components/signup/Signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
