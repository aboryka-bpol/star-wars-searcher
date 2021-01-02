import { IPlanet } from "../interfaces/planet.interface";
import { PlanetsAction, PlanetsActionTypes } from "./planets.actions";

export interface PlanetsState {
    planets: IPlanet[],
    hasNextPage: boolean,
    hasPrevPage: boolean
}

const initialState: PlanetsState = {
    planets: [],
    hasPrevPage: false,
    hasNextPage: true
}

const reducer = (state = initialState, action: PlanetsAction) => {
    switch(action.type) {
        case PlanetsActionTypes.FETCH_PLANETS:
            return {
                ...state
            }
        case PlanetsActionTypes.FETCH_PLANETS_SUCCESS:
            const { planets, prev, next } = action.payload;
            return {
                ...state,
                planets,
                hasPrevPage: !!prev ,
                hasNextPage: !!next 
            }
        default:
            return state;
    }
}

export default reducer;