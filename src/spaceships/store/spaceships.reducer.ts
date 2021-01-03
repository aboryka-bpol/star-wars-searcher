import { ISpaceship } from "../interfaces/spaceship.interface";
import { SpaceshipsAction, SpaceshipsActionTypes } from "./spaceships.actions";

export interface ISpaceshipsState {
    spaceships: ISpaceship[],
    hasNextPage: boolean,
    hasPrevPage: boolean,
    isFetching: boolean
}

export interface ISpaceshipsAwareState {
    spaceshipsReducer: ISpaceshipsState
}

const initialState: ISpaceshipsState = {
    spaceships: [],
    hasPrevPage: false,
    hasNextPage: true,
    isFetching: false
}

const reducer = (state = initialState, action: SpaceshipsAction) => {
    switch(action.type) {
        case SpaceshipsActionTypes.FETCH_SPACESHIPS:
            return {
                ...state,
                isFetching: true
            }
        case SpaceshipsActionTypes.FETCH_SPACESHIPS_SUCCESS:
            const { spaceships, prev, next } = action.payload;
            return {
                ...state,
                spaceships,
                hasPrevPage: !!prev ,
                hasNextPage: !!next,
                isFetching: false
            }
        case SpaceshipsActionTypes.FETCH_SPACESHIPS_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state;
    }
}

export default reducer;