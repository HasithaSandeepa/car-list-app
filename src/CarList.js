import React, { useState } from "react";

// Component to display car list
const CarList = ({ cars }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering cars based on search term
  const filteredCars = cars.filter((car) =>
    Object.values(car).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Extract unique brands
  const uniqueBrands = [...new Set(cars.map((car) => car.brand))];

  // Get the max speed of the first car
  const firstCarMaxSpeed = parseInt(cars[0].maxSpeed);

  // Retrieve model names and brands of cars with max speed greater than the first car's max speed
  const fastCars = cars
    .filter((car) => parseInt(car.maxSpeed) > firstCarMaxSpeed)
    .map((car) => ({ brand: car.brand, model: car.model }));

  return (
    <div>
      <input
        type="text"
        placeholder="Search cars..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="car-grid">
        {filteredCars.map((car, index) => (
          <div key={index} className="car-card">
            <h3>{car.brand}</h3>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Max Speed: {car.maxSpeed}</p>
            <p>Price: ${car.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
      <h4>Unique Brands:</h4>
      <ul>
        {uniqueBrands.map((brand, index) => (
          <li key={index}>{brand}</li>
        ))}
      </ul>
      <h4>Fast Cars:</h4>
      <ul>
        {fastCars.map((car, index) => (
          <li key={index}>
            {car.brand} - {car.model}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
