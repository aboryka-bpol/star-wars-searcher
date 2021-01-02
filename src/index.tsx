import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import planetsReducer from './planets/store/planets.reducer';
import planetsSaga from './planets/store/planets.saga';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({planetsReducer});
function* saga() {
    yield all([
        planetsSaga()
    ])
  }
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


