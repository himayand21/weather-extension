import React from "react";

const Details = props => {
  const current = props.data.current;
  return (
    <div className="table">
      <div className="row clock">
        <div className="name">
          {props.data.location.name}
          <div className="image">
            <img
              width="30"
              height="30"
              src={current.weather_icons[0]}
              alt="weather"
            />
          </div>
        </div>
		<div style={{ fontSize: "1.1em", color: "white" }}>{props.data.location.localtime}</div>
      </div>
      <div className="row">
        <div className="title cell">Temperature:</div>
        <div className="result cell">{current.temperature}°C</div>
      </div>
      <div className="row">
        <div className="title cell">Feels Like:</div>
        <div className="result cell">{current.feelslike}°C </div>
      </div>

      <div className="row">
        <div className="title cell">Condition:</div>
        <div className="result cell">{current.weather_descriptions[0]}</div>
      </div>

      <div className="row">
        <div className="title cell">Wind:</div>
        <div className="result cell">
          {current.wind_speed} mph {current.wind_dir}
        </div>
      </div>

      <div className="row">
        <div className="title cell">Pressure:</div>
        <div className="result cell">{current.pressure} in </div>
      </div>

      <div className="row">
        <div className="title cell">Precipitation:</div>
        <div className="result cell">{current.precip} mm </div>
      </div>

      <div className="row">
        <div className="title cell">Humidity:</div>
        <div className="result cell">{current.humidity} </div>
      </div>
    </div>
  );
};

export default Details;
