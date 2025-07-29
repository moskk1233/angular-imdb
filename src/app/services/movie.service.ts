import { Injectable } from '@angular/core';
import moviesJson from '../../../public/data/movies.json';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: MovieType[] = moviesJson;

  getMovies() {
    return this.movies;
  }

  getMovieById(id: number) {
    return this.movies.find((movie) => movie.id === id);
  }
}
