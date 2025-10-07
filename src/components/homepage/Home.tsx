import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoimg.png";
import "../styles/Home.css";
import Layout from "../layouts/Layout";
import homepic from "../images/homepic.png";
import collectionImg from "../../assets/HomeImages/Collection_Image.png";
import {
  CarryOutOutlined,
  ShoppingCartOutlined,
  StarFilled,
  StarOutlined,
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
import { BiArrowToRight } from "react-icons/bi";

function Home() {
  const navigate = useNavigate();

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
          style={{ objectFit: "cover", height: "950px", width: "100%" }}
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
      </div>
    </Layout>
  );
}

export default Home;
