//Missionandvision.js
import { Link } from "react-router-dom";
import React from "react";
import missionImage from "../images/mission.jpg";
import visionImage from "../images/vision.jpg";

function MissionAndVision() {
  return (
    <div className="missionAndVision">
      <div className="mission">
        <div className="content">
          <h2>Our Mission:</h2>
          <p>
            At HASSAH, our mission is to catalyze impactful change through the
            ethos of giving. We are dedicated to cultivating a culture of
            generosity, fostering meaningful connections within our communities,
            and providing vital support to individuals in need through thoughtfully
            crafted donation programs and initiatives.
          </p>
        </div>
        <div className="image">
          <img src={missionImage} alt="Mission" />
        </div>
      </div>
      <div className="vision">
        <div className="content">
          <h2>Our Vision:</h2>
          <p>
            Our vision is to sculpt a world where the boundless power of giving
            transcends barriers, igniting a ripple effect of compassion,
            resilience, and hope. We envision a future where every act of
            generosity intertwines to weave a tapestry of transformation,
            enriching lives and fortifying communities towards a brighter tomorrow.
          </p>
        </div>
        <div className="image">
          <img src={visionImage} alt="Vision" />
          <br/>
          <br/>

        </div>
      </div>
      
    </div>
  );
}

export default MissionAndVision;
