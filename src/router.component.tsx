import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Planets from './planets';
import Spaceships from './spaceships';
import Vehicles from './vehicles';
import People from './people';
import Films from './films';
import Species from './species';

const Router = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to="/planets" />
      </Route>
      <Route path='/planets'>
        <Planets/>
      </Route>
      <Route path='/spaceships'>
        <Spaceships/>
      </Route>
      <Route path='/vehicles'>
        <Vehicles/>
      </Route>
      <Route path='/people'>
        <People/>
      </Route>
      <Route path='/films'>
        <Films/>
      </Route>
      <Route path='/species'>
        <Species/>
      </Route>
    </Switch>
  );
}

export default Router;
