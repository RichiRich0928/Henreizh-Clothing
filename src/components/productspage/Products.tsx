import React from 'react';
import Layout from "../layouts/Layout";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Logo from "../../assets/logoimg.png";
import image from "../../assets/denim.png";
import "../styles/Products.css"
const Products: React.FC = () => {

  return (
    <Layout>
<div className="container">
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
            >
              Men's Jackets
            </li>
            <li

            >
              Half Zip Sweatshirts
            </li>
            <li

            >
              Baggy Pants
            </li>
            <li

            >
              Kids Apparel
            </li>
            <li

            >
              Trendy Caps
            </li>
            <li

            >
              Sundress
            </li>
            <li

            >
              Aesthetic Sunglasses
            </li>
          </ul>
        </nav>
        </div>
             
          </div>
          <div className="header-actions">
            <div className="cart"><ShoppingCartOutlined    /></div>
            <span className="sale">Sale →</span>
          </div>
        </header>
      <div className="product-page">
        {/* Product Images Section */}
        <div className="product-images">
       
          <div className="main-image">
            <img src={image} className=''/>
            <div className="nav-btn prev-btn">‹</div>
            <div className="nav-btn next-btn">›</div>
            <div className="image-dots">
              <div className="dot active"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>

      {/* Product Ratings Section */}
      <div className="ratings-section">
        <h2>Product Ratings</h2>
        <div className="rating-overview">
          <div className="rating-score">
            <span className="score">4.81</span>
            <span className="stars-large">⭐⭐⭐⭐⭐</span>
          </div>
          <div className="rating-bars">
            <div className="rating-bar-item">
              <span className="bar-label">Small</span>
              <div className="bar-container">
                <div className="bar-fill" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div className="rating-bar-item">
              <span className="bar-label">High Quality</span>
              <div className="bar-container">
                <div className="bar-fill" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="rating-bar-item">
              <span className="bar-label">True to Size</span>
              <div className="bar-container">
                <div className="bar-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="product-details">

            <div>
                    <h1 className="product-title">Henreizh Nest Robe Men</h1>
        
          <div className="product-meta">
            <span className="sku">SKU: sm24080273289368810</span>
            <div className="rating">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="review-count">(201 reviews)</span>
            </div>
          </div>
            </div>
          

          <div className="price-section">
            <span className="price">₱459</span>
            <div className="wishlist-btn">
              <span className="heart">♡</span>
            </div>
          </div>

          <div className="shipping-promo">
            Get <span className="highlight">FREE SHIPPING</span> Voucher
          </div>

          <div className="size-section">
            <div className="size-header">
              <span>Size</span>
              <a href="#" className="size-guide">Size Guide</a>
            </div>
            <div className="size-options">
              <div className="size-btn">S</div>
              <div className="size-btn active">M</div>
              <div className="size-btn">L</div>
              <div className="size-btn">XL</div>
              <div className="size-btn">XXL</div>
            </div>
          </div>

          <div className="points-info">
            Earn points from purchasing Henreizh Products!
          </div>

          <div className="action-buttons">
            <div className="add-to-cart-btn">
              <span>Add to Cart</span>
              <ShoppingCartOutlined/>
            </div>
            <div className="buy-now-btn"><p style={{margin: 0}}>Buy Now</p></div>
          </div>

          {/* Description Section */}
          <div className="description-section">
            <h3>Description</h3>
            <div className="description-grid">
              <div className="desc-item">
                <span className="desc-label">Sleeve Type:</span>
                <span className="desc-value">Drop Shoulder</span>
              </div>
              <div className="desc-item">
                <span className="desc-label">Style:</span>
                <span className="desc-value">Casual</span>
              </div>
              <div className="desc-item">
                <span className="desc-label">Color:</span>
                <span className="desc-value">Regular</span>
              </div>
              <div className="desc-item">
                <span className="desc-label">Hem Shaped:</span>
                <span className="desc-value">Cream</span>
              </div>
              <div className="desc-item">
                <span className="desc-label">Neckline:</span>
                <span className="desc-value">V-Neck Collar</span>
              </div>
              <div className="desc-item">
                <span className="desc-label">Sleeve length:</span>
                <span className="desc-value">Long-sleeve</span>
              </div>
              <div className="desc-item">
                <span className="desc-label">Fabric:</span>
                <span className="desc-value">Non-Stretch</span>
              </div>
              <div className="desc-item">
                <span className="desc-label">Material:</span>
                <span className="desc-value">Polyester</span>
              </div>
            </div>
          </div>

          <div className="see-reviews-btn">
            See Reviews ▼
          </div>
        </div>
      </div>



      <div className="show-more-section">
        <div className="show-more-btn">
          Show more ▼
        </div>
      </div>
    </div>
    
    </Layout>
  );
};


export { Products };

;