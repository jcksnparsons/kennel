import React, { useEffect, useState } from "react";
import AnimalManager from "../../modules/AnimalManager";
import AnimalCard from "./AnimalCard";

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return AnimalManager.getAll().then(animalsFromAPI => {
      // We'll do something more interesting with this data soon.
      setAnimals(animalsFromAPI);
    });
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div className="container-cards">
      {animals.map(animal => (
        <AnimalCard key={animal.id} animal={animal}/>
      ))}
    </div>
  );
};

export default AnimalList;
