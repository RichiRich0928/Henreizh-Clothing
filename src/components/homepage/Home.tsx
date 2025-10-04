import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logoimg.png';
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <h1>
          <img src={logo} alt="Henreizh Logo" className='hero-logo'/>
        </h1>

        <div className='wys-row'> 
          <div className="hero-buttons">
            <button className="explore" onClick={() => navigate('/collections')}>Explore Our Collections</button>
          </div>
          <p>
            Wear.<br />
            Your.<br />
            Story.
          </p>
          <div className="hero-buttons">
            <button className="shop" onClick={() => navigate('/shop')}>Start Shopping Now</button>
          </div>
        </div>
      </section>

      <section className="hero-image">
        <img
          src="https://res.cloudinary.com/fortyfournorth/image/upload/v1695760481/The%20Look%20Company%20%28Staging%29/oaec1ysnrwxrurvznjpn.jpg"
          alt="Fashion clothing store display"
        />
      </section>

      <section className="recommend-section">
        <h2 className="recommend-title">You might like...</h2>
        <p className="text-gray-600 mb-4">Women’s Fashion</p>

        <div className="product-scroll">
          <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/71BbiDkWt2L._UY1000_.jpg" alt="Dark green blouse" />
            <p className="mt-2">Green Shirt</p>
          </div>
          <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/71gofR1Zm8L._UY1000_.jpg" alt="Wave pattern blouse" />
            <p className="mt-2">Pattern Shirt</p>
          </div>
          <div className="product-card">
            <img src="https://m.media-amazon.com/images/I/71GZ0Qig+bL._UY1000_.jpg" alt="Blue dragonfly print blouse" />
            <p className="mt-2">Blue Shirt</p>
          </div>
          <div className="product-card">
            <img src="https://i5.walmartimages.com/seo/Beige-T-Shirts-For-Women-s-Fashion-Deep-V-Neck-Short-Sleeve-Top-Solid-Color-Casual-Loose-Basic-T-Shirt-Cotton_4796c7fb-213a-45eb-aef1-5628c8db5216.3311c9f17f8889eab06a1c186016ad43.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" alt="Beige V-neck T-shirt" />
            <p className="mt-2">Beige Shirt</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;