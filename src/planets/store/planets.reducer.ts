import { IPlanet } from "../interfaces/planet.interface";
import { PlanetsAction, PlanetsActionTypes } from "./planets.actions";

export interface PlanetsState {
    planets: IPlanet[]
}

const initialState: PlanetsState = {
    planets: []
}

const reducer = (state = initialState, action: PlanetsAction) => {
    switch(action.type) {
        case PlanetsActionTypes.FETCH_PLANETS:
            return {
                ...state
            }
        case PlanetsActionTypes.FETCH_PLANETS_SUCCESS:
            return {
                ...state,
                planets: action.payload
            }
        default:
            return state;
    }
}

export default reducer;