import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-brand'>
          <Link to='#' className='footer-logo'>
            <div className='footer-logo-icon'>
              F<span>M</span>
            </div>

            <div className='footer-logo-text'>
              Food<span>Mania</span>
            </div>
          </Link>

          <p className='footer-description'>
            Discover delicious food, exciting offers, and a better online
            ordering experience with FoodMania.
          </p>

          <div className='social-links'>
            <Link to='#'>F</Link>
            <Link to='#'>I</Link>
            <Link to='#'>X</Link>
            <Link to='#'>L</Link>
          </div>
        </div>

        <div className='footer-links'>
          <h3>Useful Links</h3>

          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='/about-us'>About Us</Link>
            </li>

            <li>
              <Link to='/'>Menu</Link>
            </li>

            <li>
              <Link to='#'>Cart</Link>
            </li>

            <li>
              <Link to='/contact-us'>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className='footer-newsletter'>
          <h3>Newsletter</h3>

          <p>
            Subscribe to receive new food offers, discounts, and latest updates.
          </p>

          <form className='newsletter-form'>
            <input type='email' placeholder='Enter your email' />

            <button type='submit'>Subscribe</button>
          </form>
        </div>

        <div className='footer-map'>
          <h3>Find Us</h3>

          <div className='map-wrapper'>
            <iframe
              src='https://www.google.com/maps?q=Lucknow,Uttar%20Pradesh&output=embed'
              loading='lazy'
              allowFullScreen
              referrerPolicy='no-referrer-when-downgrade'
              title='FoodMania location'
            ></iframe>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>© 2026 FoodMania. All rights reserved.</p>

        <div className='footer-bottom-links'>
          <Link to='#'>Privacy Policy</Link>
          <Link to='#'>Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
