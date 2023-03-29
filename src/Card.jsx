import React from "react";


function Card(props) {
  return (

      <div className="col">
            <img src={props.imgSrc} className="img-thumbnail" alt="" />
            <div className="caption">
              <h3>{props.title}</h3>
              <p>{props.description}</p>
            </div>
        </div>
  )
}

export default Card
