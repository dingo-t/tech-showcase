import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

// The hero section is the first component that a user sees when entering the web app
// It contains a title page that tells user the purpose of the site
// It aslo includes the date of the exhibtiom
function HeroSection() {
  return (
    // This container contains all of the content for the component
    <div className="hero-container">
          
      {/* The video background code is commented out since i am using a css image background currently*/}   
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted />  */}
      <h1>Vote for your favourite exhibition</h1>
      <p>23rd August 2023</p>
      {/* These button components link to the votes page and the exhibits page */}
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          link='/votingresults'
        >
          View Vote Count
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          link='/foodexhibits'
        >
          {/* This is a font awsome icon*/}
          View Exhibits <i class="fas fa-layer-group"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
