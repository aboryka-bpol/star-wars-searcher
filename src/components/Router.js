import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Planets from '../planets';
import Spaceships from '../spaceships';
import Vehicles from './Vehicles';
import People from './People';
import Films from './Films';
import Species from './Species';

function Router() {
  return (
    <Switch>
      <Route path='/' exact><Planets/></Route>
      <Route path='/spaceships'><Spaceships/></Route>
      <Route path='/vehicles'><Vehicles/></Route>
      <Route path='/people'><People/></Route>
      <Route path='/films'><Films/></Route>
      <Route path='/species'><Species/></Route>
    </Switch>
  );
}

export default Router;
