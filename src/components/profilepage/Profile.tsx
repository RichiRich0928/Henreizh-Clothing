import React from "react";
import "../styles/Profile.css";
import profileImg from "../../assets/pants.png";
import AppHeader from "../layouts/AppHeader";
import Footer from "../layouts/Footer";
const Profile: React.FC = () => {
  return (
    <>
    <AppHeader />

      <div className="profile-header">
        <div className="profile-column">
        <img src={profileImg} alt="Profile" className="profile-image" />
        <button className="edit-profile-btn">Edit Profile</button>
        </div>
        <div className="profile-header-text">
          <h2>WELCOME</h2>
          <p>Nathan</p>
        </div>
      </div>

    
      <div className="orders-section">
        <h2>ORDERS & RETURNS</h2>
        <div className="orders-box">
          <p className="no-order">NO ORDER PLACED YET</p>
          <p className="order-desc">
            Find All of your commands and Details Here
          </p>
          <button className="show-products-btn">SHOW ME PRODUCTS</button>
        </div>
      </div>

      {/* ===== PROFILE INFO ===== */}
      <div className="profile-section">
        <div className="profile-section-header">
          <h2>PROFILE</h2>
          <div className="profile-section-links">
            <p>See Profile</p>
            <p>All Preferences</p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="info-grid">
          <div className="info-card">
            <h4>INFORMATION</h4>
            <p>Nathan Aruta</p>
            <p>nathanaruta@gmail.com</p>
          </div>

          <div className="info-card">
            <h4>LOGIN & PASSWORD</h4>
            <p>Login: nathanaruta@gmail.com</p>
            <p>Password: ********</p>
          </div>

          <div className="info-card newsletter-card">
            <div>
              <h4>NEWSLETTER</h4>
              <p>Login: nathanaruta@gmail.com</p>
            </div>
            <input type="checkbox" defaultChecked />
          </div>
        </div>

        {/* Address and Credit */}
        <div className="info-grid">
          <div className="dashed-card">
            <h4>NO ADDRESS INPUT</h4>
            <p>Find Your Default Address Here</p>
            <button className="outline-btn">COMPLETE YOUR ADDRESS</button>
          </div>

          <div className="dashed-card">
            <h4>NO CREDIT CARD ADDED</h4>
            <p>Save your default payment method during checkout</p>
          </div>
        </div>

        {/* Contact and FAQ */}
        <div className="info-grid">
          <div className="gray-card">
            <h4>CONTACT OUR CUSTOMER SERVICE</h4>
            <p className="contact-number">8-7000</p>
          </div>

          <div className="gray-card">
            <h4>FAQ</h4>
            <p>
              You might find the answer you're looking for in our frequently
              asked questions.
            </p>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
};

export default Profile;
