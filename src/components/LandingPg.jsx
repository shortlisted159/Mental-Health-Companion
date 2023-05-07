import React from "react";

export default function Product(props) {
  return (
      <div className="card">
    <div>
        <img className="product--image" src={props.url} alt="product image" />
        <h2>{props.name}</h2>
        <p className="price"></p>
        {/* <p>{props.description}</p> */}
        <a href={props.link}>Learn more on the web 🔗</a>

        
      </div>
      <div className="info">
         {props.data}
      </div>
    </div>
  );
}
