import React, {  useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as actions from './store/spaceships.actions';
import { bindActionCreators } from 'redux'
import List from '../components/Shared/list';
import SpaceshipDetails from './spaceship-details';
import { ISpaceship } from './interfaces/spaceship.interface';
import { ISpaceshipsAwareState } from './store/spaceships.reducer';
import Searchbar from '../components/Shared/Searchbar';


const Spaceships = ({ fetchSpaceships, spaceships, hasPrevPage, hasNextPage }: Props) => {
  const [page, setPage] = useState(1);
  const [searched, setSearched] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(searched);
  const [selectedResource, setSelectedResource] = useState({});

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(searched)
    }, 1000);

    return () => {
      clearTimeout(timeoutId)
    }
  }, [searched])

  useEffect(() => {
    fetchSpaceships(page, debouncedSearch);
  }, [fetchSpaceships, page, debouncedSearch]);

  return (
    <div>
      <Searchbar placeholder='search for a spaceship' onSearchChange={(search: string) => setSearched(search)}/>
      <List resources={spaceships}
            hasPrev={hasPrevPage}
            hasNext={hasNextPage}
            page={page}
            onPageChange={(selectedPage: number) => setPage(selectedPage)}
            onResourceSelect={(spaceship: ISpaceship) => setSelectedResource(spaceship)}
      />
    { !!Object.keys(selectedResource).length && <SpaceshipDetails {...selectedResource} /> }
    </div>
  );
}

const mapStateToProps = (
  { spaceshipsReducer: { spaceships, hasPrevPage, hasNextPage } }: ISpaceshipsAwareState
  ) => ({
    spaceships,
    hasPrevPage,
    hasNextPage
  })


const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchSpaceships: bindActionCreators(actions.fetchSpaceships, dispatch)
  }
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>

export default connector(Spaceships);
