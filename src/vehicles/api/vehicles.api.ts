import axios from 'axios';
import { IVehicle } from '../interfaces/vehicle.interface';
import environment from '../../environment';

class VehiclesApi {
    static async getVehicles(page: number, search: string): Promise<IVehicle[]> {
        const { API_BASE_URL } = environment;
        const response = await axios.get(`${API_BASE_URL}vehicles/?page=${page}&search=${search}`);
        return response.data;
      };
}

export default VehiclesApi;