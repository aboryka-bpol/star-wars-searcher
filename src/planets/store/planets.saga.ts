import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { PlanetsActionTypes } from './planets.actions';
import * as actions from './planets.actions';
import PlanetsApi from '../api/planets.api';

function* fetchPlanets(action: actions.IFetchPlanets) {
    const { page, search } = action.payload;
    const { next, previous, results } = yield call(
        PlanetsApi.getPlanets,
        page,
        search
    );

    yield put(actions.fetchPlanetsSuccess(results, previous, next))
}

function* watchRequests() {
    yield takeLatest(PlanetsActionTypes.FETCH_PLANETS, fetchPlanets);
}

function* planetsSaga() {
    yield all([fork(watchRequests)]);
}

export default planetsSaga;