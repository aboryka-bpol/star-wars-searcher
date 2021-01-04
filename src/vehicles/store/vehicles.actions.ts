import { IError } from '../../planets/interfaces/error.interface';
import { IVehicle } from '../interfaces/vehicle.interface';

export enum VehiclesActionTypes {
    FETCH_VEHICLES = '[Vehicles] Fetch Vehicles',
    FETCH_VEHICLES_SUCCESS = '[Vehicles] Fetch Vehicles Success',
    FETCH_VEHICLES_FAILURE = '[Vehicles] Fetch Vehicles Failure',
}

export interface IFetchVehicles {
    type: typeof VehiclesActionTypes.FETCH_VEHICLES;
    payload: { page: number; search: string };
}

export interface IFetchVehiclesSuccess {
    type: typeof VehiclesActionTypes.FETCH_VEHICLES_SUCCESS;
    payload: { vehicles: IVehicle[]; prev: string; next: string };
}

export interface IFetchVehiclesFailure {
    type: typeof VehiclesActionTypes.FETCH_VEHICLES_FAILURE;
    payload: { error: IError };
}

export const fetchVehicles = (page: number, search: string): IFetchVehicles => {
    return {
        type: VehiclesActionTypes.FETCH_VEHICLES,
        payload: { page, search },
    };
};

export const fetchVehiclesSuccess = (
    vehicles: IVehicle[],
    prev: string,
    next: string
): IFetchVehiclesSuccess => {
    return {
        type: VehiclesActionTypes.FETCH_VEHICLES_SUCCESS,
        payload: {
            vehicles,
            prev,
            next,
        },
    };
};

export const fetchVehiclesFailure = (error: IError): IFetchVehiclesFailure => {
    return {
        type: VehiclesActionTypes.FETCH_VEHICLES_FAILURE,
        payload: {
            error,
        },
    };
};

export type VehiclesAction =
    | IFetchVehicles
    | IFetchVehiclesSuccess
    | IFetchVehiclesFailure;
