import { IError } from '../../shared/interfaces/error.interface';
import { IFilm } from '../interfaces/film.interface';

export enum FilmsActionTypes {
    FETCH_FILMS = '[Films] Fetch Films',
    FETCH_FILMS_SUCCESS = '[Films] Fetch Films Success',
    FETCH_FILMS_FAILURE = '[Films] Fetch Films Failure',
}

export interface IFetchFilms {
    type: typeof FilmsActionTypes.FETCH_FILMS;
    payload: { page: number; search: string };
}

export interface IFetchFilmsSuccess {
    type: typeof FilmsActionTypes.FETCH_FILMS_SUCCESS;
    payload: { films: IFilm[]; prev: string; next: string };
}

export interface IFetchFilmsFailure {
    type: typeof FilmsActionTypes.FETCH_FILMS_FAILURE;
    payload: { error: IError };
}

export const fetchFilms = (page: number, search: string): IFetchFilms => {
    return {
        type: FilmsActionTypes.FETCH_FILMS,
        payload: { page, search },
    };
};

export const fetchFilmsSuccess = (
    films: IFilm[],
    prev: string,
    next: string
): IFetchFilmsSuccess => {
    return {
        type: FilmsActionTypes.FETCH_FILMS_SUCCESS,
        payload: {
            films,
            prev,
            next,
        },
    };
};

export const fetchFilmsFailure = (error: IError) => {
    return {
        type: FilmsActionTypes.FETCH_FILMS_FAILURE,
        payload: {
            error,
        },
    };
};

export type FilmsAction = IFetchFilms | IFetchFilmsSuccess | IFetchFilmsFailure;
