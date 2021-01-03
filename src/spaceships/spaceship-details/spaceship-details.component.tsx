import React from 'react';
import { ISpaceship } from '../interfaces/spaceship.interface';
import { theme } from '../../styled';
import { ResourceTitle, ResourceGrid, ResourceValue, ResourceList, ResourceListItem } from '../../styled';
import { ListItemText } from '@material-ui/core';
import {mappedSpaceships} from './spaceship-details.helper';

const SpaceshipDetails = (props: ISpaceship) => {
  const {films, pilots, resourceKey, ...rest } = props;
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

  const spaceshipDetails = {...rest, renderedPilots, renderedFilms};

  const renderedSpaceship = mappedSpaceships(spaceshipDetails).map(({description, value}: any) => {
  return (
    <ResourceListItem key={description}>
      <ListItemText primary={description} secondary={value}></ListItemText>
    </ResourceListItem>
  )})
  return (
    <React.Fragment>
      <ResourceTitle theme={theme}>Spaceship Details</ResourceTitle>
      <ResourceGrid
        container
        direction="row"
        justify="flex-start"
      >
        <ResourceList>
          {renderedSpaceship}
        </ResourceList>
      </ResourceGrid>
    </React.Fragment>
  );
}

export default SpaceshipDetails;