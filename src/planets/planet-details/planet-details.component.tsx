import React from 'react';
import { IPlanet } from '../interfaces/planet.interface';

const PlanetDetails = (props: IPlanet) => {
  const {name, rotationPeriod, orbitalPeriod, diameter, climate, gravity, terrain, surfaceWater, population, films, residents} = props;

  const renderedFilms = films && films.map((film: string, index: number) => {
    return (
      <div key={index}>{film}</div>
    )
  });

  const renderedResidents = residents && residents.map((resident: string, index: number) => {
    return (
      <div key={index}>{resident}</div>
    )
  })

  return (
    <div>
      <div>Planet Name: {name}</div>
      <div>Rotation Period: {rotationPeriod}</div>
      <div>Orbital Period: {orbitalPeriod}</div>
      <div>Diameter: {diameter}</div>
      <div>Climate: {climate}</div>
      <div>Gravity: {gravity}</div>
      <div>Terrain: {terrain}</div>
      <div>Surface Water: {surfaceWater}</div>
      <div>Population: {population}</div>
      <div>Film Resources:
        <div>
          {renderedFilms}
        </div>
      </div>
      <div>Resident Resources:
        <div>
          {renderedResidents}
        </div>
      </div>
    </div>
  );
}

export default PlanetDetails;
