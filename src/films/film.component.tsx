import React, {  useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as actions from './store/films.actions';
import { bindActionCreators } from 'redux'
import ResourcesList from '../shared/list';
import FilmDetails from './film-details';
import { IFilm } from './interfaces/film.interface';
import { IFilmsAwareState } from './store/films.reducer';
import Searchbar from '../shared/searchbar';
import { Container, Grid } from '@material-ui/core';
import { ResourcesNotFound, theme } from '../styled';

const initialState = {
  page: 1,
  searched: ''
}

const Films = ({ fetchFilms, films, hasPrevPage, hasNextPage, isFetching }: Props) => {
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
    fetchFilms(queryParams.page, queryParams.searched);
  }, [fetchFilms, queryParams.page, queryParams.searched]);

  const changePage = (selectedPage: number) => {
    if(isFetching) return;

    setQueryParams({...queryParams, page: selectedPage})
  }

  return (
    <Container>
      <Searchbar placeholder='search for a film' onSearchChange={(search: string) => setDebouncedSearched(search)}/>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid container item sm={12} md={6}>
          { films.length ? <ResourcesList resources={films}
                      hasPrev={hasPrevPage}
                      hasNext={hasNextPage}
                      page={queryParams.page}
                      onPageChange={changePage}
                      onResourceSelect={(film: IFilm) => setSelectedResource(film)}
          /> : <ResourcesNotFound theme={theme}>No films found</ResourcesNotFound> }
        </Grid>
        <Grid container item sm={12} md={6}>
          { !!Object.keys(selectedResource).length && <FilmDetails {...selectedResource} /> }
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (
  { filmsReducer: { films, hasPrevPage, hasNextPage, isFetching } }: IFilmsAwareState
  ) => ({
    films,
    hasPrevPage,
    hasNextPage,
    isFetching
  })


const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchFilms: bindActionCreators(actions.fetchFilms, dispatch)
  }
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>

export default connector(Films);
