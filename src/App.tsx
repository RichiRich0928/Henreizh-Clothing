import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/homepage/Home';
import Layout from './components/layouts/Layout';

import About from './components/aboutus/AboutUs';
import Cart from './components/cartpage/Cart';
import Collections from './components/collections/Collections';
import Contact from './components/contact/Contact';
import Shop from './components/shoppage/Shop';
import Signup from './components/signup/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/shop" element={<Layout><Shop /></Layout>} />
      <Route path="/collections" element={<Layout><Collections /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/cart" element={<Layout><Cart /></Layout>} />
      <Route path="/signup" element={<Layout><Signup /></Layout>} />
    </Routes>
  );
}

export default App;