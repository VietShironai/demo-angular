import { Component, OnInit } from '@angular/core';
import {Movie} from '../../model/Movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movies = Movie;
  selectedMovie: Movie;
  getMoviefromService(): void {

    // @ts-ignore
    this.movies = this.movieService.getMovie();
}


  ngOnInit() {
    this.getMoviefromService();
  }

  onSelected(movie: Movie) {
    this.selectedMovie = movie;

  }
}
