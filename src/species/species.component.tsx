import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as actions from './store/species.actions';
import { bindActionCreators } from 'redux';
import ResourcesList from '../shared/list';
import SpeciesDetails from './species-details';
import { ISpecies } from './interfaces/species.interface';
import { ISpeciesAwareState } from './store/species.reducer';
import Searchbar from '../shared/searchbar';
import { Container, Grid } from '@material-ui/core';
import { ResourcesNotFound, theme } from '../styled';

const initialState = {
  page: 1,
  searched: '',
};

const Species = ({
  fetchSpecies,
  species,
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
    fetchSpecies(queryParams.page, queryParams.searched);
  }, [fetchSpecies, queryParams.page, queryParams.searched]);

  const changePage = (selectedPage: number) => {
    if (isFetching) return;

    setQueryParams({ ...queryParams, page: selectedPage });
  };

  return (
    <Container>
      <Searchbar
        placeholder='search for a species'
        onSearchChange={(search: string) => setDebouncedSearched(search)}
      />
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'>
        <Grid container item sm={12} md={6}>
          {!!species.length ? (
            <ResourcesList
              resources={species}
              hasPrev={hasPrevPage}
              hasNext={hasNextPage}
              page={queryParams.page}
              onPageChange={changePage}
              onResourceSelect={(species: ISpecies) =>
                setSelectedResource(species)
              }
            />
          ) : (
              <ResourcesNotFound theme={theme}>
                No species found
              </ResourcesNotFound>
            )}
        </Grid>
        <Grid container item sm={12} md={6}>
          {!!Object.keys(selectedResource).length && (
            <SpeciesDetails {...selectedResource} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = ({
  speciesReducer: { species, hasPrevPage, hasNextPage, isFetching },
}: ISpeciesAwareState) => ({
  species,
  hasPrevPage,
  hasNextPage,
  isFetching,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchSpecies: bindActionCreators(actions.fetchSpecies, dispatch),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

export default connector(Species);
