import { IFilm } from '../interfaces/film.interface';
import { FilmsAction, FilmsActionTypes } from './films.actions';

export interface IFilmsState {
    films: IFilm[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    isFetching: boolean;
}

export interface IFilmsAwareState {
    filmsReducer: IFilmsState;
}

const initialState: IFilmsState = {
    films: [],
    hasPrevPage: false,
    hasNextPage: true,
    isFetching: false,
};

const reducer = (state = initialState, action: FilmsAction) => {
    switch (action.type) {
        case FilmsActionTypes.FETCH_FILMS:
            return {
                ...state,
                isFetching: true,
            };
        case FilmsActionTypes.FETCH_FILMS_SUCCESS:
            const { films, prev, next } = action.payload;
            return {
                ...state,
                films,
                hasPrevPage: !!prev,
                hasNextPage: !!next,
                isFetching: false,
            };
        case FilmsActionTypes.FETCH_FILMS_FAILURE:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
};

export default reducer;
