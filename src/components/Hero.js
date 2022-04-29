import React from "react";

export default function Hero(props) {
  return (
    <div className="Main-card">
      <img src={props.imageUrl} className="card--image" />

      <div className="Desc-main">
        <div className="Local">
          <p>{props.location}</p>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <div className="Main">
          <h1 className="Title">{props.title}</h1>
        </div>

        <div className="teste">
          <p>
            {props.startDate}-{props.endDate}
          </p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
