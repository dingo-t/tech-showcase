import React, { useState, useContext } from 'react';
import './ExhibitCard.css';
import { Mycontext } from '../App';

function ExhibitCards() {
    // stores the search term that is inputted by the user
    const [searchTerm, setSearchTerm] = useState('');

    // gets the array of food item names, links and images
    const cards = useContext(Mycontext);

    // this function runs everytime the data in the search box is altered
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // filteres out cards that dont contain the search term
    const filteredCards = cards.filter((card) =>
        card.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='cards-section'>
            {/* search box  */}
            <div className='input-container'>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            {/* this container displays the cards that have names that have been inputed to the text box */}
            <div className='card-cont'>
                {filteredCards.map((card) => (
                    <div key={card.id}>
                        {/* links to the food items page */}
                        <a href={card.link}>
                            {/* iamge of the food item */}
                            <img src={card.image} alt={card.text} />
                            {/* name of the food item*/}
                            <div className='card-text'>{card.text}</div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExhibitCards;
