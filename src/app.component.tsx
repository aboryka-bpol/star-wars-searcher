import React from 'react';
import Router from './router.component';
import Navbar from './shared/navbar';


const App = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <Router/>
    </React.Fragment>
  );
}

export default App;
