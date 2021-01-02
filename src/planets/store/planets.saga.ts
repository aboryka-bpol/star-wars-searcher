import { all, call, fork, put, takeLatest} from 'redux-saga/effects';
import { PlanetsActionTypes } from './planets.actions';
import * as actions from './planets.actions';
import PlanetsApi from '../api/planets.api';
import { IPlanet } from '../interfaces/planet.interface';

function* fetchPlanets(action: actions.IFetchPlanets) {
    const { page, search } = action.payload;
    const { next, previous, results } = yield call(
        PlanetsApi.getPlanets,
        page,
        search
    );

    const mappedResults = results.map(
        (result: Partial<IPlanet[]> & { rotation_period: number, orbital_period: number, surface_water: number }): IPlanet => {
        const { rotation_period: rotationPeriod, orbital_period: orbitalPeriod, surface_water: surfaceWater, ...rest } = result;
        return {
            ...rest,
            rotationPeriod,
            orbitalPeriod,
            surfaceWater
        }
    });

    yield put(actions.fetchPlanetsSuccess(mappedResults, previous, next))

}

function* watchRequests() {
    yield takeLatest(PlanetsActionTypes.FETCH_PLANETS, fetchPlanets);
}

function* planetsSaga() {
    yield all([fork(watchRequests)]);
}

export default planetsSaga;