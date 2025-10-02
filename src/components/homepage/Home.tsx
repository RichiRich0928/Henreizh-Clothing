import React from 'react';
import Layout from '../layouts/Layout';
import "../styles//Home.css";
import logo from '../../assets/logoimg.png'; 

function Home() {
  return (
    <Layout>
      <section className="hero">
    <h1>
      <img src={logo} alt="Henreizh Logo" className='hero-logo'/>
    </h1>

<div className='wys-row'> 


        <div className="hero-buttons">
          <button className="explore">Explore Our Collections</button>
          </div>
          <p>
          Wear.<br />
          Your.<br />
          Story.
        </p>
        <div className="hero-buttons">
          <button className="shop">Start Shopping Now</button>
        </div>
</div>
        
      </section>

      <section className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322"
          alt="Clothing Store"
        />
      </section>

      <section className="recommend-section">
  <h2 className="recommend-title">You might like...</h2>
  <p className="text-gray-600 mb-4">Women’s Fashion</p>

  <div className="product-scroll">
    <div className="product-card">
      <img src="https://example.com/shirt1.jpg" alt="Shirt 1" />
      <p className="mt-2">Green Shirt</p>
    </div>
    <div className="product-card">
      <img src="https://example.com/shirt2.jpg" alt="Shirt 2" />
      <p className="mt-2">Pattern Shirt</p>
    </div>
    <div className="product-card">
      <img src="https://example.com/shirt3.jpg" alt="Shirt 3" />
      <p className="mt-2">Blue Shirt</p>
    </div>
    <div className="product-card">
      <img src="https://example.com/shirt4.jpg" alt="Shirt 4" />
      <p className="mt-2">Beige Shirt</p>
    </div>
  </div>
</section>
    </Layout>
  );
}

export default Home;
