import axios from 'axios';
import { ISpaceship } from '../interfaces/spaceship.interface';
import environment from '../../environment';

class SpaceshipsApi {
    static async getSpaceships(page: number, search: string): Promise<ISpaceship[]> {
        const { API_BASE_URL } = environment;
        const response = await axios.get(`${API_BASE_URL}starships/?page=${page}&search=${search}`);
        return response.data;
      };
}

export default SpaceshipsApi;