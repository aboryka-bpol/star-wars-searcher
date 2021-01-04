import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
    fetchSpeciesSuccess,
    fetchSpeciesFailure,
    IFetchSpecies,
    SpeciesActionTypes,
} from './species.actions';
import SpeciesApi from '../api/species.api';
import { ISpecies } from '../interfaces/species.interface';

function* fetchSpecies(action: IFetchSpecies) {
    try {
        const { page, search } = action.payload;
        const { next, previous, results } = yield call(
            SpeciesApi.getSpecies,
            page,
            search
        );

        const mappedResults = results.map(
            (
                result: Partial<ISpecies> & {
                    average_height: number;
                    skin_colors: string;
                    hair_colors: string;
                    eye_colors: string;
                    average_lifespan: number;
                }
            ) => {
                const {
                    average_height: averageHeight,
                    skin_colors: skinColors,
                    hair_colors: hairColors,
                    eye_colors: eyeColors,
                    average_lifespan: averageLifespan,
                    ...rest
                } = result;

                return {
                    ...rest,
                    resourceKey: result.name,
                    averageHeight,
                    skinColors,
                    hairColors,
                    eyeColors,
                    averageLifespan,
                };
            }
        );
        yield put(fetchSpeciesSuccess(mappedResults, previous, next));
    } catch (error) {
        yield put(fetchSpeciesFailure(error));
    }
}

function* watchRequests() {
    yield takeLatest(SpeciesActionTypes.FETCH_SPECIES, fetchSpecies);
}

function* speciesSaga() {
    yield all([fork(watchRequests)]);
}

export default speciesSaga;
