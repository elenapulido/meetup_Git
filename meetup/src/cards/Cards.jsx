import React from 'react'
import image from "../assets/cartas-01.jpg"
import image2 from "../assets/cartas-02.jpg"
import image3 from "../assets/cartas-03.jpg"


function Cards() {
  return (
    <div className="d-flex justify-content-between">
      <img src={image} alt="imagen1" />
      <img src={image2} alt="imagen2" />
      <img src={image3} alt="imagen3" />
    </div>
  );
}

export default Cards