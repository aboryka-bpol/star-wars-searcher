import axios from 'axios';
import { IPerson } from '../interfaces/people.interface';
import environment from '../../environment';

class PeopleApi {
    static async getPeople(page: number, search: string): Promise<IPerson[]> {
        const { API_BASE_URL } = environment;
        const response = await axios.get(`${API_BASE_URL}people/?page=${page}&search=${search}`);
        return response.data;
      };
}

export default PeopleApi;