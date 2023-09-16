import React from 'react';
import { Link } from 'react-router-dom';

/* This component is a card that is displayed in the cards component
it contains an image, the name of the food item displayed and links to the items page*/ 
function CardItem(props) {
  return (
    <> {/* */}
      <li className='cards__item'>
        {/* The card is wrapped in a Link tag so that anywhere the user clicks will link to the page*/}
        <Link className='cards__item__link' to={props.path}> 
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Food Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
