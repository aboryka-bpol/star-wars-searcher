import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { PeopleActionTypes } from './people.actions';
import {
    fetchPeopleSuccess,
    fetchPeopleFailure,
    IFetchPeople,
} from './people.actions';
import PeopleApi from '../api/people.api';
import { IPerson } from '../interfaces/people.interface';

function* fetchPeople(action: IFetchPeople) {
    try {
        const { page, search } = action.payload;
        const { next, previous, results } = yield call(
            PeopleApi.getPeople,
            page,
            search
        );

        const mappedResults = results.map(
            (
                result: Partial<IPerson> & {
                    hair_color: string;
                    skin_color: string;
                    eye_color: string;
                    birth_year: string;
                }
            ): IPerson => {
                const {
                    hair_color: hairColor,
                    skin_color: skinColor,
                    eye_color: eyeColor,
                    birth_year: birthYear,
                    ...rest
                } = result;

                return {
                    ...rest,
                    resourceKey: result.name,
                    hairColor,
                    skinColor,
                    eyeColor,
                    birthYear,
                };
            }
        );

        yield put(fetchPeopleSuccess(mappedResults, previous, next));
    } catch (error) {
        yield put(fetchPeopleFailure(error));
    }
}

function* watchRequests() {
    yield takeLatest(PeopleActionTypes.FETCH_PEOPLE, fetchPeople);
}

function* peopleSaga() {
    yield all([fork(watchRequests)]);
}

export default peopleSaga;
