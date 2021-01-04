import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { PlanetsActionTypes } from './planets.actions';
import {
    fetchPlanetsSuccess,
    fetchPlanetsFailure,
    IFetchPlanets,
} from './planets.actions';
import PlanetsApi from '../api/planets.api';
import { IPlanet } from '../interfaces/planet.interface';

function* fetchPlanets(action: IFetchPlanets) {
    try {
        const { page, search } = action.payload;
        const { next, previous, results } = yield call(
            PlanetsApi.getPlanets,
            page,
            search
        );

        const mappedResults = results.map(
            (
                result: Partial<IPlanet> & {
                    rotation_period: number;
                    orbital_period: number;
                    surface_water: number;
                }
            ): IPlanet => {
                const {
                    rotation_period: rotationPeriod,
                    orbital_period: orbitalPeriod,
                    surface_water: surfaceWater,
                    ...rest
                } = result;

                return {
                    ...rest,
                    resourceKey: result.name,
                    rotationPeriod,
                    orbitalPeriod,
                    surfaceWater,
                };
            }
        );

        yield put(fetchPlanetsSuccess(mappedResults, previous, next));
    } catch (error) {
        yield put(fetchPlanetsFailure(error));
    }
}

function* watchRequests() {
    yield takeLatest(PlanetsActionTypes.FETCH_PLANETS, fetchPlanets);
}

function* planetsSaga() {
    yield all([fork(watchRequests)]);
}

export default planetsSaga;
