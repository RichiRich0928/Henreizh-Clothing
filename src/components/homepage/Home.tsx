import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoimg.png";
import "../styles/Home.css";
import Layout from "../layouts/Layout";
import homepic from "../images/homepic.png";
import collectionImg from "../../assets/HomeImages/Collection_Image.png";
import {
  ArrowDownOutlined,
  CarryOutOutlined,
  ShoppingCartOutlined,
  StarFilled,
  StarOutlined,
  TagFilled,
  ThunderboltFilled,
  ThunderboltOutlined,
} from "@ant-design/icons";
import men1 from "../../assets/HomeImages/men1.png";
import men2 from "../../assets/HomeImages/men2.png";
import men3 from "../../assets/HomeImages/men3.png";
import women1 from "../../assets/HomeImages/women1.png";
import women2 from "../../assets/HomeImages/women2.png";
import women3 from "../../assets/HomeImages/women3.png";

import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { BiArrowToRight, BiHeadphone } from "react-icons/bi";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useState(null);

  const faqOnClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index); // toggle
  };
  const womensProducts = [
    {
      id: 1,
      name: "Product 1",
      img: women1,
      rating: 5,
      reviews: 1024,
      buybtn: "#F1C3C3",
    },
    {
      id: 2,
      name: "Product 2",
      img: women2,
      rating: 5,
      reviews: 1024,
      buybtn: "#B1D0CE",
    },
    {
      id: 3,
      name: "Product 3",
      img: women3,
      rating: 5,
      reviews: 1024,
      buybtn: "#D6BDAF",
    },
  ];

  const mensProducts = [
    {
      id: 1,
      name: "Product 1",
      img: men1,
      rating: 5,
      reviews: 1024,
      buybtn: "#F3C8AF",
    },
    {
      id: 2,
      name: "Product 2",
      img: men2,
      rating: 5,
      reviews: 1024,
      buybtn: "#E9FBB6",
    },
    {
      id: 3,
      name: "Product 3",
      img: men3,
      rating: 5,
      reviews: 1024,
      buybtn: "#E4CEFF",
    },
  ];

  const suggestions = [
    {
      Icon: <ThunderboltFilled />,
      title: "Quality Fabrics",
      subtitle:
        "Experience the luxury of high-quality fabrics that feel as good as they look.",
    },
    {
      Icon: <StarFilled />,
      title: "Sustainable Fashion",
      subtitle:
        "Embrace style with a conscience through our eco-friendly clothing line.",
    },
    {
      Icon: <TagFilled />,
      title: "Affordable",
      subtitle:
        "Shop stylish clothing without breaking the bank with Henreizh!",
    },
    {
      Icon: <BiHeadphone />,
      title: "Customer Service",
      subtitle:
        "Experience the luxury of high-quality fabrics that feel as good as they look.",
    },
    {
      Icon: <ShoppingCartOutlined />,
      title: "Perfect Fit",
      subtitle:
        "Find your perfect fit with our diverse range of sizes and styles.",
    },
  ];

  const faqs = [
    {
      question: "What is Henreizh’s return policy?",
      answer:
        "Henreizh allows returns within 14 days of delivery for unused items in original packaging.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking number sent via email after your purchase.",
    },

    {
      question: "Can I change my order after placing it?",
      answer:
        "Orders can only be changed before they are processed or shipped.",
    },

    {
      question: "What payment methods do you accept?",
      answer:
        "Henreizh accepts credit/debit cards, e-wallets like GCash and PayMaya, and cash on delivery.",
    },
  ];

  return (
    <Layout
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        background: "#fff",
      }}
    >
      <div className="content">
        <div className="home-logo-container">
          <img src={logo} alt="Henreizh Logo" className="intro-logo" />
        </div>
        <div className="wys-row">
          <div className="intro-buttons">
            <button
              className="explore-btn"
              onClick={() => navigate("/collections")}
            >
              Explore Our Collections
            </button>
          </div>
          <p className="tagline">
            Wear.
            <br />
            Your.
            <br />
            Story.
          </p>
          <div className="intro-buttons">
            <button className="shop-btn" onClick={() => navigate("/shop")}>
              Start Shopping Now
            </button>
          </div>
        </div>
        <img
          style={{
            objectFit: "cover",
            height: "950px",
            width: "100%",
            overflowY: "hidden",
          }}
          src={homepic}
          alt="Fashion clothing store display"
        />
        <div className="home-search-container">
          <label style={{ marginLeft: 100, fontSize: 25 }}>Search</label>
          <input
            className="home-search-input"
            placeholder="Looking for something?  eg. Jackets, shorts, baggy pants, collection, etc. "
          />
          <div
            style={{
              marginRight: 100,
              display: "flex",
              gap: "30px",
              justifyContent: "space-between",
            }}
          >
            <FaFacebook className="socmed-icons" />
            <FaInstagram className="socmed-icons" />
            <FaTwitter className="socmed-icons" />
            <FaPinterest className="socmed-icons" />
          </div>
        </div>
        <div className="collection-container">
          <img className="collection-img" src={collectionImg} />

          <div className="collection-text-container">
            <h1 className="collection-text">
              Our <br />
              New
              <br />
              Collection
            </h1>
            <label className="check-text">
              Check it Out! <BiArrowToRight style={{ margin: 0 }} />
            </label>
          </div>
        </div>
        <div className="seasonal-sale-container">
          <h1 className="seasonal-title">You might like...</h1>

          <div className="clothes-section">
            <label className="clothes-text">Women's Fashion</label>
            <div className="clothes-row">
              {womensProducts.map((product) => (
                <div className="product-card-home" key={product.id}>
                  <img
                    className="clothes-img"
                    src={product.img}
                    alt={product.name}
                  />

                  <div className="buy-section">
                    <div className="buy-row">
                      <label className="product-name">{product.name}</label>

                      <div className="star-container">
                        {[...Array(product.rating)].map((_, index) => (
                          <StarFilled className="star-icons" key={index} />
                        ))}
                      </div>

                      <label className="product-number">
                        ({product.reviews})
                      </label>
                      <ShoppingCartOutlined className="cart-icon" />
                    </div>
                  </div>

                  <div
                    className="buy-btn"
                    style={{ background: product.buybtn }}
                  >
                    Buy Now
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="clothes-section">
            <label className="clothes-text">Men's Fashion</label>
            <div className="clothes-row">
              {mensProducts.map((product) => (
                <div className="product-card-home" key={product.id}>
                  <img
                    className="clothes-img"
                    src={product.img}
                    alt={product.name}
                  />

                  <div className="buy-section">
                    <div className="buy-row">
                      <label className="product-name">{product.name}</label>

                      <div className="star-container">
                        {[...Array(product.rating)].map((_, index) => (
                          <StarFilled className="star-icons" key={index} />
                        ))}
                      </div>

                      <label className="product-number">
                        ({product.reviews})
                      </label>
                      <ShoppingCartOutlined className="cart-icon" />
                    </div>
                  </div>

                  <div
                    className="buy-btn"
                    style={{ background: product.buybtn }}
                  >
                    Buy Now
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        '
        <div className="suggestion-container">
          <h1 style={{ fontSize: 60 }}>Tell us your style!</h1>
          <div className="five-suggestion">
            <div className="suggestion-row">
              {suggestions.slice(0, 3).map((item, index) => (
                <div className="suggestion-item" key={index}>
                  <div className="suggestion-icon">
                    <p
                      style={{
                        margin: 0,
                        fontSize: 30,
                        color: "#53991a",
                        padding: 0,
                      }}
                    >
                      {item.Icon}
                    </p>
                  </div>
                  <p className="suggestion-title">{item.title}</p>
                  <p className="suggestion-subtitle">{item.subtitle}</p>
                </div>
              ))}
            </div>

            <div className="suggestion-row">
              {suggestions.slice(3, 5).map((item, index) => (
                <div className="suggestion-item" key={index}>
                  <div className="suggestion-icon">
                    <p
                      style={{
                        margin: 0,
                        fontSize: 30,
                        color: "#53991a",
                        padding: 0,
                      }}
                    >
                      {item.Icon}
                    </p>
                  </div>
                  <p className="suggestion-title">{item.title}</p>
                  <p className="suggestion-subtitle">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="faq-container">
          <h1 style={{ fontSize: 45 }}>Frequently Asked Questions</h1>
          <div className="dropdown-container">
            {faqs.map((item, index) => (
              <div
                className="faq-item"
                key={index}
                onClick={() => faqOnClick(index)}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ fontSize: 20 }}>{item.question}</p>
                  <ArrowDownOutlined />
                </div>

                {selectedIndex === index && (
                  <p className="faq-answer">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      x
    </Layout>
  );
}

export default Home;
