import { ISpecies } from "../interfaces/species.interface";
import { SpeciesAction, SpeciesActionTypes } from "./species.actions";

export interface ISpeciesState {
    species: ISpecies[],
    hasNextPage: boolean,
    hasPrevPage: boolean,
    isFetching: boolean
}

export interface ISpeciesAwareState {
    speciesReducer: ISpeciesState
}

const initialState: ISpeciesState = {
    species: [],
    hasPrevPage: false,
    hasNextPage: true,
    isFetching: false
}

const reducer = (state = initialState, action: SpeciesAction) => {
    switch(action.type) {
        case SpeciesActionTypes.FETCH_SPECIES:
            return {
                ...state,
                isFetching: true
            }
        case SpeciesActionTypes.FETCH_SPECIES_SUCCESS:
            const { species, prev, next } = action.payload;
            return {
                ...state,
                species,
                hasPrevPage: !!prev ,
                hasNextPage: !!next,
                isFetching: false
            }
        case SpeciesActionTypes.FETCH_SPECIES_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state;
    }
}

export default reducer;