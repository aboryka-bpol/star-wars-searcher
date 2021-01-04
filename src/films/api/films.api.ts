import axios from 'axios';
import { IFilm } from '../interfaces/film.interface';
import environment from '../../environment';

class FilmsApi {
  static async getFilms(page: number, search: string): Promise<IFilm[]> {
    const { API_BASE_URL } = environment;
    const response = await axios.get(
      `${API_BASE_URL}films/?page=${page}&search=${search}`
    );
    return response.data;
  }
}

export default FilmsApi;
