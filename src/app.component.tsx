import React from 'react';
import Router from './router';
import Navbar from './shared/navbar';


const App = () => {
  return (
    <div>
        <Navbar/>
        <Router/>
    </div>
  );
}

export default App;
