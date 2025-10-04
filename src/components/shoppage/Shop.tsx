import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import collection from '../../assets/collection.png';
import Image1 from '../../assets/image 1.png';
import Image10 from '../../assets/image 10.png';
import Image11 from '../../assets/image 11.png';
import Image12 from '../../assets/image 12.png';
import Image13 from '../../assets/image 13.png';
import Image14 from '../../assets/image 14.png';
import Image2 from '../../assets/image 2.png';
import Image3 from '../../assets/image 3.png';
import Image4 from '../../assets/image 4.png';
import Image5 from '../../assets/image 5.png';
import Image6 from '../../assets/image 6.png';
import Image7 from '../../assets/image 7.png';
import Image8 from '../../assets/image 8.png';
import Image9 from '../../assets/image 9.png';
import Logo from '../../assets/logoimg.png';
import Layout from "../layouts/Layout";
import '../styles/Shop.css';

function Shop() {
  return (
    <Layout>
      <div className="shop-container">
        <header className="shop-header">
          <img src={Logo} alt="Henreizh Logo" className="logo" />
          <Input 
            prefix={<SearchOutlined />} 
            placeholder="Search for something, e.g. jackets, shorts, baggy pants, collection, etc." 
            style={{ width: '60%', marginBottom: '0' }} 
          />
          <div className="header-actions">
            <div className="cart">🛒</div>
            <span className="sale">Sale →</span>
          </div>
        </header>
        <nav className="sub-categories">
          <ul>
            <li>Men's Jackets</li>
            <li>Half Zip Sweatshirts</li>
            <li>Baggy Pants</li>
            <li>Kids Apparel</li>
            <li>Trendy Caps</li>
            <li>Sundress</li>
            <li>Aesthetic Sunglasses</li>
          </ul>
        </nav>

        <div className="banner">
          <img src={collection} alt="Our New Collection" className="banner-image" />
          <div className="banner-content">
            <h1>Our New Collection.</h1>
            <span className="check-out-btn">Check It Out →</span>
          </div>
        </div>

        <div className="dots-separator">• • • • •</div>

        <button className="discover-more">Discover More ↓</button>

        <nav className="main-categories">
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Accessories</li>
            <li>More &gt;</li>
          </ul>
        </nav>

        <div className="products">
          <div className="story-title">
            <h2>Wear <br /> Your <br /> Story</h2>
          </div>
          <div className="product-wrapper">
            <div className="product-grid">
              <div className="product-card">
                <img src={Image1} alt="Navy Jersey" />
                <div className="product-info">
                  <p>Navy Jersey</p>
                  <div className="actions">
                    <span className="favorite">♡</span>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={Image2} alt="Graphic T-Shirt" />
                <div className="product-info">
                  <p>Graphic T-Shirt</p>
                  <div className="actions">
                    <span className="favorite">♡</span>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={Image3} alt="Striped Sweater" />
                <div className="product-info">
                  <p>Striped Sweater</p>
                  <div className="actions">
                    <span className="favorite">♡</span>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={Image4} alt="Knitted Cardigan" />
                <div className="product-info">
                  <p>Knitted Cardigan</p>
                  <div className="actions">
                    <span className="favorite">♡</span>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={Image5} alt="Men's Corduroy Shirt" />
                <div className="product-info">
                  <p>Men's Corduroy Shirt</p>
                  <div className="actions">
                    <span className="favorite">♡</span>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={Image6} alt="Cargo Pants" />
                <div className="product-info">
                  <p>Cargo Pants</p>
                  <div className="actions">
                    <span className="favorite">♡</span>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={Image7} alt="Linen Shorts" />
                <div className="product-info">
                  <p>Linen Shorts</p>
                  <div className="actions">
                    <span className="favorite">♡</span>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={Image8} alt="Metal Pendant" />
                <div className="product-info">
                  <p>Metal Pendant</p>
                  <div className="actions">
                    <span className="favorite">♡</span>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={Image9} alt="Aesthetic Sunglasses" />
                <div className="product-info">
                  <p>Aesthetic Sunglasses</p>
                  <div className="actions">
                    <span className="favorite">♡</span>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={Image10} alt="Baseball Cap" />
                <div className="product-info">
                  <p>Baseball Cap</p>
                  <div className="actions">
                    <span className="favorite">♡</span>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={Image11} alt="Oversized Hoodie" />
                <div className="product-info">
                  <p>Oversized Hoodie</p>
                  <div className="actions">
                    <span className="favorite">♡</span>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={Image12} alt="Summer Sundress" />
                <div className="product-info">
                  <p>Summer Sundress</p>
                  <div className="actions">
                    <span className="favorite">♡</span>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={Image13} alt="Trendy Sneakers" />
                <div className="product-info">
                  <p>Trendy Sneakers</p>
                  <div className="actions">
                    <span className="favorite">♡</span>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <img src={Image14} alt="Leather Belt" />
                <div className="product-info">
                  <p>Leather Belt</p>
                  <div className="actions">
                    <span className="favorite">♡</span>
                    <button className="buy-now">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="promo-section">
          <button className="promo-button">Show Promos ▼</button>
          <button className="promo-button">Get Coupons Now! ▼</button>
          <button className="promo-button">Upcoming Events ▼</button>
          <button className="promo-button">Official Stores ▼</button>
        </div>
      </div>
    </Layout>
  );
}

export default Shop;