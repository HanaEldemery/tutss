//AboutUs.js
import { Link } from "react-router-dom";
import React from "react";
import missionImage from "../images/mission.jpg";
import visionImage from "../images/WhatsApp Image 2024-05-11 at 23.25.58_368a221f.jpg";

function Aboutus() {
    return (
      <div className="missionAndVision">
        <div className="mission">
          <div className="content">
            <h1>About Us</h1>
            <p>
              Welcome to HASSAH, where passion meets purpose. Founded on the principles of compassion and community, we strive to make a meaningful difference in the world. Our mission is to empower individuals to join us in creating positive change.
              <br />
              <br />
              At HASSAH, we envision a world where every act of kindness contributes to a brighter future. With dedication and determination, we're committed to harnessing the collective power of individuals, communities, and partners to address pressing social and environmental challenges. Through strategic partnerships and innovative solutions, we aim to maximize the impact of every donation and initiative. Transparency and accountability are at the core of our operations, ensuring that resources are efficiently allocated and outcomes are measurable.
              <br />
              <br />
              Moreover, we prioritize long-term sustainability, striving to create lasting change that benefits present and future generations. By fostering empathy, education, and empowerment, we not only address immediate needs but also work towards systemic solutions that address root causes.
              <br />
              <br />
              At HASSAH, we're not just facilitating transactions; we're building a movement for positive change. Together, let's transform compassion into action and create a world where everyone thrives.
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
  
  export default Aboutus;
  