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
import lizard from "../../assets/lizardheader.png";

const Profile: React.FC = () => {
  return (
    <>
      <AppHeader />

      <div className="profile-header1">
        <div className="profile-column1">
          <div>
            <img src={profileImg} alt="Profile" className="profile-image1" />
            <div className="title-edit1">
              <button className="edit-profile-btn1">Edit Profile</button>
              <img src={edit} className="icon-edit1" alt="edit" />
            </div>
          </div>

          <div className="profile-header-text1">
            <h2>WELCOME</h2>
            <p>Nathan</p>
          </div>
        </div>

        <div className="lizard-logo">
          <img src={lizard} alt="logo" className="lizard-image" />
        </div>
      </div>

      <div className="container1">
        <div className="orders-section1" style={{ padding: "40px 60px" }}>
          <h2>ORDERS & RETURNS</h2>
          <div className="orders-box1">
            <p className="no-order1">NO ORDER PLACED YET</p>
            <p className="order-desc1">
              Find All of your commands and Details Here
            </p>
            <button className="show-products-btn1">SHOW ME PRODUCTS</button>
          </div>
        </div>

        {/* ===== PROFILE INFO ===== */}
        <div className="profile-section1">
          <div className="profile-section-header1">
            <h2>PROFILE</h2>
            <div className="profile-section-links1">
              <p>See Profile</p>
              <p>All Preferences</p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="info-grid1">
            <div className="info-card1">
              <div className="info-card-header1">
                <div className="info-title1">
                  <img src={profile} className="icon-left1" alt="info" />
                  <h2>INFORMATION</h2>
                </div>
                <img src={edit} className="icon-edit1" alt="edit" />
              </div>
              <p>Nathan Aruta</p>
              <p>nathanaruta@gmail.com</p>
            </div>

            <div className="info-card1">
              <div className="info-card-header1">
                <div className="info-title1">
                  <img src={lock} className="icon-left1" alt="lock" />
                  <h2>LOGIN & PASSWORD</h2>
                </div>
                <img src={edit} className="icon-edit1" alt="edit" />
              </div>
              <p>Login: nathanaruta@gmail.com</p>
              <p>Password: ********</p>
            </div>

            <div className="info-card1">
              <div className="info-card-header1">
                <div className="info-title1">
                  <img src={emailletter} className="icon-left1" alt="mail" />
                  <h2>NEWSLETTER</h2>
                </div>
              </div>
              <p>Login: nathanaruta@gmail.com</p>
              <img src={drag} className="icon-drag1" alt="toggle" />
            </div>
          </div>

          {/* Address and Credit */}
          <div className="info-grid21">
            <div className="dashed-card11">
              <img src={address} className="small-icons1" />
              <h2>NO ADDRESS INPUT</h2>
              <p>Find Your Default Address Here</p>
              <button className="outline-btn1">COMPLETE YOUR ADDRESS</button>
            </div>

            <div className="dashed-card11">
              <img src={creditcard} className="small-icons1" />
              <h2>NO CREDIT CARD ADDED</h2>
              <p>Save your default payment method during checkout</p>
            </div>
          </div>

          {/* Contact and FAQ */}
          <div className="info-grid31">
            <div className="gray-card11">
              <div className="gray-card-title1">
                <img src={headset} className="small-icons1" />

                <h3>CONTACT OUR CUSTOMER SERVICE</h3>
              </div>
              <p className="contact-number1">8-7000</p>
            </div>

            <div className="gray-card11">
              <div className="gray-card-title1">
                <img src={questionmark} className="small-icons1" />
                <h3>FAQ</h3>
              </div>
              <p className="FAQ1">
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
