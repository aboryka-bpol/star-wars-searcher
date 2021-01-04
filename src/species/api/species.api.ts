import axios from 'axios';
import { ISpecies } from '../interfaces/species.interface';
import environment from '../../environment';

class SpeciesApi {
  static async getSpecies(page: number, search: string): Promise<ISpecies[]> {
    const { API_BASE_URL } = environment;
    const response = await axios.get(
      `${API_BASE_URL}species/?page=${page}&search=${search}`
    );
    return response.data;
  }
}

export default SpeciesApi;
