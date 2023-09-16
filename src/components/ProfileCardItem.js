import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileCardItem.css'

// The profile card simply displays the name of the creator of a food item
function ProfileCardItem(props) {
  return (
    <>
      <div className='profile_card__item'>
        <Link className='profile_card__item__link' to={props.path}>
          <figure className='profile_card__item__pic-wrap'>
            <img
              className='profile_card__item__img'
              alt='Food'
              src={props.src}
            />
          </figure>
          <div className='profile_card__item__info'>
            <h5 className='profile_card__item__text'>{props.text}</h5>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProfileCardItem;
