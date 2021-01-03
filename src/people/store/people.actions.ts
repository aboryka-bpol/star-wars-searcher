
import { IError } from "../../planets/interfaces/error.interface";
import { IPerson } from "../interfaces/people.interface";


export enum PeopleActionTypes {
    FETCH_PEOPLE = '[People] Fetch People',
    FETCH_PEOPLE_SUCCESS = '[People] Fetch People Success',
    FETCH_PEOPLE_FAILURE = '[People] Fetch People Failure',
}

export interface IFetchPeople {
    type: typeof PeopleActionTypes.FETCH_PEOPLE,
    payload: {page: number, search: string}
}

export interface IFetchPeopleSuccess {
    type: typeof PeopleActionTypes.FETCH_PEOPLE_SUCCESS,
    payload: {people: IPerson[], prev: string, next: string}
}

export interface IFetchPeopleFailure {
    type: typeof PeopleActionTypes.FETCH_PEOPLE_FAILURE,
    payload: {error: IError}
}


export const fetchPeople = (page: number, search: string): IFetchPeople => {
    return {
        type: PeopleActionTypes.FETCH_PEOPLE,
        payload: {page, search},
    }
}

export const fetchPeopleSuccess = (people: IPerson[], prev: string, next: string): IFetchPeopleSuccess => {
    return {
        type: PeopleActionTypes.FETCH_PEOPLE_SUCCESS,
        payload: {
            people,
            prev,
            next
        }
    }
}

export const fetchPeopleFailure = (error: IError) => {
    return {
        type: PeopleActionTypes.FETCH_PEOPLE_FAILURE,
        payload: {
            error
        }
    }
}

export type PeopleAction = IFetchPeople | IFetchPeopleSuccess | IFetchPeopleFailure;
