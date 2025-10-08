import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useState, type SetStateAction } from "react";
import collection from "../../assets/collection.png";
import Image1 from "../../assets/image 1.png";
import Image10 from "../../assets/image 10.png";
import Image11 from "../../assets/image 11.png";
import Image12 from "../../assets/image 12.png";
import Image13 from "../../assets/image 13.png";
import Image14 from "../../assets/image 14.png";
import Image2 from "../../assets/image 2.png";
import Image3 from "../../assets/image 3.png";
import Image4 from "../../assets/image 4.png";
import Image5 from "../../assets/image 5.png";
import Image6 from "../../assets/image 6.png";
import Image7 from "../../assets/image 7.png";
import Image8 from "../../assets/image 8.png";
import Image9 from "../../assets/image 9.png";
import Logo from "../../assets/logoimg.png";
import Layout from "../layouts/Layout";
import "../styles/Shop.css";

function Shop() {
  const [showDiscoverMore, setShowDiscoverMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Men");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [showPromos, setShowPromos] = useState(false);
  const [showCoupons, setShowCoupons] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showStores, setShowStores] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const toggleDiscoverMore = () => setShowDiscoverMore(!showDiscoverMore);
  const selectCategory = (category: SetStateAction<string>) => {
    setSelectedCategory(category);
    setSelectedSubCategory("");
    setShowMore(false);
  };
  const selectSubCategory = (subcategory: SetStateAction<string>) => {
    setSelectedSubCategory(subcategory);
  };
  const togglePromos = () => setShowPromos(!showPromos);
  const toggleCoupons = () => setShowCoupons(!showCoupons);
  const toggleEvents = () => setShowEvents(!showEvents);
  const toggleStores = () => setShowStores(!showStores);
  const toggleMore = () => setShowMore(!showMore);

  const products = [
    {
      id: 1,
      name: "Navy Jersey",
      image: Image1,
      category: "Men",
      subcategory: "Men's Jackets",
    },
    {
      id: 2,
      name: "Graphic T-Shirt",
      image: Image2,
      category: "Men",
      subcategory: "Half Zip Sweatshirts",
    },
    {
      id: 3,
      name: "Striped Sweater",
      image: Image3,
      category: "Men",
      subcategory: "Half Zip Sweatshirts",
    },
    {
      id: 4,
      name: "Knitted Cardigan",
      image: Image4,
      category: "Women",
      subcategory: "Half Zip Sweatshirts",
    },
    {
      id: 5,
      name: "Men's Corduroy Shirt",
      image: Image5,
      category: "Men",
      subcategory: "Half Zip Sweatshirts",
    },
    {
      id: 6,
      name: "Cargo Pants",
      image: Image6,
      category: "Men",
      subcategory: "Baggy Pants",
    },
    {
      id: 7,
      name: "Linen Shorts",
      image: Image7,
      category: "Men",
      subcategory: "Baggy Pants",
    },
    { id: 8, name: "Metal Pendant", image: Image8, category: "Accessories" },
    {
      id: 9,
      name: "Aesthetic Sunglasses",
      image: Image9,
      category: "Accessories",
      subcategory: "Aesthetic Sunglasses",
    },
    {
      id: 10,
      name: "Baseball Cap",
      image: Image10,
      category: "Accessories",
      subcategory: "Trendy Caps",
    },
    {
      id: 11,
      name: "Oversized Hoodie",
      image: Image11,
      category: "Women",
      subcategory: "Kids Apparel",
    },
    {
      id: 12,
      name: "Summer Sundress",
      image: Image12,
      category: "Women",
      subcategory: "Sundress",
    },
    {
      id: 13,
      name: "Trendy Sneakers",
      image: Image13,
      category: "Kids",
      subcategory: "Kids Apparel",
    },
    { id: 14, name: "Leather Belt", image: Image14, category: "Accessories" },
  ];

  const filteredProducts = products.filter((product) => {
    if (product.category !== selectedCategory) return false;
    if (selectedSubCategory && product.subcategory !== selectedSubCategory)
      return false;
    return true;
  });

  return (
    <Layout>
      <div className="shop-container">
        <header className="shop-header">
          <img src={Logo} alt="Henreizh Logo" className="logo" />
          <div className="search-wrapper">
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search for something, e.g. jackets, shorts, baggy pants, collection, etc."
            />
          </div>
          <div className="header-actions">
            <div className="cart">🛒</div>
            <span className="sale">Sale →</span>
          </div>
        </header>
        <nav className="sub-categories">
          <ul>
            <li
              className={
                selectedSubCategory === "Men's Jackets" ? "active" : ""
              }
              onClick={() => selectSubCategory("Men's Jackets")}
            >
              Men's Jackets
            </li>
            <li
              className={
                selectedSubCategory === "Half Zip Sweatshirts" ? "active" : ""
              }
              onClick={() => selectSubCategory("Half Zip Sweatshirts")}
            >
              Half Zip Sweatshirts
            </li>
            <li
              className={selectedSubCategory === "Baggy Pants" ? "active" : ""}
              onClick={() => selectSubCategory("Baggy Pants")}
            >
              Baggy Pants
            </li>
            <li
              className={selectedSubCategory === "Kids Apparel" ? "active" : ""}
              onClick={() => selectSubCategory("Kids Apparel")}
            >
              Kids Apparel
            </li>
            <li
              className={selectedSubCategory === "Trendy Caps" ? "active" : ""}
              onClick={() => selectSubCategory("Trendy Caps")}
            >
              Trendy Caps
            </li>
            <li
              className={selectedSubCategory === "Sundress" ? "active" : ""}
              onClick={() => selectSubCategory("Sundress")}
            >
              Sundress
            </li>
            <li
              className={
                selectedSubCategory === "Aesthetic Sunglasses" ? "active" : ""
              }
              onClick={() => selectSubCategory("Aesthetic Sunglasses")}
            >
              Aesthetic Sunglasses
            </li>
          </ul>
        </nav>

        <div className="banner">
          <img
            src={collection}
            alt="Our New Collection"
            className="banner-image"
          />
          <div className="banner-content">
            <h1>Our New Collection.</h1>
            <span className="check-out-btn">Check It Out →</span>
          </div>
        </div>

        <div className="dots-separator">• • • • •</div>

        <button className="discover-more" onClick={toggleDiscoverMore}>
          Discover More {showDiscoverMore ? "▲" : "▼"}
        </button>

        {showDiscoverMore && (
          <>
            <nav className="main-categories">
              <ul>
                <li
                  className={selectedCategory === "Men" ? "active" : ""}
                  onClick={() => selectCategory("Men")}
                >
                  Men
                </li>
                <li
                  className={selectedCategory === "Women" ? "active" : ""}
                  onClick={() => selectCategory("Women")}
                >
                  Women
                </li>
                <li
                  className={selectedCategory === "Kids" ? "active" : ""}
                  onClick={() => selectCategory("Kids")}
                >
                  Kids
                </li>
                <li
                  className={selectedCategory === "Accessories" ? "active" : ""}
                  onClick={() => selectCategory("Accessories")}
                >
                  Accessories
                </li>
                <li className="more-dropdown" onClick={toggleMore}>
                  More {showMore ? "▲" : "▼"}
                  {showMore && (
                    <ul className="more-dropdown-menu">
                      <li className="more-option">Option 1</li>
                      <li className="more-option">Option 2</li>
                      <li className="more-option">Option 3</li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>

            <div className="products">
              <div className="story-title">
                <h2>
                  Wear <br /> Your <br /> Story
                </h2>
              </div>
              <div className="product-wrapper">
                <div className="product-grid">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card">
                      <img src={product.image} alt={product.name} />
                      <div className="product-info">
                        <p>{product.name}</p>
                        <div className="actions">
                          <span className="favorite">♡</span>
                          <button className="buy-now">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        <div className="promo-section">
          <div className="promo-button" onClick={togglePromos}>
            Show Promos {showPromos ? "▲" : "▼"}
            {showPromos && (
              <div className="promo-dropdown">
                <p>Promo details here...</p>
                {/* Add actual promo content */}
              </div>
            )}
          </div>

          <button className="promo-button" onClick={toggleCoupons}>
            Get Coupons Now! {showCoupons ? "▲" : "▼"}
          </button>
          {showCoupons && (
            <div className="promo-dropdown">
              <p>Coupon details here...</p>
              {/* Add actual coupon content */}
            </div>
          )}

          <button className="promo-button" onClick={toggleEvents}>
            Upcoming Events {showEvents ? "▲" : "▼"}
          </button>
          {showEvents && (
            <div className="promo-dropdown">
              <p>Event details here...</p>
              {/* Add actual event content */}
            </div>
          )}

          <button className="promo-button" onClick={toggleStores}>
            Official Stores {showStores ? "▲" : "▼"}
          </button>
          {showStores && (
            <div className="promo-dropdown">
              <p>Store details here...</p>
              {/* Add actual store content */}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Shop;
