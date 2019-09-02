import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {MovieComponent} from './movie/movie.component';

// @ts-ignore

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'movies',
      component: MovieComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
