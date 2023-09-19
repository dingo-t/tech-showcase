import React from 'react';
import '../App.css';
import VoteList from '../components/VoteList';
import HighestVoted from '../components/HighestVoted';

function Votes() {
  return (
    <>
   
        <HighestVoted></HighestVoted>
        <VoteList></VoteList>
 
    </>
  );
}

export default Votes;

