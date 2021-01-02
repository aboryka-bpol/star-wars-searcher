import React, {  useEffect, useState } from 'react';
import {connect} from 'react-redux';
import * as actions from './store/planets.actions';
import {bindActionCreators} from 'redux'
import List from '../components/Shared/List';
import PlanetDetails from './planet-details';


const Planets: React.FunctionComponent<any> = ({ fetchPlanets, planets, hasNext, hasPrev }) => {
  const [ page, setPage ] = useState(1);
  const [ searched, setSearched ] = useState('');
  const [selectedResource, setSelectedResource] = useState(null);

  useEffect(() => {
    fetchPlanets(page, searched);
  }, [fetchPlanets, page, searched, hasPrev, hasNext]);


  return (
    <div>
      <List resources={planets}
            hasPrev={hasPrev}
            hasNext={hasNext}
            page={page}
            onPageChange={(selectedPage: number) => setPage(selectedPage)}
            onResourceSelect={(planet: any) => setSelectedResource(planet)}
      />
    { selectedResource ? <PlanetDetails/> : null}
    </div>
  );
}

const mapStateToProps = ({planetsReducer: { planets, hasPrevPage, hasNextPage}}: any) => {
  return {
    planets,
    hasPrev: hasPrevPage,
    hasNext: hasNextPage
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPlanets: bindActionCreators(actions.fetchPlanets, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
