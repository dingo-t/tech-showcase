import React, { useContext, useEffect } from 'react'
import './HighestVoted.css'
import { Mycontext, voteContext } from '../App';

// This component finds the three highest voted exhibits and displays them as cards
export default function HighestVoted() {
  // Array that are declared in App.js are passed in this componet using the Context Hook
  const initialCards = useContext(Mycontext);
  const votesData = useContext(voteContext);

  // initilising Card Array
  let cardData = undefined;
    
  /* This code is in an if statement that checks if voteData has had data added to it
  This done because the program will break if the Array is sorted whilst it is still undefined
  When the voteData has had its data fetched from the database using PHP the 
  component will rerender and run the rest of the code */

  if (votesData.length > 0) {
    const VoteArray = votesData;
    // The array is sorted from highest to lowest
    const SortedVotes = [...VoteArray].sort((a, b) => b.votes - a.votes);

    // the three objects with the highest vote values are sliced and added to a new array
    const topThree = SortedVotes.slice(0, 3);
    cardData = getValuesFromArrays(topThree, initialCards)
  }
    
    // Once the highest votes have been found this function matches the vote value with 
    // information of the food item from the cards array in App.js
    function getValuesFromArrays(votes, cards) {
      // returned value is declared as an empty array
      const result = [];
      // the id of each object in the votes array is matched with the cororesponding
      // object from the cards array
      votes.forEach(voteObject => {
        const matchingCard = cards.find(card => card.id === voteObject.id);
      
        // These objects are merged which forms a new array with vote values and data 
        //from the cards array
        if (matchingCard) {
          result.push({
            id: voteObject.id,
            votes: voteObject.votes,
            ...matchingCard, 
          });
        }
      });
      return result;
    }

      return (
        <div className='highest-voted-card-cont'>
          <h1 id='food-item-title' >Food Item Votes</h1>
          <h2 id='food-item-subtitle' >Top Three Highest Voted Items</h2>  
            
          <div className='highest-voted-card-horizontal-container'>
          {/* If the CardData array has not yet been defined text saying the
              vote data has not been fetched is shown
              this prevents errors from the code trying to use an array that is undefined */}
          {typeof cardData !== 'undefined' ? (
            // the array is iterated over with the values of each object used to 
            // show the name, vote and an image of the food item
            cardData.map(item => (          
              <div key={item.id} className='highest-voted-card'>
                <img src={item.image} alt={item.text} loading='lazy'/>
                <p>{item.text}</p>
                <p>Votes: {item.votes}</p>
              </div>
            ))
            ) : (
              <p>No votes data available.</p>
            )}
          </div>
        </div>
      );
      
}
