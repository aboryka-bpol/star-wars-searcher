import { all, call, fork, put, takeLatest} from 'redux-saga/effects';
import {fetchSpaceshipsSuccess, fetchSpaceshipsFailure, IFetchSpaceships, SpaceshipsActionTypes}  from './spaceships.actions';
import SpaceshipsApi from '../api/spaceships.api';
import { ISpaceship } from '../interfaces/spaceship.interface';

function* fetchPlanets(action: IFetchSpaceships) {
    try {
        const { page, search } = action.payload;
        const { next, previous, results } = yield call(
            SpaceshipsApi.getSpaceships,
            page,
            search
        );

        const mappedResults = results.map(
            (result: Partial<ISpaceship[]> & { 
                cost_in_credits: number,
                max_atmosphering_speed: number,
                cargo_capacity: number,
                hyperdrive_rating: number,
                starship_class: string,
                MGLT: number
            }): ISpaceship => {
            const { cost_in_credits: costInCredits,
                    max_atmosphering_speed: maxAtmospheringSpeed,
                    cargo_capacity: cargoCapacity,
                    hyperdrive_rating: hyperdriveRating,
                    starship_class: starshipClass,
                    MGLT: mglt,
                    ...rest } = result;
                    
            return {
                ...rest,
                costInCredits,
                maxAtmospheringSpeed,
                cargoCapacity,
                hyperdriveRating,
                starshipClass,
                mglt
            }
        })
        yield put(fetchSpaceshipsSuccess(mappedResults, previous, next));
    } catch (error) {
        yield put(fetchSpaceshipsFailure(error));
    }
}

function* watchRequests() {
    yield takeLatest(SpaceshipsActionTypes.FETCH_SPACESHIPS, fetchPlanets);
}

function* planetsSaga() {
    yield all([fork(watchRequests)]);
}

export default planetsSaga;