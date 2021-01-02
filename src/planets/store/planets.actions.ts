import { IPlanet } from "../interfaces/planet.interface";

export enum PlanetsActionTypes {
    FETCH_PLANETS = '[Planets] Fetch Planets',
    FETCH_PLANETS_SUCCESS = '[Planets] Fetch Planets Success'
}

export interface IFetchPlanets {
    type: typeof PlanetsActionTypes.FETCH_PLANETS,
    payload: {page: number, search: string}
}

export interface IFetchPlanetsSuccess {
    type: typeof PlanetsActionTypes.FETCH_PLANETS_SUCCESS,
    payload: {planets: IPlanet[], prev: string, next: string}
}


export const fetchPlanets = (page: number, search: string): IFetchPlanets => {
    return {
        type: PlanetsActionTypes.FETCH_PLANETS,
        payload: {page, search},
    }
}

export const fetchPlanetsSuccess = (planets: IPlanet[], prev: string, next: string): IFetchPlanetsSuccess => {
    return {
        type: PlanetsActionTypes.FETCH_PLANETS_SUCCESS,
        payload: {
            planets,
            prev,
            next
        }
    }
}

export type PlanetsAction = IFetchPlanets | IFetchPlanetsSuccess;
