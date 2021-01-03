import React from 'react';
import { IPerson } from '../interfaces/people.interface';
import { theme } from '../../styled';
import { ResourceTitle, ResourceGrid, ResourceValue, ResourceList, ResourceListItem } from '../../styled';
import { ListItemText } from '@material-ui/core';
import {mappedPersons} from './person-details.helper';

const PersonDetails = (props: IPerson) => {
  const {films, starships, species, vehicles, resourceKey, ...rest } = props;
  const renderedFilms = films && films.map((film: string) => {
    return (
      <ResourceValue key={film}>{film}</ResourceValue>
    )
  })

  const renderedStarships = starships && starships.map((starship: string) => {
    return (
      <ResourceValue key={starship}>{starship}</ResourceValue>
    )
  })

  const renderedSpecies = species && species.map((singleSpecies: string) => {
    return (
      <ResourceValue key={singleSpecies}>{singleSpecies}</ResourceValue>
    )
  })

  const renderedVehicles = vehicles && vehicles.map((vehicle: string) => {
    return (
      <ResourceValue key={vehicle}>{vehicle}</ResourceValue>
    )
  })

  const personDetails = {
    ...rest,
    renderedFilms,
    renderedSpecies,
    renderedStarships, 
    renderedVehicles
  };

  const renderedPerson = mappedPersons(personDetails).map(({description, value}: any) => {
  return (
    <ResourceListItem key={description}>
      <ListItemText primary={description} secondary={value}></ListItemText>
    </ResourceListItem>
  )})
  return (
    <React.Fragment>
      <ResourceTitle theme={theme}>Person Details</ResourceTitle>
      <ResourceGrid
        container
        direction="row"
        justify="flex-start"
      >
        <ResourceList>
          {renderedPerson}
        </ResourceList>
      </ResourceGrid>
    </React.Fragment>
  );
}

export default PersonDetails;