import React from "react";
import bgimage from "../../assets/HeroSection-bg-image.jpg";
import "./hero.css";

function Hero() {
  return (
    <body>
      {" "}
      <div className="hero">
        <img src={bgimage} alt="Background Image" />
        <div className="headerInfo">
          {" "}
          <h1>Travel Around the World!</h1>
          <h2>
            Explore different areas that you can travel to, and see if what they
            have to offer will satisfy the vacation you deserve.
          </h2>
        </div>
      </div>
    </body>
  );
}

export default Hero;
