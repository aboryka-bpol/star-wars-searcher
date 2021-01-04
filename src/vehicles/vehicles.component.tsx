import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as actions from './store/vehicles.actions';
import { bindActionCreators } from 'redux';
import ResourcesList from '../shared/list';
import VehicleDetails from './vehicle-details';
import { IVehicle } from './interfaces/vehicle.interface';
import { IVehiclesAwareState } from './store/vehicles.reducer';
import Searchbar from '../shared/searchbar';
import { Container, Grid } from '@material-ui/core';
import { ResourcesNotFound, theme } from '../styled';

const initialState = {
  page: 1,
  searched: '',
};

const Vehicles = ({
  fetchVehicles,
  vehicles,
  hasPrevPage,
  hasNextPage,
  isFetching,
}: Props) => {
  const [queryParams, setQueryParams] = useState(initialState);
  const [debouncedSearched, setDebouncedSearched] = useState(
    queryParams.searched
  );
  const [selectedResource, setSelectedResource] = useState({});

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setQueryParams({ page: 1, searched: debouncedSearched });
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [debouncedSearched]);

  useEffect(() => {
    fetchVehicles(queryParams.page, queryParams.searched);
  }, [fetchVehicles, queryParams.page, queryParams.searched]);

  const changePage = (selectedPage: number) => {
    if (isFetching) return;

    setQueryParams({ ...queryParams, page: selectedPage });
  };

  return (
    <Container>
      <Searchbar
        placeholder='search for a vehicle'
        onSearchChange={(search: string) => setDebouncedSearched(search)}
      />
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'>
        <Grid container item sm={12} md={6}>
          {!!vehicles.length ? (
            <ResourcesList
              resources={vehicles}
              hasPrev={hasPrevPage}
              hasNext={hasNextPage}
              page={queryParams.page}
              onPageChange={changePage}
              onResourceSelect={(vehicle: IVehicle) =>
                setSelectedResource(vehicle)
              }
            />
          ) : (
              <ResourcesNotFound theme={theme}>
                No vehicles found
              </ResourcesNotFound>
            )}
        </Grid>
        <Grid container item sm={12} md={6}>
          {!!Object.keys(selectedResource).length && (
            <VehicleDetails {...selectedResource} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = ({
  vehiclesReducer: { vehicles, hasPrevPage, hasNextPage, isFetching },
}: IVehiclesAwareState) => ({
  vehicles,
  hasPrevPage,
  hasNextPage,
  isFetching,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchVehicles: bindActionCreators(actions.fetchVehicles, dispatch),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

export default connector(Vehicles);
