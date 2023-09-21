import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
// The footer is a component that is at the bottom of every page
// It contains an SKC logo and a link to the privacy policy of the website
function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          {/*Text that says SKC and links to the home page */}
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              SKC
            </Link>
          </div>
          {/*Links to privacy policy page */}
          <Link to='/privacy' className='privacy-link'>
            Privacy Policy 
          </Link>
          <small class='privacy-link'>Font Awesome by Dave Gandy - http://fontawesome.io</small>
        </div>
      </section>
    </div>
  );
}
export default Footer;
