import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.component';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import planetsReducer from './planets/store/planets.reducer';
import spaceshipsReducer from './spaceships/store/spaceships.reducer';
import spaceshipsSaga from './spaceships/store/spaceships.saga';
import vehiclesReducer from './vehicles/store/vehicles.reducer';
import vehiclesSaga from './vehicles/store/vehicles.saga';
import planetsSaga from './planets/store/planets.saga';
import { all } from 'redux-saga/effects';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './styled';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
    planetsReducer,
    spaceshipsReducer,
    vehiclesReducer
});
function* saga() {
    yield all([
        planetsSaga(),
        spaceshipsSaga(),
        vehiclesSaga()
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


