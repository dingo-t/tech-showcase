import React from 'react';
import './Cards.css'; 
import CardItem from './CardItem'; 

// This component contains 5 cards that have values passed into them
function Cards() {
  return (
    <div className='cards'>
      <h1>Featured Food Items</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* First row of cards */}
          <ul className='cards__items'>
            {/* Card component with information for the first card */}
            <CardItem
              src='../images/lemontart2u.png'
              text='Lemon Tart'
              path='/food1'
            />
            <CardItem
              src='../images/MousseBalls2.png'
              text='Mousse Balls'
              path='/food2'
            />
          </ul>
          {/* Second row of cards */} 
          <ul className='cards__items'>
            <CardItem
              src='../images/ChocEgg1.png'
              text='White Chocolate Eggs'
              path='/food3'
            />
            <CardItem
              src='../images/ChocCube1.png'
              text='Chocolate Cubes'
              path='/food4'
            />
            <CardItem
              src='../images/coconutballs1.png'
              text='Coconut Balls'
              path='/food5'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards; // Exports the Card component
// for use in other parts of the web app
