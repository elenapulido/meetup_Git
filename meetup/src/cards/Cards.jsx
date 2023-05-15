import React from 'react'
import image from "../assets/cartas-01.jpg"
import image2 from "../assets/cartas-02.jpg"
import image3 from "../assets/cartas-03.jpg"


function Cards() {
  return (
    <div className="d-flex justify-content-around m-4">
      <img src={image3} alt="imagen3"style={{ width: "300px", height: "300px" }} />
      <img src={image2} alt="imagen2" style={{ width: "300px", height: "300px" }} />
      <img src={image} alt="imagen" style={{ width: "300px", height: "300px" }}/>
    </div>
  );
}

export default Cards