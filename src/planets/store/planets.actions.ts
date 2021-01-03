import { IError } from "../interfaces/error.interface";
import { IPlanet } from "../interfaces/planet.interface";


export enum PlanetsActionTypes {
    FETCH_PLANETS = '[Planets] Fetch Planets',
    FETCH_PLANETS_SUCCESS = '[Planets] Fetch Planets Success',
    FETCH_PLANETS_FAILURE = '[Planets] Fetch Planets Failure',
}

export interface IFetchPlanets {
    type: typeof PlanetsActionTypes.FETCH_PLANETS,
    payload: {page: number, search: string}
}

export interface IFetchPlanetsSuccess {
    type: typeof PlanetsActionTypes.FETCH_PLANETS_SUCCESS,
    payload: {planets: IPlanet[], prev: string, next: string}
}

export interface IFetchPlanetsFailure {
    type: typeof PlanetsActionTypes.FETCH_PLANETS_FAILURE,
    payload: {error: IError}
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

export const fetchPlanetsFailure = (error: IError) => {
    return {
        type: PlanetsActionTypes.FETCH_PLANETS_FAILURE,
        payload: {
            error
        }
    }
}

export type PlanetsAction = IFetchPlanets | IFetchPlanetsSuccess | IFetchPlanetsFailure;
