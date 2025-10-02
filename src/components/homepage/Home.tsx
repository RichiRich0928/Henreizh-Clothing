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
    </Layout>
  );
}

export default Home;
