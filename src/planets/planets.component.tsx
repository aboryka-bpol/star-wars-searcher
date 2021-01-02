import React, {  useEffect, useState } from 'react';
import {connect, ConnectedProps} from 'react-redux';
import * as actions from './store/planets.actions';
import {bindActionCreators} from 'redux'
import List from '../components/Shared/List';
import PlanetDetails from './planet-details';
import { IPlanet } from './interfaces/planet.interface';


const Planets = ({ fetchPlanets, planets, hasPrevPage, hasNextPage }: Props) => {
  const [ page, setPage ] = useState(1);
  const [ searched, setSearched ] = useState('');
  const [selectedResource, setSelectedResource] = useState({});

  useEffect(() => {
    fetchPlanets(page, searched);
  }, [fetchPlanets, page, searched]);


  return (
    <div>
      <List resources={planets}
            hasPrev={hasPrevPage}
            hasNext={hasNextPage}
            page={page}
            onPageChange={(selectedPage: number) => setPage(selectedPage)}
            onResourceSelect={(planet: IPlanet) => setSelectedResource(planet)}
      />
    { !!Object.keys(selectedResource).length && <PlanetDetails {...selectedResource} /> }
    </div>
  );
}

const mapStateToProps = ({planetsReducer: { planets, hasPrevPage, hasNextPage}}: any) => {
  return {
    planets,
    hasPrevPage,
    hasNextPage
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPlanets: bindActionCreators(actions.fetchPlanets, dispatch)
  }
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>

export default connector(Planets);
