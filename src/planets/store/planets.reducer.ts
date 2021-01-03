import { IPlanet } from "../interfaces/planet.interface";
import { PlanetsAction, PlanetsActionTypes } from "./planets.actions";

export interface IPlanetsState {
    planets: IPlanet[],
    hasNextPage: boolean,
    hasPrevPage: boolean,
    isFetching: boolean
}

export interface IPlanetsAwareState {
    planetsReducer: IPlanetsState
}

const initialState: IPlanetsState = {
    planets: [],
    hasPrevPage: false,
    hasNextPage: true,
    isFetching: false
}

const reducer = (state = initialState, action: PlanetsAction) => {
    switch(action.type) {
        case PlanetsActionTypes.FETCH_PLANETS:
            return {
                ...state,
                isFetching: true
            }
        case PlanetsActionTypes.FETCH_PLANETS_SUCCESS:
            const { planets, prev, next } = action.payload;
            return {
                ...state,
                planets,
                hasPrevPage: !!prev ,
                hasNextPage: !!next,
                isFetching: false
            }
        case PlanetsActionTypes.FETCH_PLANETS_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state;
    }
}

export default reducer;