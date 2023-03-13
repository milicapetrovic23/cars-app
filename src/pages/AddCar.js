import { useState } from "react";
import carsService from "../services/CarsService";
import { AppCars } from "./AppCars";

export const AddCar = ({cars, setCars}) => {
  //     brand i model se unose pomoću text input-a
  // year se unosi preko select box-a, u kome su prikazane godine 1990- 2018
  // maxSpeed i numberOfDoors se unose pomoću number input-a
  // isAutomatic se obeležava preko checkbox-a
  // engine realizovati preko radio button-a. Opcije su `diesel`, `petrol`, `electric`, `hybrid`
  // Formu submit-ovati pomoću submit button-a

  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: "",
    maxSpeed: "",
    isAutomatic: "",
    engine: "",
    numberOfDoors: "",
  });

  const handleBrandChange = (e) => {
    setNewCar({
      ...newCar,
      brand: e.target.value,
    });
  };

  const handleModelChange = (e) => {
    setNewCar({
      ...newCar,
      model: e.target.value,
    });
  };

  const handleYearChange = (e) => {
    setNewCar({
      ...newCar,
      year: e.target.value,
    });
  };

  const handleMaxSpeedChange = (e) => {
    setNewCar({
      ...newCar,
      maxSpeed: e.target.value,
    });
  };

  const handleNumberOfDoorsChange = (e) => {
    setNewCar({
      ...newCar,
      numberOfDoors: e.target.value,
    });
  };

  const handleIsAutomaticChange = (e) => {
    setNewCar({
      ...newCar,
      isAutomatic: e.target.value,
    });
  };

  const handleEngineChange = (e) => {
    setNewCar({
      ...newCar,
      engine: e.target.value,
    });
  };

  const addCar = (e) => {
    e.preventDefault()

    setCars([...cars, newCar])
    //carsService.add(newCar)
    setNewCar({
      brand: "",
      model: "",
      year: "",
      maxSpeed: "",
      isAutomatic: "",
      engine: "",
      numberOfDoors: "",
    })
  }

  const resetForm = () => { 
    setNewCar({
      brand: "",
      model: "",
      year: "",
      maxSpeed: "",
      isAutomatic: "",
      engine: "",
      numberOfDoors: "",
    })
  }

  return (
    <form onSubmit={addCar}>
      <label>Brand</label>
      <input type="text" value={newCar.brand} onChange={handleBrandChange}></input>
      <label>Model</label>
      <input type="text" value={newCar.model} onChange={handleModelChange}></input>
      <label>Year</label>
      <select name="year" value={newCar.year} onChange={handleYearChange}>
        <option value="1990">1990</option>
        <option value="1991">1991</option>
        <option value="1992">1992</option>
        <option value="1993">1993</option>
        <option value="1994">1994</option>
        <option value="1995">1995</option>
        <option value="1996">1996</option>
        <option value="1997">1997</option>
        <option value="1998">1998</option>
        <option value="1999">1999</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
        <option value="2004">2004</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
      </select>
      <label>Max speed</label>
      <input type="number" value={newCar.maxSpeed} onChange={handleMaxSpeedChange}></input>
      <label>Number of doors</label>
      <input type="number" value={newCar.numberOfDoors} onChange={handleNumberOfDoorsChange}></input>
      <label>Is automatic</label>
      <input type="checkbox" value={newCar.isAutomatic} onChange={handleIsAutomaticChange}></input>
      <div>
      <input type="radio" id="diesel" name="engine" value="diesel" checked={newCar.engine === "diesel"} onChange={handleEngineChange}></input>
      <label htmlFor="diesel">diesel</label>
      <input type="radio" id="petrol" name="engine" value="petrol" checked={newCar.engine === "petrol"} onChange={handleEngineChange}></input>
      <label htmlFor="petrol">petrol</label>
      <input type="radio" id="electric" name="engine" value="electric" checked={newCar.engine === "electric"} onChange={handleEngineChange}></input>
      <label htmlFor="electric">electric</label>
      <input type="radio" id="hybrid" name="engine" value="hybrid" checked={newCar.engine === "hybrid"} onChange={handleEngineChange}></input>
      <label htmlFor="hybrid">hybrid</label>
      </div>
      <button>Submit</button>
      <button onClick={resetForm}>Reset</button>
    </form>
  );
};
