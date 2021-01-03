import React from 'react';
import { IFilm } from '../interfaces/film.interface';
import { theme } from '../../styled';
import { ResourceTitle, ResourceGrid, ResourceValue, ResourceList, ResourceListItem } from '../../styled';
import { ListItemText } from '@material-ui/core';
import {mappedFilms} from './film-details.helper';

const FilmDetails = (props: IFilm) => {
  const {characters, planets, starships, species, vehicles, resourceKey, ...rest } = props;
  const renderedCharacters = characters && characters.map((character: string) => {
    return (
      <ResourceValue key={character}>{character}</ResourceValue>
    )
  })

  const renderedPlanets = planets && planets.map((planet: string) => {
    return (
      <ResourceValue key={planet}>{planet}</ResourceValue>
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

  const filmDetails = {
    ...rest,
    renderedCharacters,
    renderedPlanets,
    renderedSpecies,
    renderedStarships, 
    renderedVehicles
  };

  const renderedFilm = mappedFilms(filmDetails).map(({description, value}: any) => {
  return (
    <ResourceListItem key={description}>
      <ListItemText primary={description} secondary={value}></ListItemText>
    </ResourceListItem>
  )})
  return (
    <React.Fragment>
      <ResourceTitle theme={theme}>Film Details</ResourceTitle>
      <ResourceGrid
        container
        direction="row"
        justify="flex-start"
      >
        <ResourceList>
          {renderedFilm}
        </ResourceList>
      </ResourceGrid>
    </React.Fragment>
  );
}

export default FilmDetails;