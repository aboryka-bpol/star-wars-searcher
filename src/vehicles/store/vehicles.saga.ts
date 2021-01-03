import { all, call, fork, put, takeLatest} from 'redux-saga/effects';
import {fetchVehiclesSuccess, fetchVehiclesFailure, IFetchVehicles, VehiclesActionTypes}  from './vehicles.actions';
import VehiclesApi from '../api/vehicles.api';
import { IVehicle } from '../interfaces/vehicle.interface';

function* fetchVehicles(action: IFetchVehicles) {
    try {
        const { page, search } = action.payload;
        const { next, previous, results } = yield call(
            VehiclesApi.getVehicles,
            page,
            search
        );

        const mappedResults = results.map(
            (result: Partial<IVehicle> & { 
                cost_in_credits: number,
                max_atmosphering_speed: number,
                cargo_capacity: number,
                hyperdrive_rating: number,
                vehicle_class: string,
            }) => {
            const { cost_in_credits: costInCredits,
                    max_atmosphering_speed: maxAtmospheringSpeed,
                    cargo_capacity: cargoCapacity,
                    vehicle_class: vehicleClass,
                    ...rest } = result;
                    
            return {
                ...rest,
                resourceKey:result.name,
                costInCredits,
                maxAtmospheringSpeed,
                cargoCapacity,
                vehicleClass,
            }
        })
        yield put(fetchVehiclesSuccess(mappedResults, previous, next));
    } catch (error) {
        yield put(fetchVehiclesFailure(error));
    }
}

function* watchRequests() {
    yield takeLatest(VehiclesActionTypes.FETCH_VEHICLES, fetchVehicles);
}

function* vehiclesSaga() {
    yield all([fork(watchRequests)]);
}

export default vehiclesSaga;