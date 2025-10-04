import { useLocation, useNavigate } from 'react-router-dom';
import '../../components/styles/utilities/Navbar.css';
import Logo from '../images/henreizh_favicon.png';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <>
      <div className="header-main">
        <div className="header-left">
          <img className="navbar-favicon" src={Logo} />
          <button className={isActive('/')} onClick={() => navigate('/')}>Home</button>
          <button className={isActive('/shop')} onClick={() => navigate('/shop')}>Shop</button>
          <button className={isActive('/collections')} onClick={() => navigate('/collections')}>Collections</button>
          <button className={isActive('/about')} onClick={() => navigate('/about')}>About Us</button>
          <button className={isActive('/contact')} onClick={() => navigate('/contact')}>Contact</button>
        </div>
        <div className="header-right">
          <button className={isActive('/cart')} onClick={() => navigate('/cart')}>Cart</button>
          <button className={isActive('/signup')} onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;