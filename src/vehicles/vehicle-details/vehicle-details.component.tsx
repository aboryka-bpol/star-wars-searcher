import React from 'react';
import { IVehicle } from '../interfaces/vehicle.interface';
import { theme } from '../../styled';
import { ResourceTitle, ResourceGrid, ResourceValue, ResourceList, ResourceListItem } from '../../styled';
import { ListItemText } from '@material-ui/core';
import {mappedVehicles} from './vehicle-details.helper';

const VehicleDetails = (props: IVehicle) => {
  const {films, pilots, ...rest } = props;
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

  const vehicleDetails = {...rest, renderedPilots, renderedFilms};

  const renderedVehicle = mappedVehicles(vehicleDetails).map(({description, value}: any) => {
  return (
    <ResourceListItem key={description}>
      <ListItemText primary={description} secondary={value}></ListItemText>
    </ResourceListItem>
  )})
  return (
    <React.Fragment>
    <ResourceTitle theme={theme}>Vehicle Details</ResourceTitle>
    <ResourceGrid
      container
      direction="row"
      justify="flex-start"
    >
      <ResourceList>
        {renderedVehicle}
      </ResourceList>
    </ResourceGrid>
  </React.Fragment>
  );
}

export default VehicleDetails;