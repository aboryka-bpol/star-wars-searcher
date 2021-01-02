import { ISpaceship } from "../interfaces/spaceship.interface";
import { SpaceshipsAction, SpaceshipsActionTypes } from "./spaceships.actions";

export interface ISpaceshipsState {
    spaceships: ISpaceship[],
    hasNextPage: boolean,
    hasPrevPage: boolean
}

export interface ISpaceshipsAwareState {
    spaceshipsReducer: ISpaceshipsState
}

const initialState: ISpaceshipsState = {
    spaceships: [],
    hasPrevPage: false,
    hasNextPage: true
}

const reducer = (state = initialState, action: SpaceshipsAction) => {
    switch(action.type) {
        case SpaceshipsActionTypes.FETCH_SPACESHIPS:
            return {
                ...state
            }
        case SpaceshipsActionTypes.FETCH_SPACESHIPS_SUCCESS:
            const { spaceships, prev, next } = action.payload;
            return {
                ...state,
                spaceships,
                hasPrevPage: !!prev ,
                hasNextPage: !!next 
            }
        default:
            return state;
    }
}

export default reducer;