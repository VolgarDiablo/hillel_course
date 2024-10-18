import React from "react";
import "./swapi.css";

const SwapiPeople = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">SWAPI People</h1>
      <div className="card mt-4">
        <div className="card-header">
          <h2>Luke Skywalker</h2>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Height:</strong> 172 cm
            </li>
            <li className="list-group-item">
              <strong>Mass:</strong> 77 kg
            </li>
            <li className="list-group-item">
              <strong>Hair Color:</strong> Blond
            </li>
            <li className="list-group-item">
              <strong>Eye Color:</strong> Blue
            </li>
            <li className="list-group-item">
              <strong>Gender:</strong> Male
            </li>
            <li className="list-group-item">
              <strong>Birth Year:</strong> 19BBY
            </li>
            <li className="list-group-item">
              <strong>Homeworld:</strong> Tatooine
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SwapiPeople;
