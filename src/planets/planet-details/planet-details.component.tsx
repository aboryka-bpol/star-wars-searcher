import React from 'react';
import { IPlanet } from '../interfaces/planet.interface';

const PlanetDetails = ({
  name,
  rotationPeriod,
  orbitalPeriod,
  diameter,
  climate,
  gravity,
  terrain,
  surfaceWater,
  population,
  films,
  residents
}: IPlanet) => {
  const renderedFilms = films && films.map((film: string) => {
    return (
      <div key={film}>{film}</div>
    )
  });

  const renderedResidents = residents && residents.map((resident: string) => {
    return (
      <div key={resident}>{resident}</div>
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
