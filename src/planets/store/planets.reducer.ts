import { IPlanet } from "../interfaces/planet.interface";
import { PlanetsAction, PlanetsActionTypes } from "./planets.actions";

export interface IPlanetsState {
    planets: IPlanet[],
    hasNextPage: boolean,
    hasPrevPage: boolean
}

export interface IPlanetsAwareState {
    planetsReducer: IPlanetsState
}

const initialState: IPlanetsState = {
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