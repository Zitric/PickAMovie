import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../provider/movies.service';
import { Movie } from '../../interfaces/movie.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  search = '';
  arrayMovies: Movie[] = [];

  constructor( private moviesService: MoviesService,
               public route: ActivatedRoute ) {
    this.route.params.subscribe( params => {
      console.log(params);
      if ( params.text ) {
        this.search = params.text;
        this.searchMovie();
      } else {
        this.moviesService.arrayMoviesSearched = [];
      }
    });
  }

  searchMovie() {

    if ( this.search.length !== 0 ) {
      this.moviesService.searchMovie( this.search )
        .subscribe(response => {
            this.arrayMovies = response;
        });
    }
  }

}
