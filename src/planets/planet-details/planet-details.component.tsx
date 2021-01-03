import React from 'react';
import { IPlanet } from '../interfaces/planet.interface';
import { theme } from '../../styled';
import { ResourceTitle, ResourceGrid, ResourceValue } from '../../styled';
import { List, ListItem, ListItemText } from '@material-ui/core';

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
      <ResourceValue key={film}>{film}</ResourceValue>
    ) 
  });

  const renderedResidents = residents && residents.map((resident: string) => {
    return (
      <ResourceValue key={resident}>{resident}</ResourceValue>
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
            <ListItemText primary="Rotation Period:" secondary={rotationPeriod}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="Orbital Period:" secondary={orbitalPeriod}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="Diameter:" secondary={diameter}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="Climate:" secondary={climate}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="Gravity:" secondary={gravity}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="Terrain:" secondary={terrain}></ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemText primary="Surface Water:" secondary={surfaceWater}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="Population:" secondary={population}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="Film Resources::" secondary={renderedFilms}></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="Resident Resources:" secondary={renderedResidents}></ListItemText>
          </ListItem>
        </List>
      </ResourceGrid>
    </React.Fragment>
  );
}

export default PlanetDetails;
