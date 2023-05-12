import React from "react";
import "./LandingPg.css"

export default function Product(props) {
  return (
      <div className="card">
    <div className="div2">
        <img className="product--image" src={props.url} alt="product image" />
        <h2 className="name">{props.name}</h2>
        {/* <p>{props.description}</p> */}
        <a className="link" href={props.link}>Learn more on the web 🔗</a> 
    </div>
      <div className="info">
         {props.data}
      </div>
    </div>
  );
}
