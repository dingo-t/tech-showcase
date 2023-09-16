import React from 'react';
import './FoodItem.css';
import ProfileCardItem from './ProfileCardItem';
import ImageGallery from './ImageGallery';
import VotingPanel from './VotingPanel';

// This component contains all of the content on a food item page
// All of the content can be passed into the function using props making the component resusable 
function FoodItem(props) {
  return (
  <div className='item'>
       {/* This container contains the name of the food item and its 
       creater aswell as an image of the item*/}
    <div className="container">
        <div className='text-cont'>
            <h1 className="title">{props.title}</h1>
            <h2 className='name'>{props.name}</h2>
        </div>
        {/*A large image of the food item displayed to the side of the title and creator name */}
        <img src={props.MainImg} alt={props.MainImgAlt} className="food-image" />
    </div>
    <div className='diet-info-title'>
        <h1>Dietary Information</h1>
        <p>The information displayed here may not always be up to date, always check with the stall owner if you have any dietary requirments</p>
    </div>
        <div className='food-info'>
            {/* Three icons that can be shown or hidden individually to show the dietary requirments that a food item satisfies*/}
            {/* They are hidden when a function that sets their display value to none is passed in when the component is used in Food pages*/}
            <div className='dietary-information'>    
                <div className='gluten' style={props.GlutenStyle}>
                    <img className='gluten-logo' src='../images/gluten-free.png' alt=''></img>
                    <h2>Gluten Free</h2>
                </div>
                <div className='vegan' style={props.VeganStyle}>
                    <img className='vegan-logo' src='../images/vegan.png' alt=''></img>
                    <h2>Vegan</h2>
                </div>
                <div className='vegetarian' style={props.VegetarianStyle}>
                    <img className='vegetarian-logo' src='../images/vegetarian.png' alt=''></img>
                    <h2>Vegetarian</h2>
                </div>
            </div>
            {/* A list of ingrediants that are passed in when the component is called in the food page */}
            <div className='ingredients'>
                <h2>Ingredients List</h2>
                <ul>
                    {props.ing1}
                    {props.ing2}
                    {props.ing3}
                    {props.ing4}
                    {props.ing5}
                    {props.ing6}
                    {props.ing7}
                    {props.ing8}
                    {props.ing9}
                    {props.ing10}     
                </ul>
            </div>  
    </div>
    {/* This is a card with a placeholder image and the name of the creator of the dish*/}
    <div className='profile-cont'>
        <h1>Creator</h1>
        <ProfileCardItem src='../images/profile.png' text={props.name} path='/' />
    </div>
    {/* This is an image gallery that automatically transitions through various photos of the item*/}
    <div className='img-gallery-section'>
        <ImageGallery 
        GalleryImg1={props.GalleryImg1}
        GalleryImg2={props.GalleryImg2}
        GalleryImg3={props.GalleryImg3}
        GalleryImg4={props.GalleryImg4}
        />
    </div>
    {/*This is a voting panel component that allows the user to vote and see the amount of votes that the food item has */}
    <div className='voting-panel-section'>
        <VotingPanel
         id={props.id}
         votes={props.votes}
        />
    </div>
  </div> 

  );
}
export default FoodItem;
