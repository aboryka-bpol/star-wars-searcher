import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { FilmsActionTypes } from './films.actions';
import {
    fetchFilmsSuccess,
    fetchFilmsFailure,
    IFetchFilms,
} from './films.actions';
import FilmsApi from '../api/films.api';
import { IFilm } from '../interfaces/film.interface';

function* fetchFilms(action: IFetchFilms) {
    try {
        const { page, search } = action.payload;
        const { next, previous, results } = yield call(
            FilmsApi.getFilms,
            page,
            search
        );

        const mappedResults = results.map(
            (
                result: Partial<IFilm> & {
                    episode_id: number;
                    opening_crawl: string;
                    release_date: Date;
                }
            ): IFilm => {
                const {
                    episode_id: episodeId,
                    opening_crawl: openingCrawl,
                    release_date: releaseDate,
                    ...rest
                } = result;

                return {
                    ...rest,
                    resourceKey: result.title,
                    episodeId,
                    openingCrawl,
                    releaseDate,
                };
            }
        );

        yield put(fetchFilmsSuccess(mappedResults, previous, next));
    } catch (error) {
        yield put(fetchFilmsFailure(error));
    }
}

function* watchRequests() {
    yield takeLatest(FilmsActionTypes.FETCH_FILMS, fetchFilms);
}

function* filmsSaga() {
    yield all([fork(watchRequests)]);
}

export default filmsSaga;
