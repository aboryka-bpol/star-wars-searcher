import { ISpaceship } from "../interfaces/spaceship.interface";

export enum SpaceshipsActionTypes {
    FETCH_SPACESHIPS = '[Spaceships] Fetch Spaceships',
    FETCH_SPACESHIPS_SUCCESS = '[Spaceships] Fetch Spaceships Success'
}

export interface IFetchSpaceships {
    type: typeof SpaceshipsActionTypes.FETCH_SPACESHIPS,
    payload: {page: number, search: string}
}

export interface IFetchSpaceshipsSuccess {
    type: typeof SpaceshipsActionTypes.FETCH_SPACESHIPS_SUCCESS,
    payload: {spaceships: ISpaceship[], prev: string, next: string}
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

export type SpaceshipsAction = IFetchSpaceships | IFetchSpaceshipsSuccess;
