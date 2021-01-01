import { IPlanet } from "../interfaces/planet.interface";

export enum PlanetsActionTypes {
    FETCH_PLANETS = '[Planets] Fetch Planets',
    FETCH_PLANETS_SUCCESS = '[Planets] Fetch Planets Success'
}

export interface IFetchPlanets {
    type: typeof PlanetsActionTypes.FETCH_PLANETS
}

export interface IFetchPlanetsSuccess {
    type: typeof PlanetsActionTypes.FETCH_PLANETS_SUCCESS,
    payload: IPlanet[]
}

export const fetchPlanets = (): IFetchPlanets => {
    return {
        type: PlanetsActionTypes.FETCH_PLANETS
    }
}

export const fetchPlanetsSuccess = (planets: IPlanet[]): IFetchPlanetsSuccess => {
    return {
        type: PlanetsActionTypes.FETCH_PLANETS_SUCCESS,
        payload: planets
    }
}

export type PlanetsAction = IFetchPlanets | IFetchPlanetsSuccess;
