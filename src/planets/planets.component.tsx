import React, {  useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as actions from './store/planets.actions';
import { bindActionCreators } from 'redux'
import ResourcesList from '../shared/list';
import PlanetDetails from './planet-details';
import { IPlanet } from './interfaces/planet.interface';
import { IPlanetsAwareState } from './store/planets.reducer';
import Searchbar from '../shared/searchbar';
import { Container, Grid } from '@material-ui/core';
import { ResourcesNotFound, theme } from '../styled';

const initialState = {
  page: 1,
  searched: ''
}

const Planets = ({ fetchPlanets, planets, hasPrevPage, hasNextPage, isFetching }: Props) => {
  const [queryParams, setQueryParams] = useState(initialState)
  const [debouncedSearched, setDebouncedSearched] = useState('');
  const [selectedResource, setSelectedResource] = useState({});

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setQueryParams({page:1, searched: debouncedSearched});
    }, 500);

    return () => {
      clearTimeout(timeoutId)
    }
  }, [debouncedSearched])

  useEffect(() => {
    fetchPlanets(queryParams.page, queryParams.searched);
  }, [fetchPlanets, queryParams.page, queryParams.searched]);

  const changePage = (selectedPage: number) => {
    if(isFetching) return;

    setQueryParams({...queryParams, page: selectedPage})
  }

  return (
    <Container>
      <Searchbar placeholder='search for a planet' onSearchChange={(search: string) => setDebouncedSearched(search)}/>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid container item sm={12} md={6}>
          { planets.length ? <ResourcesList resources={planets}
                      hasPrev={hasPrevPage}
                      hasNext={hasNextPage}
                      page={queryParams.page}
                      onPageChange={changePage}
                      onResourceSelect={(planet: IPlanet) => setSelectedResource(planet)}
          /> : <ResourcesNotFound theme={theme}>No planets found</ResourcesNotFound> }
        </Grid>
        <Grid container item sm={12} md={6}>
          { !!Object.keys(selectedResource).length && <PlanetDetails {...selectedResource} /> }
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (
  { planetsReducer: { planets, hasPrevPage, hasNextPage, isFetching } }: IPlanetsAwareState
  ) => ({
    planets,
    hasPrevPage,
    hasNextPage,
    isFetching
  })


const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPlanets: bindActionCreators(actions.fetchPlanets, dispatch)
  }
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>

export default connector(Planets);
