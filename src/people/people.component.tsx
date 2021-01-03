import React, {  useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as actions from './store/people.actions';
import { bindActionCreators } from 'redux'
import ResourcesList from '../shared/list';
import PersonDetails from './person-details';
import { IPerson } from './interfaces/people.interface';
import { IPeopleAwareState } from './store/people.reducer';
import Searchbar from '../shared/searchbar';
import { Container, Grid } from '@material-ui/core';
import { ResourcesNotFound, theme } from '../styled';

const initialState = {
  page: 1,
  searched: ''
}

const People = ({ fetchPeople, people, hasPrevPage, hasNextPage, isFetching }: Props) => {
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
    fetchPeople(queryParams.page, queryParams.searched);
  }, [fetchPeople, queryParams.page, queryParams.searched]);

  const changePage = (selectedPage: number) => {
    if(isFetching) return;

    setQueryParams({...queryParams, page: selectedPage})
  }

  return (
    <Container>
      <Searchbar placeholder='search for a people' onSearchChange={(search: string) => setDebouncedSearched(search)}/>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid container item sm={12} md={6}>
          { people.length ? <ResourcesList resources={people}
                      hasPrev={hasPrevPage}
                      hasNext={hasNextPage}
                      page={queryParams.page}
                      onPageChange={changePage}
                      onResourceSelect={(people: IPerson) => setSelectedResource(people)}
          /> : <ResourcesNotFound theme={theme}>No people found</ResourcesNotFound> }
        </Grid>
        <Grid container item sm={12} md={6}>
          { !!Object.keys(selectedResource).length && <PersonDetails {...selectedResource} /> }
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (
  { peopleReducer: { people, hasPrevPage, hasNextPage, isFetching } }: IPeopleAwareState
  ) => ({
    people,
    hasPrevPage,
    hasNextPage,
    isFetching
  })


const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPeople: bindActionCreators(actions.fetchPeople, dispatch)
  }
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>

export default connector(People);
