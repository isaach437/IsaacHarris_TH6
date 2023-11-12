import React from "react";
import "./travelblog.css";

function TravelBlog(props) {
  return (
    <body>
      {" "}
      <div className="travelblog">
        <h3>{props.title}</h3>
        <div className="images">
          <img src={props.img1} alt="PlaceImage1" />
          <img src={props.img2} alt="PlaceImage2" />
          <img src={props.img3} alt="PlaceImage3" />
        </div>
        <p>{props.desc}</p>
      </div>
    </body>
  );
}

export default TravelBlog;
