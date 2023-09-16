import React, {useState} from 'react'
import './FoodExhibitsDisplay.css'
import ExhibitCards from './ExhibitCard';


// This component adds a title and background to the ExhibitCards
function FoodExhibitsDisplay() {
    
return (
    <div className='page-box'>
        <div className='background'> </div>
        <div className='food-exhibits-container'>
            <div className='food-exhibits-title'>
                <h1>Food exhibits</h1>
            </div>
            {/* The Exhibit Cards component is called within this component*/}
            <div className='exhibit-cards-container'>
                <ExhibitCards/>
            </div>
        </div>
    </div>
  )
}

export default FoodExhibitsDisplay;