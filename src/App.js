import React, { useState, createContext, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import FoodExhibits from './pages/FoodExhibits';
import Votes from './pages/Votes';
import Food1 from './fooditempages/FoodExhibit1';
import Food2 from './fooditempages/FoodExhibit2';
import Food3 from './fooditempages/FoodExhibit3';
import Food4 from './fooditempages/FoodExhibit4';
import Food5 from './fooditempages/FoodExhibit5';

// The App.js file handles the routing and data fetching for each page and component

// creating context for sharing data throughout the entire app
export const Mycontext = createContext();
export const voteContext = createContext();

function App() {
  // this array holds data values for food item to help with displaying cards of the item
  const [cards, setCards] = useState([
    { id: '1', image: '../images/lemontart2u.png', link: '/food1', text: 'Lemon Tart',},
    { id: '2', image: '../images/MousseBalls2.png', link: '/food2', text: 'Mousse Balls',},
    { id: '3', image: '../images/ChocEgg1.png', link: '/food3', text: 'White Chocolate Eggs',},
    { id: '4', image: '../images/ChocCube1.png', link: '/food4', text: 'Chocolate Cubes',},
    { id: '5', image: '../images/coconutballs1.png', link: '/food5', text: 'Coconut Balls',},
  ]);
  
  const [votes, setVotes] = useState('');

  /* This function fetches the votes array from a database 
     using a fetch request to a php file
     it runs when any page of the website is rendered */

  useEffect(() => {
    fetch('http://localhost/FetchVoteData.php')
      // Response is encoded to json
      .then(response => response.json())
      // When the data has been fetched it is passed into the votes array
      .then(data => {
        setVotes(data);
      })
      .catch(error => {
        
      });
  }, []);


  return (
  // The entire app is wrapped in the context providers so that any page can access the contexts
  <Mycontext.Provider value={cards}>
    <voteContext.Provider value={votes}>
      <>
        {/*The routing for each page is handled here */}
        <Router>
          {/* The Navbar and Footer are outside the Routes so that they are
           visible regardless of the current path*/}
          <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home></Home>}/>
            <Route path='/foodexhibits' exact element={<FoodExhibits></FoodExhibits>} />
            <Route path='/votingresults' exact element={<Votes></Votes>} />
            <Route path='/food1' exact element={<Food1></Food1>} />
            <Route path='/food2' exact element={<Food2></Food2>} />
            <Route path='/food3' exact element={<Food3></Food3>} />
            <Route path='/food4' exact element={<Food4></Food4>} />
            <Route path='/food5' exact element={<Food5></Food5>} />
          </Routes>
          <Footer/>
        </Router>
      </>
    </voteContext.Provider>
  </Mycontext.Provider>
  );
}
export default App;
