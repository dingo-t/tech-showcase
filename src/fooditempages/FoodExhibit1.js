import React,{useContext} from 'react';
import '../App.css';
import FoodItem from '../components/FoodItem';
import {voteContext} from '../App';


function Food1() {
  // This function allows icons to be removed depending on the deitary requirments a food item accomodates 
  const RemoveFromViewport = {display: 'none'};

  // Receives vote array from App.js
  const votesdata = useContext(voteContext);
  
  // Declaring id of the food item to find the votes for the item
  const id = '1';
  let VoteDisplay = '';

  // Function finds the votes of the food item by matching the id declared above with an id in the votes array
  const findVoteValueById = (id) => {
    const item = votesdata.find(item => item.id === id);
    return item ? item.votes : 'ID not found'; 
  };

  

    //VoteDisplay = findVoteValueById(id);
  
  
  console.log(votesdata)
  return (
    <>
      <FoodItem 
      // values are passed into the FoodItem component 
      title='Lemon Tarts'
      name='Ravi O Leigh'
      MainImg='../images/lemontart2u.png'
      MainImgAlt='Lolly cake image'
      
      ing1={<li>malt biscuits 200g</li>}
      ing2={<li>Eskimo lollies 150g</li>}
      ing3={<li>Butter 100g</li>}
      ing4={<li>sweetened condensed milk 200g</li>}
      ing5={<li>coconut 250g</li>}
      ing6={<li>vanilla extract one teaspoon</li>}
      
      votes={VoteDisplay}

      GalleryImg1={'../images/lemontart2u.png'}
      GalleryImg2={'../images/lemontart3u.png'}
      GalleryImg3={'../images/LemonTarts.jpg'}
      GalleryImg4={'../images/lemontartu.png'}

      // The id is passed down to the vote function so that it knows for which item the vote should be added to 
      id={'1'}
      
      />
    </>
  );
}

export default Food1;
