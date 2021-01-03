import { IVehicle } from "../interfaces/vehicle.interface";
import { VehiclesAction, VehiclesActionTypes } from "./vehicles.actions";

export interface IVehiclesState {
    vehicles: IVehicle[],
    hasNextPage: boolean,
    hasPrevPage: boolean,
    isFetching: boolean
}

export interface IVehiclesAwareState {
    vehiclesReducer: IVehiclesState
}

const initialState: IVehiclesState = {
    vehicles: [],
    hasPrevPage: false,
    hasNextPage: true,
    isFetching: false
}

const reducer = (state = initialState, action: VehiclesAction) => {
    switch(action.type) {
        case VehiclesActionTypes.FETCH_VEHICLES:
            return {
                ...state,
                isFetching: true
            }
        case VehiclesActionTypes.FETCH_VEHICLES_SUCCESS:
            const { vehicles, prev, next } = action.payload;
            return {
                ...state,
                vehicles,
                hasPrevPage: !!prev ,
                hasNextPage: !!next,
                isFetching: false
            }
        case VehiclesActionTypes.FETCH_VEHICLES_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state;
    }
}

export default reducer;