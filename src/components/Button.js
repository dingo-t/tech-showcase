import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// This component is a Button that can be reused throughout my site

// These Arrays store styles that can be used by muiltiple cards
const STYLES = ['btn--primary', 'btn--outline', 'btn--test', 'btn--vote'];

const SIZES = ['btn--medium', 'btn--large', 'btn--huge', 'btn--vote'];


export const Button = ({
  // An object with information on what the button should do on click and how it should be styled
  // This line defines the values in the object that should be accepted
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  link
}) => {
  /* This function checks if an object named buttonStyle exists in the STYLES array
     if it doesn't the first style in the array is set as the button's style*/
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  // Similar to the previous function this checks if buttonSize is found in SIZES
  // If not the first object in SIZES will be set as the button's size
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
  // 
    <Link to={link} className='btn-mobile'>
      <button
      // Assigns the CSS classes using the functions defined earlier
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        // Assigns the function to be run when clicked
        onClick={onClick}
        // Defines the type of the image
        type={type}
        // The content of the Button
      >
        {children} 
      </button>
    </Link>
  );
};
