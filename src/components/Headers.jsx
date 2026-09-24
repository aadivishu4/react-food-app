import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Headers = () => {
  const [login, setLogin] = useState("Login");
  const toggleLogin = () => {
    return login === "Login" ? setLogin("Logout") : setLogin("Login");
  };

  useEffect(() => {}, []);

  // subscribing to the cart slice using selector from redux store:
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className='header'>
      <Link to='/' className='logo'>
        <div className='logo-icon'>
          F<span>M</span>
        </div>

        <div className='logo-text'>
          Food<span>Mania</span>
        </div>
      </Link>

      <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/about-us'>About Us</Link>
        <Link to='/contact-us'>Contact Us</Link>
      </nav>

      <div className='header-actions'>
        <Link to='/cart' className='cart'>
          <span className='cart-icon'>🛒</span>
          <span>Cart</span>
          <span className='cart-count'>{cartItems.length}</span>
        </Link>

        <button className='login-btn' onClick={toggleLogin}>
          {login}
        </button>
      </div>
    </header>
  );
};

export default Headers;
