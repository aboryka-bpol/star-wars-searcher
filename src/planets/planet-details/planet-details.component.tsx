import React from 'react';
import { IPlanet } from '../interfaces/planet.interface';
import { theme } from '../../styled';
import { ResourceTitle, ResourceGrid, ResourceValue, ResourceList, ResourceListItem } from '../../styled';
import { ListItemText } from '@material-ui/core';
import {mappedPlanets} from './planet-details.helper';

const PlanetDetails = (props: IPlanet) => {
  const {films, residents, ...rest } = props;
  const renderedFilms = films && films.map((film: string) => {
    return (
      <ResourceValue key={film}>{film}</ResourceValue>
    )
  })

  const renderedResidents = residents && residents.map((resident: string) => {
    return (
      <ResourceValue key={resident}>{resident}</ResourceValue>
    )
  })

  const planetDetails = {...rest, renderedResidents, renderedFilms};

  const renderedPlanet = mappedPlanets(planetDetails).map(({description, value}: any) => {
  return (
    <ResourceListItem key={description}>
      <ListItemText primary={description} secondary={value}></ListItemText>
    </ResourceListItem>
  )})
  return (
    <React.Fragment>
    <ResourceTitle theme={theme}>Planet Details</ResourceTitle>
    <ResourceGrid
      container
      direction="row"
      justify="flex-start"
    >
      <ResourceList>
        {renderedPlanet}
      </ResourceList>
    </ResourceGrid>
  </React.Fragment>
  );
}

export default PlanetDetails;