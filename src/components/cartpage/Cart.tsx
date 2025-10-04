import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import { Input, Select, Button } from 'antd';
import Logo from '../../assets/logoimg.png';
import Layout from "../layouts/Layout";
import '../styles/Cart.css';

const { Option } = Select;

function Cart() {
  return (
    <Layout>
      <div className="cart-container">
        {/* Header */}
        <header className="cart-header">
          <div className="cart-left">
            <img src={Logo} alt="Henreizh Logo" className="cart-logo" />
            <div className="divider-line"></div>
            <h2 className="cart-title-text">Your Cart</h2>
          </div>

          <div className="cart-right">
            <div className="cart-top-links">
              <span className="cart-link">Download Henreizh</span>
              <span className="cart-link">Need Help?</span>
            </div>
            <Input
              prefix={<SearchOutlined />}
              placeholder="Looking for something? eg. Jackets, shorts, baggy pants, collection, etc."
              className="cart-search"
            />
          </div>
        </header>

        {/* Title + Checkout */}
        <div className="cart-top">
          <h3 className="cart-items-heading">All Items</h3>
          <Button type="primary" className="checkout-btn">Check Out</Button>
        </div>

        {/* Cart Items */}
        <div className="cart-items">
          {[
            {
              id: 1,
              img: "https://cdn.shopify.com/s/files/1/0757/9955/products/cap_beige.jpg?v=162333",
              name: "Street Cap",
              price: "PHP 267",
              color: "Cream",
              size: "N/A"
            },
            {
              id: 2,
              img: "https://cdn.shopify.com/s/files/1/0574/2794/1653/products/blue_jacket.jpg?v=1625",
              name: "Orange Pocket Denim Jacket",
              price: "PHP 267",
              color: "Blue",
              size: "Medium"
            },
            {
              id: 3,
              img: "https://cdn.shopify.com/s/files/1/0574/2794/1653/products/black_coat.jpg?v=1625",
              name: "Loose Side Button Coat",
              price: "PHP 267",
              color: "Black",
              size: "XL"
            },
            {
              id: 4,
              img: "https://cdn.shopify.com/s/files/1/0574/2794/1653/products/beige_pants.jpg?v=1625",
              name: "Elegant Cotton Linen Pants Summer Loose",
              price: "PHP 889",
              color: "Cream",
              size: "XL"
            }
          ].map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} className="item-img" />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <p>Color: {item.color}</p>
                <p>Size: {item.size}</p>
              </div>
              <div className="item-actions">
                <DeleteOutlined className="delete-icon" />
                <div className="action-dropdown">
                  <Button type="link" className="variation-btn">Change Variations</Button>
                  <Select defaultValue="1" className="item-select">
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                  </Select>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More */}
        <div className="show-more">
          <Button type="text" className="show-more-btn">Show more ▼</Button>
        </div>
        <div className="divider"></div>
      </div>
    </Layout>
  );
}

export default Cart;
