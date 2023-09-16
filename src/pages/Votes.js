import React from 'react';
import '../App.css';
import VoteList from '../components/VoteList';
import HighestVoted from '../components/HighestVoted';

function Votes() {
  return (
    <>
    <div classname='vote-page-cont'>
        <HighestVoted></HighestVoted>
        <VoteList></VoteList>
    </div>
    </>
  );
}

export default Votes;

