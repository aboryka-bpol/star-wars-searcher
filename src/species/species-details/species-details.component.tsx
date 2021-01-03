import React from 'react';
import { ISpecies } from '../interfaces/species.interface';
import { theme } from '../../styled';
import { ResourceTitle, ResourceGrid, ResourceValue, ResourceList, ResourceListItem } from '../../styled';
import { ListItemText } from '@material-ui/core';
import {mappedSpecies} from './species-details.helper';

const SpeciesDetails = (props: ISpecies) => {
  const {films, people, resourceKey, ...rest } = props;

  const renderedFilms = films && films.map((film: string) => {
    return (
      <ResourceValue key={film}>{film}</ResourceValue>
    )
  })

  const renderedPeople = people && people.map((person: string) => {
    return (
      <ResourceValue key={person}>{person}</ResourceValue>
    )
  })

  const speciesDetails = {...rest, renderedPeople, renderedFilms};

  const renderedSpecies = mappedSpecies(speciesDetails).map(({description, value}: any) => {
  return (
    <ResourceListItem key={description}>
      <ListItemText primary={description} secondary={value}></ListItemText>
    </ResourceListItem>
  )})
  return (
    <React.Fragment>
      <ResourceTitle theme={theme}>Species Details</ResourceTitle>
      <ResourceGrid
        container
        direction="row"
        justify="flex-start"
      >
        <ResourceList>
          {renderedSpecies}
        </ResourceList>
      </ResourceGrid>
    </React.Fragment>
  );
}

export default SpeciesDetails;