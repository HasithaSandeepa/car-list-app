import React from "react";
import ReactDOM from "react-dom";
import CarList from "./CarList";
import "./styles.css";
import carData from "./carData.json";

// Specific car details to keep
const specificCar = {
  brand: "BMW",
  model: "i8",
  year: 2018,
  maxSpeed: "155 mph",
  price: 164295,
};

// Function to generate a random car
const getRandomCar = () => {
  const randomBrand = carData[Math.floor(Math.random() * carData.length)];
  const randomModel =
    randomBrand.models[Math.floor(Math.random() * randomBrand.models.length)];
  return {
    brand: randomBrand.brand,
    model: randomModel,
    year: 2023,
    maxSpeed: `${Math.floor(Math.random() * (200 - 120 + 1)) + 120} mph`,
    price: Math.floor(Math.random() * (150000 - 20000 + 1)) + 20000,
  };
};

// Generate a list of 19 random cars plus the specific car
const generateCars = () => {
  const cars = Array.from({ length: 19 }, getRandomCar);
  cars.push(specificCar); // Add the specific car to the list
  return cars;
};

const cars = generateCars();

ReactDOM.render(<CarList cars={cars} />, document.getElementById("root"));
