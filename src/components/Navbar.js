import   React, {useState} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

// The navbar allows navigation to every main page of the website
function Navbar() {
  // the useState hook keeps track of the state of the dropdown navbar
  const [isOpen, setIsOpen] = useState(false);

  // this function is called when the dropdown icon is clicked
  // it toggles the state of the IsOpen variable to the 
  // opposite of its current boolean state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
      <>
        <nav className='navbar'>
          {/* The navbar links for when the user has a large screen device */}
          <div className='navbar-container'>
              <Link to='/' className='navbar-logo'>
                  SKC
              </Link>
            <div className='nav-button-container'>
              <li className='nav-item'>
                <Link to='/' className='nav-links' >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/foodexhibits'
                  className='nav-links'
                >
                  Exhibits
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/votingresults'
                  className='nav-links'
                >
                  Votes
                </Link>
              </li>  
              </div>
              {/*The dropdown menu appears when the screen width is narrow */}
              <div className="dropdown">
              {/* the button calls the toggledrownfunction when clicked which 
              causes isOpen to equal true which renders the menu*/}
              <button onClick={toggleDropdown} className="dropdown-button">
                <i className='fas fa-bars' id='hamburger-menu' />
              </button>
              {isOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/foodexhibits">Exhibits</Link></li>
                  <li><Link to="/votingresults">Votes</Link></li>
                </ul>
              )}
              </div>
          </div>
        </nav>
      </>
    );
  }
  
export default Navbar;
  