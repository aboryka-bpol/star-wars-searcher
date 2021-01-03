import React from 'react';
import { ISpaceship } from '../interfaces/spaceship.interface';
import { theme } from '../../styled';
import { ResourceTitle, ResourceGrid, ResourceValue } from '../../styled';
import { List, ListItem, ListItemText } from '@material-ui/core';

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
      <ResourceValue key={film}>{film}</ResourceValue>
    )
  })

  const renderedPilots = pilots && pilots.map((pilot: string) => {
    return (
      <ResourceValue key={pilot}>{pilot}</ResourceValue>
    )
  })

  return (
    <React.Fragment>
    <ResourceTitle theme={theme}>Planet Details</ResourceTitle>
    <ResourceGrid
      container
      direction="row"
      justify="flex-start"
    >
      <List>
        <ListItem>
          <ListItemText primary="Name:" secondary={name}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Model:" secondary={model}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Manufacturer:" secondary={manufacturer}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Cost In Credits:" secondary={costInCredits}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Length:" secondary={length}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Max Atmosphering Speed:" secondary={maxAtmospheringSpeed}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Crew:" secondary={crew}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Passenders:" secondary={passengers}></ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemText primary="Cargo Capacity:" secondary={cargoCapacity}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Consumables:" secondary={consumables}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Hyper Drive Rating:" secondary={hyperdriveRating}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="MGLT:" secondary={mglt}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Starship Class:" secondary={starshipClass}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Pilot Resources:" secondary={renderedPilots}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Film Resources::" secondary={renderedFilms}></ListItemText>
        </ListItem>
      </List>
    </ResourceGrid>
  </React.Fragment>
    // <div>
    //   <div>Name: {name}</div>
    //   <div>Model: {model}</div>
    //   <div>Manufacturer: {manufacturer}</div>
    //   <div>Cost In Credits: {costInCredits}</div>
    //   <div>Length: {length}</div>
    //   <div>Max Atmosphering Speed: {maxAtmospheringSpeed}</div>
    //   <div>Crew: {crew}</div>
    //   <div>Passenders: {passengers}</div>
    //   <div>Cargo Capacity: {cargoCapacity}</div>
    //   <div>Consumables: {consumables}</div>
    //   <div>Hyper Drive Rating: {hyperdriveRating}</div>
    //   <div>MGLT: {mglt}</div>
    //   <div>Starship Class: {starshipClass}</div>
    //   <div>Pilot Resources: {renderedPilots}</div>
    //   <div>Film Resources: {renderedFilms}</div>
    // </div>
  );
}

export default SpaceshipDetails;