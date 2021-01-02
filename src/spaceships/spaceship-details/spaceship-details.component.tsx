import React from 'react';
import { ISpaceship } from '../interfaces/spaceship.interface';

const SpaceshipDetails = ({ 
  name,
  model,
  manufacturer,
  costInCredits,
  length,
  maxAtmospheringSpeed,
  crew,
  passengers,
  cargoCapacity,
  consumables,
  hyperdriveRating,
  mglt,
  starshipClass,
  pilots,
  films,
}: ISpaceship) => {
  const renderedFilms = films && films.map((film: string) => {
    return (
      <div>{film}</div>
    )
  })

  const renderedPilots = pilots && pilots.map((pilot: string) => {
    return (
      <div>{pilot}</div>
    )
  })

  return (
    <div>
      <div>Name: {name}</div>
      <div>Model: {model}</div>
      <div>Manufacturer: {manufacturer}</div>
      <div>Cost In Credits: {costInCredits}</div>
      <div>Length: {length}</div>
      <div>Max Atmosphering Speed: {maxAtmospheringSpeed}</div>
      <div>Crew: {crew}</div>
      <div>Passenders: {passengers}</div>
      <div>Cargo Capacity: {cargoCapacity}</div>
      <div>Consumables: {consumables}</div>
      <div>Hyper Drive Rating: {hyperdriveRating}</div>
      <div>MGLT: {mglt}</div>
      <div>Starship Class: {starshipClass}</div>
      <div>Pilot Resources: {renderedPilots}</div>
      <div>Film Resources: {renderedFilms}</div>
    </div>
  );
}

export default SpaceshipDetails;