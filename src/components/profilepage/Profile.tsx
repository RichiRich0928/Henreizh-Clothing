import React from "react";
import "../styles/Profile.css";
import profileImg from "../../assets/pants.png";
import AppHeader from "../layouts/AppHeader";
import Footer from "../layouts/Footer";
import headset from "../../assets/headset.png";
import questionmark from "../../assets/questionmark.png";
import address from "../../assets/address.png";
import creditcard from "../../assets/creditcard.png";
import edit from "../../assets/edit.png";
import emailletter from "../../assets/emailletter.png";
import lock from "../../assets/lock.png";
import drag from "../../assets/drag.png";
import profile from "../../assets/profile.png";
import getFontSizes from "antd/es/theme/themes/shared/genFontSizes";


const Profile: React.FC = () => {
  return (
    <>
    <AppHeader />
      <div className="profile-header">
        <div className="profile-column">
        <img src={profileImg} alt="Profile" className="profile-image" />
        <div className="title-edit">
          
<button className="edit-profile-btn">Edit Profile</button>
<img src={edit} className="icon-edit" alt="edit" />
        </div>
        
        </div>
        <div className="profile-header-text">
          <h2>WELCOME</h2>
          <p>Nathan</p>
        </div>
        {/* <img src={lizard} alt="logo" className="lizard-image" /> */}
      </div>

    <div className="container">
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
            <div className="info-card-header">
              <div className="info-title">
                <img src={profile} className="icon-left" alt="info" />
                <h2>INFORMATION</h2>
              </div>
              <img src={edit} className="icon-edit" alt="edit" />
            </div>
            <p>Nathan Aruta</p>
            <p>nathanaruta@gmail.com</p>
          </div>

          <div className="info-card">
            <div className="info-card-header">
              <div className="info-title">
                <img src={lock} className="icon-left" alt="lock" />
                <h2>LOGIN & PASSWORD</h2>
              </div>
              <img src={edit} className="icon-edit" alt="edit" />
            </div>
            <p>Login: nathanaruta@gmail.com</p>
            <p>Password: ********</p>
          </div>

          <div className="info-card">
            <div className="info-card-header">
              <div className="info-title">
                <img src={emailletter} className="icon-left" alt="mail" />
                <h2>NEWSLETTER</h2>
              </div>
          
            </div>
            <p>Login: nathanaruta@gmail.com</p>
            <img src={drag} className="icon-drag" alt="toggle" />
          </div>
     
        </div>

        {/* Address and Credit */}
        <div className="info-grid2">
          <div className="dashed-card">
            <img src = {address} className="small-icons"/>
            <h2>NO ADDRESS INPUT</h2>
            <p>Find Your Default Address Here</p>
            <button className="outline-btn">COMPLETE YOUR ADDRESS</button>
          </div>

          <div className="dashed-card">
            <img src = {creditcard} className="small-icons"/>
            <h2>NO CREDIT CARD ADDED</h2>
            <p>Save your default payment method during checkout</p>
          </div>
        </div>

        {/* Contact and FAQ */}
        <div className="info-grid3">
          
          <div className="gray-card">
            <div className="gray-card-title">
           <img src = {headset} className="small-icons"/>
            
            <h3>CONTACT OUR CUSTOMER SERVICE</h3>
            </div>
            <p className="contact-number">8-7000</p>
          </div>

          <div className="gray-card">
            <div className="gray-card-title">
            <img src = {questionmark} className="small-icons"/>
            <h2>FAQ</h2>
            </div>
            <p className="FAQ">
              You might find the answer you're looking for in our frequently
              asked questions.
            </p>
          </div>
        </div>
      </div>
      </div>
    <Footer />
    </>
  );
};

export default Profile;
