import { all, call, fork, put, takeLatest} from 'redux-saga/effects';
import * as actions from './spaceships.actions';
import SpaceshipsApi from '../api/spaceships.api';
import { ISpaceship } from '../interfaces/spaceship.interface';

function* fetchPlanets(action: actions.IFetchSpaceships) {
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
            hyperdrive_rating: number
        }): ISpaceship => {
        const { cost_in_credits: costInCredits,
                max_atmosphering_speed: maxAtmospheringSpeed,
                cargo_capacity: cargoCapacity,
                hyperdrive_rating: hyperdriveRating,
                ...rest } = result;
                
        return {
            ...rest,
            costInCredits,
            maxAtmospheringSpeed,
            cargoCapacity,
            hyperdriveRating,
        }
    });

    yield put(actions.fetchSpaceshipsSuccess(mappedResults, previous, next))

}

function* watchRequests() {
    yield takeLatest(actions.SpaceshipsActionTypes.FETCH_SPACESHIPS, fetchPlanets);
}

function* planetsSaga() {
    yield all([fork(watchRequests)]);
}

export default planetsSaga;