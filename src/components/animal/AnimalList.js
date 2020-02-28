import React, { useEffect, useState } from "react";
import AnimalManager from "../../modules/AnimalManager";
import AnimalCard from "./AnimalCard";

const AnimalList = props => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return AnimalManager.getAll().then(animalsFromAPI => {
      setAnimals(animalsFromAPI);
    });
  };

  useEffect(() => {
    getAnimals();
  }, []);

  const deleteAnimal = id => {
    AnimalManager.delete(id).then(() =>
      AnimalManager.getAll().then(setAnimals)
    );
  };

  return (
    <React.Fragment>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/animals/new");
          }}
        >
          Admit Animal
        </button>
      </section>
      <div className="container-cards">
        {animals.map(animal => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            deleteAnimal={deleteAnimal}
            {...props}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default AnimalList;
