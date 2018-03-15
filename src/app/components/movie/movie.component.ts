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

  constructor( private movieService: MoviesService,
               private route: ActivatedRoute ) {

      this.route.params.subscribe( params => {
          this.movie = this.movieService.getMovie( Number( params.id ));
      });
  }

  ngOnInit() {
  }

}
