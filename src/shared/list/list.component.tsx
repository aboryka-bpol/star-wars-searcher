import {
  ListItemText,
  Divider,
  Grid,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import { IPlanet } from '../../planets/interfaces/planet.interface';
import { ISpaceship } from '../../spaceships/interfaces/spaceship.interface';
import { StyledListItem, StyledList, StyledButton } from './styled';
import React from 'react';
import { IVehicle } from '../../vehicles/interfaces/vehicle.interface';
import { IFilm } from '../../films/interfaces/film.interface';

type Resource = ISpaceship | IPlanet | IVehicle | IFilm;

interface IProps {
  resources: Resource[];
  hasPrev: boolean;
  hasNext: boolean;
  page: number;
  onPageChange: (selectedPage: number) => void;
  onResourceSelect: (spaceship: ISpaceship) => void;
}

const ResourcesList = ({
  resources,
  hasPrev,
  hasNext,
  onPageChange,
  page,
  onResourceSelect,
}: IProps) => {
  const renderedList = resources.map((resource) => {
    const { resourceKey } = resource;
    return (
      <StyledList key={resourceKey}>
        <StyledListItem>
          <ListItemText primary={resourceKey} />
          <StyledButton
            variant='contained'
            color='primary'
            size='small'
            onClick={() => onResourceSelect(resource)}>
            Details
          </StyledButton>
        </StyledListItem>
        <Divider />
      </StyledList>
    );
  });

  return (
    <Grid container justify='flex-end'>
      {renderedList}
      {(hasPrev || hasNext) && !!resources.length && (
        <ButtonGroup
          variant='text'
          color='secondary'
          aria-label='contained primary button group'>
          <Button
            value='prev'
            disabled={!hasPrev}
            onClick={() => onPageChange(page - 1)}>
            {'< prev'}
          </Button>
          <Button
            value='next'
            disabled={!hasNext}
            onClick={() => onPageChange(page + 1)}>
            {'next >'}
          </Button>
        </ButtonGroup>
      )}
    </Grid>
  );
};

export default ResourcesList;
