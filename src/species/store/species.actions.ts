import { IError } from '../../shared/interfaces/error.interface';
import { ISpecies } from '../interfaces/species.interface';

export enum SpeciesActionTypes {
    FETCH_SPECIES = '[Species] Fetch Species',
    FETCH_SPECIES_SUCCESS = '[Species] Fetch Species Success',
    FETCH_SPECIES_FAILURE = '[Species] Fetch Species Failure',
}

export interface IFetchSpecies {
    type: typeof SpeciesActionTypes.FETCH_SPECIES;
    payload: { page: number; search: string };
}

export interface IFetchSpeciesSuccess {
    type: typeof SpeciesActionTypes.FETCH_SPECIES_SUCCESS;
    payload: { species: ISpecies[]; prev: string; next: string };
}

export interface IFetchSpeciesFailure {
    type: typeof SpeciesActionTypes.FETCH_SPECIES_FAILURE;
    payload: { error: IError };
}

export const fetchSpecies = (page: number, search: string): IFetchSpecies => {
    return {
        type: SpeciesActionTypes.FETCH_SPECIES,
        payload: { page, search },
    };
};

export const fetchSpeciesSuccess = (
    species: ISpecies[],
    prev: string,
    next: string
): IFetchSpeciesSuccess => {
    return {
        type: SpeciesActionTypes.FETCH_SPECIES_SUCCESS,
        payload: {
            species,
            prev,
            next,
        },
    };
};

export const fetchSpeciesFailure = (error: IError): IFetchSpeciesFailure => {
    return {
        type: SpeciesActionTypes.FETCH_SPECIES_FAILURE,
        payload: {
            error,
        },
    };
};

export type SpeciesAction =
    | IFetchSpecies
    | IFetchSpeciesSuccess
    | IFetchSpeciesFailure;
