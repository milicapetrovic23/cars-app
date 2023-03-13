import { useState, useEffect } from "react";
import { CarsList } from "../components/CarsList";
import carsService from "../services/CarsService";

export const AppCars = () => {
  const [cars, setCars] = useState([]);
  const handleGetCars = async () => {
    const response = await carsService.getAll();
    setCars(response.data);
  };

  useEffect(() => {
    handleGetCars();
  }, []);

  return (
    <div>
      <CarsList cars={cars} />
    </div>
  );
};
