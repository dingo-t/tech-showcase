import React from 'react'
import './VotingPanel.css'
import { Button } from "./Button";

// The function is a panel that allows users to vote for a food item and to view the amount of votes it has
function VotingPanel(props) {

  // the function passes in an id to a php file when the vote button is click
  // this causes the vote item with the corresponding id to have its vote count incremented 
  const handleButtonClick = async () => {
  
    const id = props.id;
    
    // the php file is run and the id is passed using the get method since it is not sensitive information
    try {
      const response = await fetch(`http://localhost/UpdateVote.php?id=${id}`, { 
        method: 'GET', 
      });

      // if the response is successful the result is logged and UserVoted is set to true in local storage to prevent users from voting twice
      if (response.ok) {
        const result = await response.text();
        console.log(result);
        localStorage.setItem('UserVoted', true);  
      // if the fetch request fails an error message is logged to console
      } else {
        console.error('PHP script execution failed');
      }
    // catches any other errors that occur and displays them to console
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

 // fetches if the user has voted from local storage
const HasVoted = localStorage.getItem('UserVoted')
  
return (
<div className='voting-cont'>
        <div className='voting-title'>
            <h1>Vote for this Food item</h1>
            <p>You can only vote for one item</p>
        </div>
    
  <div className='vote-button-section'>
    {/* if the user has voted the vote button is hidden and a message thanking the user for voting is rendered */}
    {HasVoted ? (
      <p className='vote-notice'>Thank You for voting</p>
    ) : (
      // button for users to vote with
      <Button 
        className="vote-btns"
        buttonStyle="btn--vote"
        buttonSize="btn--vote"
        onClick={handleButtonClick}
      >
       Vote <i className="fas fa-vote-yea"></i>
      </Button>
    )}
  </div>
        {/*displays vote count for the current food item */}
        <div className='current-votes'>
            <h1>This exhibition currently has {props.votes} votes</h1>
        </div>
    </div>
  )
}

export default VotingPanel;