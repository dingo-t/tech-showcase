import React from 'react';
import './ImageGallery.css';
// This gallery contains 4 images that are transitioned through automatically 
function ImageGallery(props) {
    return (
    <div className='gallery-container'>
        {/* Images are passed into the array using props */}
        <div className='gallery-wrapper'>
            <img src={props.GalleryImg1} id='gallery-image-1' loading='lazy'></img>
            <img src={props.GalleryImg2} id='gallery-image-2' loading='lazy'></img>
            <img src={props.GalleryImg3} id='gallery-image-3' loading='lazy'></img>
            <img src={props.GalleryImg4} id='gallery-image-4' loading='lazy'></img>
        </div>
    </div>
    );
  }
  export default ImageGallery;
  