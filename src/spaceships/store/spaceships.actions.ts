import { IError } from "../../planets/interfaces/error.interface";
import { ISpaceship } from "../interfaces/spaceship.interface";

export enum SpaceshipsActionTypes {
    FETCH_SPACESHIPS = '[Spaceships] Fetch Spaceships',
    FETCH_SPACESHIPS_SUCCESS = '[Spaceships] Fetch Spaceships Success',
    FETCH_SPACESHIPS_FAILURE = '[Spaceships] Fetch Spaceships Failure'
}

export interface IFetchSpaceships {
    type: typeof SpaceshipsActionTypes.FETCH_SPACESHIPS,
    payload: {page: number, search: string}
}

export interface IFetchSpaceshipsSuccess {
    type: typeof SpaceshipsActionTypes.FETCH_SPACESHIPS_SUCCESS,
    payload: {spaceships: ISpaceship[], prev: string, next: string}
}

export interface IFetchSpaceshipsFailure {
    type: typeof SpaceshipsActionTypes.FETCH_SPACESHIPS_FAILURE,
    payload: {error: IError}
}

export const fetchSpaceships = (page: number, search: string): IFetchSpaceships => {
    return {
        type: SpaceshipsActionTypes.FETCH_SPACESHIPS,
        payload: {page, search},
    }
}

export const fetchSpaceshipsSuccess = (spaceships: ISpaceship[], prev: string, next: string): IFetchSpaceshipsSuccess => {
    return {
        type: SpaceshipsActionTypes.FETCH_SPACESHIPS_SUCCESS,
        payload: {
            spaceships,
            prev,
            next
        }
    }
}

export const fetchSpaceshipsFailure = (error: IError): IFetchSpaceshipsFailure => {
    return {
        type: SpaceshipsActionTypes.FETCH_SPACESHIPS_FAILURE,
        payload: {
            error
        },
    }
}

export type SpaceshipsAction = IFetchSpaceships | IFetchSpaceshipsSuccess | IFetchSpaceshipsFailure;
