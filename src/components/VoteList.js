import React, { useContext, useEffect } from 'react';
import './VoteList.css';
import { Mycontext, voteContext } from '../App';

// This component displays a list of the amount of votes that each vote item has
export default function VoteList() {

  // arrays are fetched from app.js using context
  const initialCards = useContext(Mycontext);
  const votesData = useContext(voteContext);
  
  // this function gets the votes for a food item based on its id
function getVotesForId(id, votes) {
  // matching id in the cards array with an id from the votes array
  const vote = votes.find((vote) => vote.id === id);
  return vote ? vote.votes : 0; // returns amount of votes if no match is found it defaults to 0
}

return (
 <div className='vote-card-container'>
    <h1 id='list-title'>Food votes list</h1>
    <div className='vote-list'>
      {/* ensures voteData has been set to prevent errors */}
    {votesData.length > 0 ? (
      <ul className='vote-list-ul'>
        {/* initialcards is iterated through with data from each object displayed */}
        {initialCards.map((Card) => (
          <li className='vote-list-li' key={Card.id}>
             <div className='list-text'>{Card.text}</div>
             {/* The votes for the food item object is found using the getvotesforid function*/}
            <div className='list-votes'>Votes: {getVotesForId(Card.id, votesData)}</div>
          </li>
        ))}
      </ul>
    ) : null}
    </div>
 </div>
  );
}
