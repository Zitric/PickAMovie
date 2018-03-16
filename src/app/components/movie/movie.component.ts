import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../provider/movies.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  movie: Movie;
  backTo: string;
  search: string;

  constructor( private movieService: MoviesService,
               private route: ActivatedRoute ) {

      this.route.params.subscribe( params => {
          this.backTo = params.page;
          if (params.search){
            this.search = params.search;
          }
          this.movieService.getMovieDB( params.id )
            .subscribe( movie => {
              this.movie = movie;
              console.log(movie);
            });
      });
  }

  ngOnInit() {
  }

}
