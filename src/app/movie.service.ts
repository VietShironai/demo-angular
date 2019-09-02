import { Injectable } from '@angular/core';
import {fakeMovies} from './fake-movies';
import {Movie} from '../model/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovie(): Movie[] {
    return fakeMovies;
  }

  constructor() { }
}
