import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.component';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { planetsReducer, planetsSaga } from './planets/store';
import { spaceshipsReducer, spaceshipsSaga } from './spaceships/store';
import { vehiclesReducer, vehiclesSaga } from './vehicles/store';
import { filmsSaga, filmsReducer } from './films/store';
import { peopleSaga, peopleReducer } from './people/store';
import { speciesSaga, speciesReducer} from './species/store';
import { all } from 'redux-saga/effects';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './styled';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    planetsReducer,
    spaceshipsReducer,
    vehiclesReducer,
    filmsReducer,
    peopleReducer,
    speciesReducer
});
function* saga() {
    yield all([
        planetsSaga(),
        spaceshipsSaga(),
        vehiclesSaga(),
        filmsSaga(),
        peopleSaga(),
        speciesSaga()
    ])
  }
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);


