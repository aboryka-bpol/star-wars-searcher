import React, {  useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as actions from './store/spaceships.actions';
import { bindActionCreators } from 'redux'
import ResourcesList from '../shared/list';
import SpaceshipDetails from './spaceship-details';
import { ISpaceship } from './interfaces/spaceship.interface';
import { ISpaceshipsAwareState } from './store/spaceships.reducer';
import Searchbar from '../shared/searchbar';
import { Container, Grid } from '@material-ui/core';
import { ResourcesNotFound, theme } from '../styled';

const initialState = {
  page: 1,
  searched: ''
}

const Spaceships = ({ fetchSpaceships, spaceships, hasPrevPage, hasNextPage, isFetching }: Props) => {
  const [queryParams, setQueryParams] = useState(initialState)
  const [debouncedSearched, setDebouncedSearched] = useState(queryParams.searched);
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
    fetchSpaceships(queryParams.page, queryParams.searched);
  }, [fetchSpaceships, queryParams.page, queryParams.searched]);


  const changePage = (selectedPage: number) => {
    if(isFetching) return;

    setQueryParams({...queryParams, page: selectedPage})
  }

  return (
    <Container>
      <Searchbar placeholder='search for a spaceship' onSearchChange={(search: string) => setDebouncedSearched(search)}/>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid container item sm={12} md={6}>
          { !!spaceships.length ? <ResourcesList resources={spaceships}
                  hasPrev={hasPrevPage}
                  hasNext={hasNextPage}
                  page={queryParams.page}
                  onPageChange={changePage}
                  onResourceSelect={(spaceship: ISpaceship) => setSelectedResource(spaceship)}
          /> : <ResourcesNotFound theme={theme}>No spaceship found</ResourcesNotFound>}
        </Grid>
        <Grid container item sm={12} md={6}>
          { !!Object.keys(selectedResource).length && <SpaceshipDetails {...selectedResource} /> }
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (
  { spaceshipsReducer: { spaceships, hasPrevPage, hasNextPage, isFetching } }: ISpaceshipsAwareState
  ) => ({
    spaceships,
    hasPrevPage,
    hasNextPage,
    isFetching
  })


const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchSpaceships: bindActionCreators(actions.fetchSpaceships, dispatch)
  }
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>

export default connector(Spaceships);
