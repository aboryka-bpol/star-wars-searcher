import axios from 'axios';
import { IPlanet } from '../interfaces/planet.interface';
import environment from '../../environment';

class PlanetsApi {
  static async getPlanets(page: number, search: string): Promise<IPlanet[]> {
    const { API_BASE_URL } = environment;
    const response = await axios.get(
      `${API_BASE_URL}planets/?page=${page}&search=${search}`
    );
    return response.data;
  }
}

export default PlanetsApi;
