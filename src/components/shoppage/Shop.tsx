import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useState, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [showDiscoverMore, setShowDiscoverMore] = useState(true); // Auto-expanded
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [showPromos, setShowPromos] = useState(false);
  const [showCoupons, setShowCoupons] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showStores, setShowStores] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false); // For Show More button

  const toggleDiscoverMore = () => setShowDiscoverMore(!showDiscoverMore);
  const selectCategory = (category: SetStateAction<string>) => {
    setSelectedCategory(category);
    setSelectedSubCategory("");
    setShowMore(false);
    setShowAllProducts(false); // Reset show all when changing category
  };
  const selectSubCategory = (subcategory: SetStateAction<string>) => {
    setSelectedSubCategory(subcategory);
    setShowAllProducts(false); // Reset show all when changing subcategory
  };
  const togglePromos = () => setShowPromos(!showPromos);
  const toggleCoupons = () => setShowCoupons(!showCoupons);
  const toggleEvents = () => setShowEvents(!showEvents);
  const toggleStores = () => setShowStores(!showStores);
  const toggleMore = () => setShowMore(!showMore);
  const toggleShowAllProducts = () => setShowAllProducts(!showAllProducts);

  const products = [
    {
      id: 1,
      name: "Navy Jersey",
      image: Image1,
      category: "Men",
      subcategory: "Men's Jackets",
      price: 49.99,
      isSale: true,
      isNew: false,
      isBest: true,
    },
    {
      id: 2,
      name: "Graphic T-Shirt",
      image: Image2,
      category: "Men",
      subcategory: "Half Zip Sweatshirts",
      price: 29.99,
      isSale: true,
      isNew: false,
      isBest: false,
    },
    {
      id: 3,
      name: "Striped Sweater",
      image: Image3,
      category: "Men",
      subcategory: "Half Zip Sweatshirts",
      price: 59.99,
      isSale: true,
      isNew: false,
      isBest: true,
    },
    {
      id: 4,
      name: "Knitted Cardigan",
      image: Image4,
      category: "Women",
      subcategory: "Half Zip Sweatshirts",
      price: 69.99,
      isSale: true,
      isNew: false,
      isBest: false,
    },
    {
      id: 5,
      name: "Men's Corduroy Shirt",
      image: Image5,
      category: "Men",
      subcategory: "Half Zip Sweatshirts",
      price: 39.99,
      isSale: true,
      isNew: false,
      isBest: true,
    },
    {
      id: 6,
      name: "Cargo Pants",
      image: Image6,
      category: "Men",
      subcategory: "Baggy Pants",
      price: 44.99,
      isSale: true,
      isNew: false,
      isBest: false,
    },
    {
      id: 7,
      name: "Linen Shorts",
      image: Image7,
      category: "Men",
      subcategory: "Baggy Pants",
      price: 34.99,
      isSale: true,
      isNew: false,
      isBest: true,
    },
    {
      id: 8,
      name: "Baggy Pants",
      image: Image8,
      category: "Women",
      price: 49.99,
      isSale: false,
      isNew: true,
      isBest: false,
    },
    {
      id: 9,
      name: "Shorts",
      image: Image9,
      category: "Men",
      subcategory: "Shorts",
      price: 24.99,
      isSale: false,
      isNew: true,
      isBest: true,
    },
    {
      id: 10,
      name: "Aesthetic Sunglasses",
      image: Image10,
      category: "Accessories",
      subcategory: "Trendy Caps",
      price: 19.99,
      isSale: false,
      isNew: true,
      isBest: false,
    },
    {
      id: 11,
      name: "Necklace",
      image: Image11,
      category: "Accessories",
      subcategory: "Kids Apparel",
      price: 14.99,
      isSale: false,
      isNew: true,
      isBest: true,
    },
    {
      id: 12,
      name: "Summer Sundress",
      image: Image12,
      category: "Women",
      subcategory: "Sundress",
      price: 54.99,
      isSale: false,
      isNew: true,
      isBest: false,
    },
    {
      id: 13,
      name: "Trendy Sneakers",
      image: Image13,
      category: "Kids",
      subcategory: "Kids Apparel",
      price: 39.99,
      isSale: false,
      isNew: true,
      isBest: true,
    },
    {
      id: 14,
      name: "Metal Ring Necklace",
      image: Image14,
      category: "Accessories",
      price: 29.99,
      isSale: false,
      isNew: true,
      isBest: false,
    },
  ];

  const filteredProducts = products.filter((product) => {
    let categoryMatch = true;
    if (selectedCategory === "All") {
      // Show all products
    } else if (selectedCategory === "Sale") {
      categoryMatch = product.isSale;
    } else if (selectedCategory === "New Arrivals") {
      categoryMatch = product.isNew;
    } else if (selectedCategory === "Best Sellers") {
      categoryMatch = product.isBest;
    } else {
      categoryMatch = product.category === selectedCategory;
    }
    if (!categoryMatch) return false;
    if (selectedSubCategory && product.subcategory !== selectedSubCategory)
      return false;
    return true;
  });

  // Show only 4 products initially, or all if showAllProducts is true
  const displayedProducts = showAllProducts
    ? filteredProducts
    : filteredProducts.slice(0, 4);

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
            <div>
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
            </div>
          </div>
          <div className="header-actions">
            <div className="cart">
              <ShoppingCartOutlined />
            </div>
            <span className="sale">Sale →</span>
          </div>
        </header>

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
          <div className="discover-more-content">
            <nav className="main-categories">
              <ul>
                <li
                  className={selectedCategory === "All" ? "active" : ""}
                  onClick={() => selectCategory("All")}
                >
                  All
                </li>
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
                      <li
                        className="more-option"
                        onClick={(e) => {
                          e.stopPropagation();
                          selectCategory("Sale");
                          setShowMore(false);
                        }}
                      >
                        Sale
                      </li>
                      <li
                        className="more-option"
                        onClick={(e) => {
                          e.stopPropagation();
                          selectCategory("New Arrivals");
                          setShowMore(false);
                        }}
                      >
                        New Arrivals
                      </li>
                      <li
                        className="more-option"
                        onClick={(e) => {
                          e.stopPropagation();
                          selectCategory("Best Sellers");
                          setShowMore(false);
                        }}
                      >
                        Best Sellers
                      </li>
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
                  {displayedProducts.map((product) => (
                    <div key={product.id} className="product-card">
                      <img src={product.image} alt={product.name} />
                      <div className="product-info">
                        <div className="product-details">
                          <p className="product-name">{product.name}</p>
                          <p className="product-price">${product.price.toFixed(2)}</p>
                        </div>
                        <div className="actions">
                          <span className="favorite">♡</span>
                          <button
                            className="buy-now"
                            onClick={() => navigate("/products")}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Show More Button - Only show if there are more than 4 products */}
                {filteredProducts.length > 4 && (
                  <button
                    className="show-more-products"
                    onClick={toggleShowAllProducts}
                  >
                    {showAllProducts ? "Show Less ▲" : "Show More ▼"}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Promo Section - OUTSIDE Discover More */}
        <div className="promo-section">
          <div className="promo-button" onClick={togglePromos}>
            Show Promos {showPromos ? "▲" : "▼"}
          </div>
          {showPromos && (
            <div className="promo-dropdown">
              <h3>🎉 Active Promotions</h3>
              <div className="promo-item">
                <h4>Summer Sale - Up to 50% OFF</h4>
                <p>Get amazing discounts on all summer collections. Valid until October 31, 2025.</p>
                <span className="promo-code">Code: SUMMER50</span>
              </div>
              <div className="promo-item">
                <h4>Buy 1 Get 1 Free on Selected Items</h4>
                <p>Purchase any item from our accessories collection and get another one free!</p>
                <span className="promo-code">Code: BOGO2025</span>
              </div>
              <div className="promo-item">
                <h4>Free Shipping Over ₱2,000</h4>
                <p>Enjoy free nationwide shipping on orders over ₱2,000.</p>
                <span className="promo-code">Auto-applied</span>
              </div>
            </div>
          )}

          <div className="promo-button" onClick={toggleCoupons}>
            Get Coupons Now! {showCoupons ? "▲" : "▼"}
          </div>
          {showCoupons && (
            <div className="promo-dropdown">
              <h3>🎫 Available Coupons</h3>
              <div className="coupon-item">
                <div className="coupon-header">
                  <span className="coupon-discount">₱500 OFF</span>
                  <span className="coupon-validity">Valid until Nov 15</span>
                </div>
                <p>Minimum purchase of ₱3,000</p>
                <button className="claim-coupon">Claim Coupon</button>
              </div>
              <div className="coupon-item">
                <div className="coupon-header">
                  <span className="coupon-discount">30% OFF</span>
                  <span className="coupon-validity">Valid until Oct 31</span>
                </div>
                <p>For new customers only</p>
                <button className="claim-coupon">Claim Coupon</button>
              </div>
              <div className="coupon-item">
                <div className="coupon-header">
                  <span className="coupon-discount">₱200 OFF</span>
                  <span className="coupon-validity">Valid until Dec 1</span>
                </div>
                <p>On your first purchase</p>
                <button className="claim-coupon">Claim Coupon</button>
              </div>
            </div>
          )}

          <div className="promo-button" onClick={toggleEvents}>
            Upcoming Events {showEvents ? "▲" : "▼"}
          </div>
          {showEvents && (
            <div className="promo-dropdown">
              <h3>📅 Upcoming Events</h3>
              <div className="event-item">
                <div className="event-date">October 25, 2025</div>
                <h4>Fall Fashion Show</h4>
                <p>Join us for an exclusive showcase of our Fall/Winter 2025 collection. Limited seats available!</p>
                <button className="event-register">Register Now</button>
              </div>
              <div className="event-item">
                <div className="event-date">November 11, 2025</div>
                <h4>11.11 Mega Sale</h4>
                <p>The biggest sale of the year! Up to 70% off on selected items. Mark your calendars!</p>
                <button className="event-register">Set Reminder</button>
              </div>
              <div className="event-item">
                <div className="event-date">December 1-24, 2025</div>
                <h4>Christmas Countdown Sale</h4>
                <p>Daily deals and surprises throughout December. New offers every day!</p>
                <button className="event-register">Learn More</button>
              </div>
            </div>
          )}

          <div className="promo-button" onClick={toggleStores}>
            Official Stores {showStores ? "▲" : "▼"}
          </div>
          {showStores && (
            <div className="promo-dropdown">
              <h3>🏪 Official Store Locations</h3>
              <div className="store-item">
                <h4>Henreizh Manila - SM Megamall</h4>
                <p>📍 3rd Floor, Building A, SM Megamall, Mandaluyong City</p>
                <p>📞 (02) 8123-4567</p>
                <p>🕐 10:00 AM - 9:00 PM (Daily)</p>
              </div>
              <div className="store-item">
                <h4>Henreizh BGC - High Street</h4>
                <p>📍 2nd Floor, Bonifacio High Street, Taguig City</p>
                <p>📞 (02) 8765-4321</p>
                <p>🕐 11:00 AM - 10:00 PM (Daily)</p>
              </div>
              <div className="store-item">
                <h4>Henreizh Cebu - Ayala Center</h4>
                <p>📍 Ground Floor, Ayala Center Cebu, Cebu City</p>
                <p>📞 (032) 234-5678</p>
                <p>🕐 10:00 AM - 9:00 PM (Daily)</p>
              </div>
              <div className="store-item">
                <h4>Henreizh Online Store</h4>
                <p>📍 Shop from anywhere in the Philippines</p>
                <p>📞 Customer Service: 1-800-HENREIZH</p>
                <p>🕐 24/7 Available</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Shop;