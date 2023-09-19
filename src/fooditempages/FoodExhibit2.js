import React,{useContext} from 'react';
import '../App.css';
import FoodItem from '../components/FoodItem';
import {voteContext} from '../App';


function Food2() {
  // This function allows icons to be removed depending on the deitary requirments a food item accomodates 
  const RemoveFromViewport = {display: 'none'};

  // Receives vote array from App.js
  const votesdata = useContext(voteContext);
  
  // Declaring id of the food item to find the votes for the item
  const id = '2';
  let VoteDisplay = '';

  // Function finds the votes of the food item by matching the id declared above with an id in the votes array
  const findVoteValueById = (id) => {
    const item = votesdata.find(item => item.id === id);
    return item ? item.votes : 'ID not found'; 
  };

  /* due to React code being asynchronous it is important to check if the vote data has been 
    fetched from the database to prevent VoteDisplay being set as undefined */
  if (votesdata.length > 0) {
    VoteDisplay = findVoteValueById(id);
  }
  
  return (
    <>
      <FoodItem 
      // values are passed into the FoodItem component 
      title='Mousse Balls'
      name='Russel Sprout'
      MainImg='../images/Mousse Balls2.png'
      MainImgAlt='Mousse Balls image'
      
      // This props can be removed to display the corresponding icon 
      GlutenStyle={RemoveFromViewport}
      VeganStyle={RemoveFromViewport}

      ing1={<li>Chocolate 200g</li>}
      ing2={<li>Cream 100ml</li>}
      ing3={<li>Butter 100g</li>}
      ing4={<li>sweetened condensed milk 100g</li>}
      ing5={<li>milk 250g</li>}
      ing6={<li>biscuits 100g</li>}
      
      votes={VoteDisplay}

      GalleryImg1={'../images/Mousse Balls1.png'}
      GalleryImg2={'../images/Mousse Balls2.png'}
      GalleryImg3={'../images/Mousse Balls3.png'}
      GalleryImg4={'../images/Mousse Balls4.png'}

      // The id is passed down to the vote function so that it knows for which item the vote should be added to 
      id={'2'}
      />
    </>
  );
}

export default Food2;
